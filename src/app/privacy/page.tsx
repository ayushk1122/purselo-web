import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { mosaic } from "@/lib/site";

// TODO: Confirm the effective date before the App Store launch.
const effectiveDate = "October 25, 2026";

export const metadata: Metadata = {
  title: "Mosaic Privacy Policy",
  description:
    "How the Mosaic iPhone app, operated by PURSELO LLC, collects, uses, and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

const email = mosaic.supportEmail;
const mailto = `mailto:${email}`;

// TODO: Replace with in-app deletion steps once in-app account deletion ships.
function AccountDeletion() {
  return (
    <p>
      In-app account deletion is coming soon. Until then, email <a href={mailto}>{email}</a>{" "}
      from the email address on your Mosaic account and ask us to delete your account.
      Within 30 days, we&rsquo;ll delete your account, boards, media, follows, and visits.
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Mosaic for iPhone"
      title="Privacy Policy"
      effectiveDate={effectiveDate}
      email={email}
    >
      <p>
        This policy explains what information the {mosaic.name} iPhone app collects, how
        we use it, and the choices you have. {mosaic.name} is operated by {mosaic.operator}{" "}
        (&ldquo;we,&rdquo; &ldquo;us&rdquo;), based in {mosaic.location}. If you have a
        question, email <a href={mailto}>{email}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>Your boards are private unless you choose to share them.</li>
        <li>We collect what we need to run your account and show your content the way you choose.</li>
        <li>No ads, no ad tracking, no third-party analytics, and we never sell your data.</li>
        <li>
          We don&rsquo;t track your location or access your contacts. Mosaic only sees the
          photos and videos you pick.
        </li>
      </ul>

      <h2>What Mosaic is</h2>
      <p>
        Mosaic is a personal app for documenting long-running &ldquo;Pursuits&rdquo;: areas
        of life and growth, like golf. You build them as visual boards with text, photos,
        videos, drawings, calendars, tables, and journals. Everything is private by
        default, and sharing is always your choice.
      </p>

      <h2>Information we collect</h2>
      <h3>Your account</h3>
      <ul>
        <li>
          <strong>Email address.</strong> You sign in with a 6-digit code we email you, or
          with your email and a password.
        </li>
        <li>
          <strong>Google or Apple sign-in.</strong> If you choose one, we receive your name
          and email from that provider. We request only your basic profile and email. We
          don&rsquo;t get access to your contacts, Google Drive, or anything else.
        </li>
        <li>
          <strong>Password.</strong> If you set one, our authentication provider stores it
          only as a secure hash, so we never see it. When you sign up, it&rsquo;s checked
          against lists of known breached passwords.
        </li>
        <li>
          <strong>Username, display name, and profile picture.</strong> These are public.
          The profile picture is optional.
        </li>
        <li>
          <strong>Birthday.</strong> We ask for it when you sign up. It&rsquo;s stored
          privately and never shown to other people.
          {/* TODO: Explain why the birthday is collected once its use is decided. */}
        </li>
      </ul>

      <h3>What you create</h3>
      <ul>
        <li>
          Your boards (your Mosaic and your Pursuits), journals, text, drawings, stickers,
          calendars, tables, and the photos and videos you add.
        </li>
        <li>
          Photos and videos are uploaded in a compressed form for viewing. We also keep the
          originals so your content stays intact.
        </li>
      </ul>

      <h3>Social features, only when you use them</h3>
      <ul>
        <li>
          <strong>Follows.</strong> Who you follow and who follows you, plus requests to view
          private boards and the responses to them.
        </li>
        <li>
          <strong>Visits.</strong> When someone opens another person&rsquo;s board, we record
          that visit. Board owners see only a daily count of distinct visitors, never who
          visited. Visit records are deleted after 90 days.
        </li>
        <li>
          <strong>Orbit.</strong> Records of recent changes that power the Orbit update feed
          are deleted after 30 days. Markers showing what you&rsquo;ve already seen are
          deleted after about 2 days.
        </li>
        <li>
          <strong>Explore.</strong> A board appears in the public Explore feed only if you
          turn on sharing for that board. The preview image shown in Explore is created on
          your device.
        </li>
      </ul>

      <h2>What we don&rsquo;t collect</h2>
      <ul>
        <li>No advertising and no ad tracking.</li>
        <li>No third-party analytics or tracking tools.</li>
        <li>No selling of your data.</li>
        <li>No location tracking and no access to your contacts.</li>
        <li>Mosaic accesses your photos only when you pick them.</li>
      </ul>

      <h2>How we use your information</h2>
      <p>
        We use your information only to run Mosaic: to sign you in, store your boards and
        media, show your content to the people you choose, power the social features you
        use, and answer you when you contact us.
      </p>

      <h2>Who can see what</h2>
      <ul>
        <li>
          Boards are private by default. For each board, you choose private or public. For
          Pursuits, you can also choose hidden.
          {/* TODO: Describe what "hidden" means for other people viewing a Pursuit. */}
        </li>
        <li>
          Private pieces inside a board are removed on our servers before anyone else can
          see that board.
        </li>
        <li>Your username, display name, and profile picture are public.</li>
        <li>Your birthday is never shown to anyone else.</li>
      </ul>

      <h2>Service providers</h2>
      <p>We use a small number of companies to run Mosaic:</p>
      <ul>
        <li>
          <strong>Supabase</strong> for our database, sign-in, and file storage, hosted on
          Amazon Web Services in the United States (N. Virginia).
        </li>
        <li>
          <strong>Resend</strong> to send sign-in code emails. It receives only your email
          address and the code.
        </li>
        <li>
          <strong>Google and Apple</strong>, only if you choose to sign in with them.
        </li>
        <li>
          <strong>Netlify</strong>, which hosts this website.
        </li>
      </ul>
      <p>
        Your information is stored in the United States. If you use Mosaic from outside
        the US, your information is transferred to and processed in the US.
        {/* TODO: Add the legal mechanism for EU/UK data transfers after legal review. */}
      </p>

      <h2>Storage, security, and retention</h2>
      <ul>
        <li>Your data is encrypted in transit using HTTPS/TLS.</li>
        <li>Access to each person&rsquo;s data is enforced on our servers.</li>
        <li>
          The app keeps a copy of your own boards on your device so Mosaic works offline.
        </li>
        <li>We keep your content for as long as your account exists.</li>
        <li>
          Photos and videos that are no longer used by any board are deleted automatically
          after 14 days.
        </li>
        <li>
          Our hosting provider keeps daily database backups for a limited period, so
          deleted data may remain in those backups until they expire.
          {/* TODO: State the exact backup retention period. */}
        </li>
      </ul>

      <h2>Deleting your content and account</h2>
      <p>You can delete individual boards and content in the app at any time.</p>
      <AccountDeletion />

      <h2>Your privacy rights</h2>
      <p>
        Depending on where you live, including California (CCPA) and the European Union or
        United Kingdom (GDPR), you may have the right to:
      </p>
      <ul>
        <li>Know what personal information we have about you and get a copy of it.</li>
        <li>Ask us to correct information that&rsquo;s wrong.</li>
        <li>Ask us to delete your information.</li>
        <li>Object to or limit how we use your information, in some cases.</li>
        <li>Not be treated differently for using these rights.</li>
        <li>Complain to your local data protection authority.</li>
      </ul>
      <p>
        We don&rsquo;t sell your personal information or share it for advertising. To make
        a request, email <a href={mailto}>{email}</a> from the address on your account so
        we can confirm the request is yours. We&rsquo;ll handle it as the privacy laws that
        apply to you require.
      </p>

      <h2>Children</h2>
      <p>
        Mosaic isn&rsquo;t intended for children under 13, and we don&rsquo;t knowingly
        collect their information. If we learn we have, we&rsquo;ll delete it. If you
        believe a child under 13 is using Mosaic, email <a href={mailto}>{email}</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        When we update this policy, we&rsquo;ll change the effective date at the top. If we
        make material changes, we&rsquo;ll also let you know in the app.
      </p>

      <h2>Contact us</h2>
      <p>
        {mosaic.operator}, {mosaic.location}
        <br />
        <a href={mailto}>{email}</a>
      </p>
      <p>
        See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
