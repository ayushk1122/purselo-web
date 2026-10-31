export default async function linkFallbackGuard(request: Request): Promise<Response> {
  const notFound = await fetch(new URL("/404.html", request.url));
  return new Response(notFound.body, {
    status: 404,
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
}

export const config = {
  path: "/link-fallback/*",
  header: { "x-purselo-fallback": false },
};
