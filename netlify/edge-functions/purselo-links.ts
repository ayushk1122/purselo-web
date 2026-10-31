// Must match the tokens in src/lib/link-fallback.ts.
const USERNAME_TOKEN = "__PURSELO_USERNAME__";
const PURSUIT_ID_TOKEN = "__PURSELO_PURSUIT_ID__";

const USERNAME = /^[a-z0-9_]{3,20}$/;
const PURSUIT_ID = /^[0-9a-f]{8}$/;

type LinkMatch =
  | { template: "/link-fallback/selo"; username: string }
  | { template: "/link-fallback/pursuit"; username: string; pursuitId: string };

export function matchLink(pathname: string): LinkMatch | null {
  const segments = pathname.replace(/\/$/, "").split("/").slice(1);

  let handle: string;
  try {
    handle = decodeURIComponent(segments[0] ?? "");
  } catch {
    return null;
  }
  if (!handle.startsWith("@")) return null;

  const username = handle.slice(1).toLowerCase();
  if (!USERNAME.test(username)) return null;

  if (segments.length === 1) {
    return { template: "/link-fallback/selo", username };
  }
  if (segments.length === 3 && segments[1] === "p" && PURSUIT_ID.test(segments[2])) {
    return { template: "/link-fallback/pursuit", username, pursuitId: segments[2] };
  }
  return null;
}

export default async function purseloLinks(request: Request): Promise<Response | undefined> {
  const match = matchLink(new URL(request.url).pathname);
  if (!match) return;

  const template = await fetch(new URL(match.template, request.url), {
    headers: { "x-purselo-fallback": "1" },
  });
  if (!template.ok) return;

  let html = (await template.text()).replaceAll(USERNAME_TOKEN, match.username);
  if ("pursuitId" in match) html = html.replaceAll(PURSUIT_ID_TOKEN, match.pursuitId);

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=0, must-revalidate",
      "x-robots-tag": "noindex",
    },
  });
}

export const config = {
  pattern: "^/(?:@|%40).*$",
};
