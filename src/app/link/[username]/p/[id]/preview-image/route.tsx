import { linkPreviewImage } from "@/lib/link-preview-image";
import { parsePursuitId, parseUsername } from "@/lib/link-preview";

export async function GET(
  _request: Request,
  { params }: RouteContext<"/link/[username]/p/[id]/preview-image">,
) {
  const { username, id } = await params;
  const handle = parseUsername(username);
  const pursuitId = parsePursuitId(id);
  if (!handle || !pursuitId) return new Response("Not found", { status: 404 });

  return linkPreviewImage(handle, pursuitId);
}
