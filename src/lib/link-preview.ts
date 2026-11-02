import type { Metadata } from "next";
import { cache } from "react";
import { site } from "@/lib/site";

export type LinkPreview = {
  kind: "selo" | "pursuit" | "private_selo";
  title: string;
  description: string;
  url: string;
  owner_name: string;
  /** A signed storage link that expires in an hour; only ever fetched server-side. */
  image: string | null;
};

const USERNAME = /^[a-z0-9_]{3,20}$/;
const PURSUIT_ID = /^[0-9a-f]{8}$/;
const KINDS = new Set(["selo", "pursuit", "private_selo"]);

export const linkPreviewProject = process.env.LINK_PREVIEW_PROJECT!;
const imageOrigin = process.env.LINK_PREVIEW_ORIGIN!;

export function parseUsername(value: string): string | null {
  let username: string;
  try {
    username = decodeURIComponent(value).toLowerCase();
  } catch {
    return null;
  }
  return USERNAME.test(username) ? username : null;
}

export function parsePursuitId(value: string): string | null {
  return PURSUIT_ID.test(value) ? value : null;
}

function isLinkPreview(value: unknown): value is LinkPreview {
  if (typeof value !== "object" || value === null) return false;
  const preview = value as Record<string, unknown>;
  return (
    KINDS.has(preview.kind as string) &&
    ["title", "description", "url", "owner_name"].every(
      (key) => typeof preview[key] === "string",
    ) &&
    (preview.image === null || typeof preview.image === "string")
  );
}

/** The preview for a Selo (or one of its Pursuits), or null when there isn't one to show. */
export const getLinkPreview = cache(
  async (username: string, pursuitId?: string): Promise<LinkPreview | null> => {
    const endpoint = new URL(`https://${linkPreviewProject}.supabase.co/functions/v1/link-preview`);
    endpoint.searchParams.set("u", username);
    if (pursuitId) endpoint.searchParams.set("p", pursuitId);

    try {
      const response = await fetch(endpoint, {
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) return null;
      const preview: unknown = await response.json();
      return isLinkPreview(preview) ? preview : null;
    } catch {
      return null;
    }
  },
);

export async function linkMetadata(username: string, pursuitId?: string): Promise<Metadata> {
  const generic: Metadata = {
    title: { absolute: `@${username} on Purselo` },
    robots: { index: false },
  };

  const preview = await getLinkPreview(username, pursuitId);
  if (!preview) return generic;

  const path = pursuitId ? `/@${username}/p/${pursuitId}` : `/@${username}`;
  const image = { url: `${imageOrigin}${path}/opengraph-image`, width: 1200, height: 630 };

  return {
    ...generic,
    title: { absolute: preview.title },
    description: preview.description,
    openGraph: {
      title: preview.title,
      description: preview.description,
      url: preview.url,
      siteName: site.name,
      type: "website",
      images: [{ ...image, alt: preview.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: preview.title,
      description: preview.description,
      images: [image.url],
    },
  };
}
