import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "A placeholder for Purselo privacy information. A privacy policy has not been published yet.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow={site.legalName} title="Privacy">
      <p>
        Purselo is a forthcoming iOS application from {site.legalName}. This page is a
        placeholder for privacy information about the Purselo app and this website.
      </p>
      <p>
        A privacy policy has not been published yet. This page does not describe how
        information is collected, used, stored, or shared.
      </p>
      <p>
        If you have a privacy question, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
