import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { app, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with the Purselo iPhone app: signing in, resetting your password, and deleting your account.",
  alternates: {
    canonical: "/support",
  },
};

const supportEmail = app.supportEmail;

export default function SupportPage() {
  return (
    <LegalPage eyebrow={`${app.name} for iPhone`} title="Support" email={supportEmail}>
      <p>Purselo is coming soon to iOS.</p>

      <h2>Signing in</h2>
      <p>
        You can sign in with a 6-digit code sent to your email, with your email or username
        and a password, or with Google or Apple.
      </p>
      <p>
        Forgot your password? On the sign-in screen, choose &ldquo;Forgot password? Email me
        a code&rdquo;, enter the code we send, then choose a new password.
      </p>

      <h2>Deleting your account</h2>
      <p>
        You can delete your account anytime in the app under Settings &rarr; Delete
        account. This permanently removes your profile, boards, Pursuits, photos, videos,
        follows, and followers.
      </p>
      <p>
        For anything else with your account, including if you can&rsquo;t sign in, email{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        For help with the app, your account, or privacy requests, email{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. For anything else, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        See our <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
