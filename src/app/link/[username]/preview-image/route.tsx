import { linkPreviewImage } from "@/lib/link-preview-image";
import { parseUsername } from "@/lib/link-preview";

export async function GET(_request: Request, { params }: RouteContext<"/link/[username]/preview-image">) {
  const username = parseUsername((await params).username);
  if (!username) return new Response("Not found", { status: 404 });

  return linkPreviewImage(username);
}
