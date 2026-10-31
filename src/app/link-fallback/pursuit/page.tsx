import { LinkFallback, linkFallbackMetadata } from "@/components/link-fallback";

export const metadata = linkFallbackMetadata;

export default function PursuitLinkFallbackPage() {
  return <LinkFallback kind="pursuit" />;
}
