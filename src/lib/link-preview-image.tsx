import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getLinkPreview, type LinkPreview, linkPreviewProject } from "@/lib/link-preview";

const assets = join(process.cwd(), "src/assets/og");
const instrumentSerif = readFile(join(assets, "InstrumentSerif-Regular.ttf"));
const wordmark = readFile(join(assets, "purselo-wordmark-paper.png")).then(
  (png) => `data:image/png;base64,${png.toString("base64")}`,
);

const cacheControl = "public, max-age=300";
const PICTURE_TYPES = new Set(["image/jpeg", "image/png"]);
const MAX_PICTURE_BYTES = 8 * 1024 * 1024;

const paper = "#f6f1e8";
const muted = "#a39b90";

/** The signed picture as a data URL, so the expiring link never leaves the server. */
async function loadPicture(signedUrl: string): Promise<string | null> {
  const storage = `https://${linkPreviewProject}.supabase.co/storage/v1/object/sign/`;
  if (!signedUrl.startsWith(storage)) return null;

  try {
    const response = await fetch(signedUrl, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    const type = response.headers.get("content-type")?.split(";")[0] ?? "";
    if (!response.ok || !PICTURE_TYPES.has(type)) return null;
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength > MAX_PICTURE_BYTES) return null;
    return `data:${type};base64,${Buffer.from(bytes).toString("base64")}`;
  } catch {
    return null;
  }
}

function LockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={muted} strokeWidth="2">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

export async function linkPreviewImage(username: string, pursuitId?: string): Promise<Response> {
  const preview = await getLinkPreview(username, pursuitId);
  if (!preview) {
    return new Response("Not found", { status: 404, headers: { "cache-control": cacheControl } });
  }

  const picture = preview.image ? await loadPicture(preview.image) : null;
  return renderLinkPreview(preview, username, picture);
}

export async function renderLinkPreview(
  preview: LinkPreview,
  username: string,
  picture: string | null,
): Promise<Response> {
  const [serif, wordmarkSrc] = await Promise.all([instrumentSerif, wordmark]);
  const titleSize = preview.title.length > 48 ? 64 : preview.title.length > 24 ? 80 : 96;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 80,
          padding: "0 96px",
          backgroundColor: "#000",
          color: paper,
        }}
      >
        {picture ? (
          // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
          <img
            src={picture}
            width={380}
            height={380}
            style={{ borderRadius: 9999, objectFit: "cover", flexShrink: 0 }}
          />
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
          {preview.kind === "private_selo" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
                fontSize: 28,
                color: muted,
              }}
            >
              <LockIcon />
              Private Selo
            </div>
          ) : null}
          <div
            style={{
              display: "block",
              lineClamp: 3,
              fontFamily: "Instrument Serif",
              fontSize: titleSize,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {preview.title}
          </div>
          <div style={{ marginTop: 24, fontSize: 34, color: muted }}>{`@${username}`}</div>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={wordmarkSrc} width={203} height={80} style={{ marginTop: 64 }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Instrument Serif", data: serif, weight: 400, style: "normal" }],
      headers: { "cache-control": cacheControl },
    },
  );
}
