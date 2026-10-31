import { LinkFallback, linkFallbackMetadata } from "@/components/link-fallback";

export const metadata = linkFallbackMetadata;

export default function SeloLinkFallbackPage() {
  return <LinkFallback kind="selo" />;
}
