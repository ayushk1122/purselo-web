import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support for Purselo is not available yet. Email contact@purselo.app with questions.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <LegalPage eyebrow={site.legalName} title="Support">
      <p>
        Purselo is coming soon to iOS. Help documentation and in-app support are not
        available yet.
      </p>
      <p>
        For questions about the app or this website, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>This page will be updated when support resources are ready.</p>
    </LegalPage>
  );
}
