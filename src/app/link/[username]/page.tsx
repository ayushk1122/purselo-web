import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkFallback } from "@/components/link-fallback";
import { getLinkPreview, linkMetadata, parseUsername } from "@/lib/link-preview";

export async function generateMetadata({
  params,
}: PageProps<"/link/[username]">): Promise<Metadata> {
  const username = parseUsername((await params).username);
  return username ? linkMetadata(username) : {};
}

export default async function SeloLinkPage({ params }: PageProps<"/link/[username]">) {
  const username = parseUsername((await params).username);
  if (!username) notFound();

  return <LinkFallback username={username} preview={await getLinkPreview(username)} />;
}
