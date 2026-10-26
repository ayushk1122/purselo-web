import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { mosaic } from "@/lib/site";

// TODO: Confirm the effective date before the App Store launch.
const effectiveDate = "October 25, 2026";

export const metadata: Metadata = {
  title: "Mosaic Terms of Use",
  description: "The terms for using the Mosaic iPhone app, operated by PURSELO LLC.",
  alternates: {
    canonical: "/terms",
  },
};

const email = mosaic.supportEmail;
const mailto = `mailto:${email}`;

// TODO: Have legal review add any needed sections, such as a minimum age, limits of liability, dispute resolution, and how changes to these terms are announced.
export default function TermsPage() {
  return (
    <LegalPage eyebrow="Mosaic for iPhone" title="Terms of Use" effectiveDate={effectiveDate} email={email}>
      <p>
        These terms apply when you use the {mosaic.name} iPhone app. {mosaic.name} is
        operated by {mosaic.operator}, based in {mosaic.location}. By using Mosaic, you
        agree to these terms.
      </p>

      <h2>Your content</h2>
      <p>
        You own what you create in Mosaic. You give us only the permission we need to store
        your content and show it the way you choose, for example only to you, or to the
        people you share it with.
      </p>

      <h2>Using Mosaic responsibly</h2>
      <p>Don&rsquo;t use Mosaic to post or share content that is:</p>
      <ul>
        <li>Illegal.</li>
        <li>Abusive, threatening, or harassing.</li>
        <li>Infringing on someone else&rsquo;s rights, such as their copyright.</li>
      </ul>
      <p>We may suspend accounts that break these rules.</p>

      <h2>No warranties</h2>
      <p>
        Mosaic is provided &ldquo;as is,&rdquo; without warranties of any kind.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, United States.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains what information Mosaic
        collects and how we use it.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Email <a href={mailto}>{email}</a>.
      </p>
    </LegalPage>
  );
}
