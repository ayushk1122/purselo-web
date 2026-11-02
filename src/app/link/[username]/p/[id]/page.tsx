import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkFallback } from "@/components/link-fallback";
import { linkMetadata, parsePursuitId, parseUsername } from "@/lib/link-preview";

export async function generateMetadata({
  params,
}: PageProps<"/link/[username]/p/[id]">): Promise<Metadata> {
  const { username, id } = await params;
  const handle = parseUsername(username);
  const pursuitId = parsePursuitId(id);
  return handle && pursuitId ? linkMetadata(handle, pursuitId) : {};
}

export default async function PursuitLinkPage({ params }: PageProps<"/link/[username]/p/[id]">) {
  const { username, id } = await params;
  const handle = parseUsername(username);
  const pursuitId = parsePursuitId(id);
  if (!handle || !pursuitId) notFound();

  return <LinkFallback username={handle} pursuitId={pursuitId} />;
}
