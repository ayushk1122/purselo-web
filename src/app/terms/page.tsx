import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { app } from "@/lib/site";

const effectiveDate = "October 26, 2026";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the Purselo iPhone app, operated by Purselo LLC.",
  alternates: {
    canonical: "/terms",
  },
};

const email = app.supportEmail;
const mailto = `mailto:${email}`;

// TODO: Have legal review add any needed sections, such as limits of liability, dispute resolution, and how changes to these terms are announced.
export default function TermsPage() {
  return (
    <LegalPage eyebrow={`${app.name} for iPhone`} title="Terms of Use" effectiveDate={effectiveDate} email={email}>
      <p>
        These terms apply when you use the {app.name} iPhone app. {app.name} is operated by{" "}
        {app.operator}, based in {app.location}. By using {app.name}, you agree to these
        terms.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You must be 13 or older to use Purselo.</li>
        <li>
          Keep your sign-in details secure. You&rsquo;re responsible for what happens on
          your account.
        </li>
        <li>
          You can delete your account anytime in the app under Settings &rarr; Delete
          account. If you can&rsquo;t access the app, email <a href={mailto}>{email}</a>.
        </li>
      </ul>

      <h2>Your content</h2>
      <p>
        You own what you create in Purselo. You give us only the permission we need to store
        your content and show it the way you choose, for example only to you, or to the
        people you share it with.
      </p>

      <h2>Using Purselo responsibly</h2>
      <p>Don&rsquo;t use Purselo to post or share content that is:</p>
      <ul>
        <li>Illegal.</li>
        <li>Abusive, threatening, or harassing.</li>
        <li>Infringing on someone else&rsquo;s rights, such as their copyright.</li>
      </ul>
      <p>We may suspend accounts that break these rules.</p>
      <p>
        Purselo has no tolerance for objectionable content or abusive users. Don&rsquo;t
        post content that is sexually explicit, hateful, violent, harassing, or that
        endangers anyone, including yourself. You can report a profile, Selo, Pursuit, or
        Explore card, and block anyone. We review reports within 24 hours and may remove
        content and suspend or delete accounts that break these rules.
      </p>

      <h2>No warranties</h2>
      <p>
        Purselo is provided &ldquo;as is,&rdquo; without warranties of any kind.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, United States.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains what information Purselo
        collects and how we use it.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Email <a href={mailto}>{email}</a>.
      </p>
    </LegalPage>
  );
}
