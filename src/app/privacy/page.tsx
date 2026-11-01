import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { app } from "@/lib/site";

const lastUpdated = "November 1, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Purselo iPhone app, operated by Purselo LLC, collects, uses, and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

const email = app.supportEmail;
const mailto = `mailto:${email}`;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={`${app.name} for iPhone`}
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      email={email}
    >
      <p>
        This policy explains what information the {app.name} iPhone app collects, how we
        use it, and the choices you have. {app.name} is operated by {app.operator}{" "}
        (&ldquo;we,&rdquo; &ldquo;us&rdquo;), based in {app.location}. If you have a
        question, email <a href={mailto}>{email}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>Your boards are private unless you choose to share them.</li>
        <li>We collect what we need to run your account and show your content the way you choose.</li>
        <li>No ads, no ad tracking, no third-party analytics, and we never sell your data.</li>
        <li>
          We don&rsquo;t track your location or access your contacts. Purselo only sees the
          photos and videos you pick.
        </li>
      </ul>

      <h2>What Purselo is</h2>
      <p>
        Purselo is a personal app for documenting long-running &ldquo;Pursuits&rdquo;: areas
        of life and growth, like golf. Your Pursuits live on your Selo, your main board.
        You build them as visual boards with text, photos, videos, drawings, calendars,
        tables, and journals. Everything is private by default, and sharing is always your
        choice.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect information only to run the app. Nothing is used for advertising or
        tracking, and there are no analytics or third-party advertising SDKs.
      </p>
      <h3>Your account</h3>
      <ul>
        <li>
          <strong>Email address.</strong> We use it to sign you in and send account emails.
          You sign in with a 6-digit code we email you, or with your email or username and a
          password. If you forget your password, we email you a code to reset it. If you use
          Sign in with Apple and hide your email, we only get Apple&rsquo;s private relay
          address.
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
          <strong>Name, username, account ID, and profile picture.</strong> Your name is
          your display name, which Apple or Google may suggest at sign-up. Your username,
          display name, and profile picture are public, and people can find you by username
          or display name in search. The profile picture is optional.
        </li>
        <li>
          <strong>Birthday.</strong> We ask for it when you sign up to check that you meet
          the 13+ minimum age. It&rsquo;s private to you and never shown to others. It
          can&rsquo;t be changed in the app after sign-up; if it&rsquo;s wrong, email{" "}
          <a href={mailto}>{email}</a>.
        </li>
      </ul>

      <h3>What you create</h3>
      <ul>
        <li>
          Your boards (your Selo and your Pursuits), journals, text, drawings, stickers,
          calendars, tables, and the photos and videos you add.
        </li>
        <li>
          Photos are uploaded along with smaller copies for viewing, and we keep the
          original so your content stays intact. Videos are converted on your phone to a
          smaller format (up to 1080p) before they&rsquo;re uploaded. Uploads don&rsquo;t
          carry the location where a photo or video was taken; the app removes it before
          uploading.
        </li>
        <li>
          Content cards: links you add to posts or profiles on YouTube, Instagram, TikTok,
          Twitch, X, Spotify, Apple Music, or SoundCloud. When you add a Content card, your
          phone fetches the preview from that service, and the preview is saved with your
          board. People viewing your boards see the saved preview and only contact the
          service if they open the link, which takes them to that service under its own
          privacy policy.
        </li>
        <li>Details you write when you report something.</li>
      </ul>

      <h3>Social features, only when you use them</h3>
      <ul>
        <li>
          <strong>Follows.</strong> Who you follow and who follows you, plus requests to view
          private boards and the responses to them.
        </li>
        <li>
          <strong>Visits.</strong> When someone opens another person&rsquo;s board, we record
          that visit. Board owners see visits in Circle, as a daily count of distinct
          visitors, never who visited. Visit records are deleted after 90 days.
        </li>
        <li>
          <strong>Orbit and Circle.</strong> We keep track of what you&rsquo;ve last seen in
          Orbit and Circle. What you&rsquo;ve last seen in Orbit is deleted after 2 days.
          Records of new pieces, used for Orbit and &ldquo;Recently updated,&rdquo; are
          deleted after 30 days. What you&rsquo;ve last seen in Circle is kept until you
          delete your account.
        </li>
        <li>
          <strong>Blocks.</strong> We keep the list of people you&rsquo;ve blocked so the
          block works. Only you can see it, and it&rsquo;s kept until you unblock them or
          delete your account.
        </li>
        <li>
          <strong>Explore.</strong> Your Selo or a Pursuit appears in Explore only if you
          choose to share it. The preview image shown in Explore is created on your device.
        </li>
      </ul>

      <h2>What we don&rsquo;t collect</h2>
      <ul>
        <li>No advertising and no ad tracking.</li>
        <li>No analytics, and no third-party advertising SDKs or tracking tools.</li>
        <li>No selling of your data.</li>
        <li>
          We don&rsquo;t collect your location, contacts, phone number, browsing or search
          history, or diagnostics.
        </li>
        <li>Purselo accesses your photos only when you pick them.</li>
      </ul>

      <h2>How we use your information</h2>
      <p>
        We use your information only to run Purselo: to sign you in, send account emails,
        store your boards and media, show your content to the people you choose, power the
        social features you use, review reports, and answer you when you contact us.
        Nothing is used for advertising or tracking.
      </p>

      <h2>Who can see what</h2>
      <ul>
        <li>
          Boards are private by default. You choose who sees what: people you approve, your
          followers, or everyone if you share a board to Explore.
        </li>
        <li>
          Each Pursuit can be Public (anyone with the link), Private (people you approve),
          or Hidden (only you). Moderators can also make a Pursuit Hidden.
        </li>
        <li>
          Private pieces inside a board are removed on our servers before anyone else can
          see that board.
        </li>
        <li>Your username, display name, and profile picture are public.</li>
        <li>Your birthday is never shown to anyone else.</li>
        <li>Blocking someone hides you from them entirely.</li>
      </ul>

      <h2>Service providers</h2>
      <p>We use a small number of companies to run Purselo:</p>
      <ul>
        <li>
          <strong>Supabase</strong> for our database, sign-in, and file storage, hosted on
          Amazon Web Services in the United States (N. Virginia).
        </li>
        <li>
          <strong>Resend</strong> to send our emails, including sign-in and password reset
          codes and report notices to our team.
        </li>
        <li>
          <strong>Google and Apple</strong>, only if you choose to sign in with them.
        </li>
        <li>
          <strong>The services behind Content cards</strong> (listed above, for example
          YouTube or X), only when your phone fetches a preview as you add a card and, for X
          posts, when your phone checks them with X once a day.
        </li>
        <li>
          <strong>Netlify</strong>, which hosts this website.
        </li>
      </ul>

      <h2>Where Purselo is available</h2>
      <p>
        Purselo is currently offered only in the United States, and your information is
        stored there (Amazon Web Services in N. Virginia, through Supabase).
      </p>

      <h2>Storage, security, and retention</h2>
      <ul>
        <li>Your data is encrypted in transit using HTTPS/TLS.</li>
        <li>Access to each person&rsquo;s data is enforced on our servers.</li>
        <li>
          The app keeps a copy of your own boards on your device so Purselo works offline.
        </li>
        <li>
          The app also keeps temporary copies of pictures from boards you view, such as
          profile pictures and previews, so they load faster. Copies you haven&rsquo;t used
          in about 30 days are removed.
        </li>
        <li>We keep your content for as long as your account exists.</li>
        <li>
          Photos and videos that are no longer used by any board are deleted automatically
          after 14 days.
        </li>
        <li>
          Reports are kept as long as they&rsquo;re needed for safety records. Once the
          account of a person involved is deleted, the report is no longer linked to them.
        </li>
        <li>
          Our hosting provider keeps daily database backups for a limited period, so
          deleted data may remain in those backups until they expire.
          {/* TODO: State the exact backup retention period. */}
        </li>
      </ul>

      <h2>Deleting your content and account</h2>
      <p>You can delete individual boards and content in the app at any time.</p>
      <p>
        In the app, Settings &rarr; Delete account removes your account and everything
        listed under &ldquo;Information we collect,&rdquo; except reports, which are kept for
        safety records without a link to your account. Deleting your account also removes
        the copy of your boards stored on that phone. Data in our hosting provider&rsquo;s
        backups is removed when those backups expire.
      </p>
      <p>
        Questions about deleting your data? Email <a href={mailto}>{email}</a>.
      </p>

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
        We don&rsquo;t sell your personal information or share it for advertising. You can
        delete your account yourself in the app, as described above. For other requests,
        email <a href={mailto}>{email}</a> from the address on your account so we can
        confirm the request is yours. We&rsquo;ll handle it as the privacy laws that apply
        to you require.
      </p>

      <h2>Children</h2>
      <p>
        Purselo is for people 13 and older. We ask for your birthday at sign-up and
        don&rsquo;t create accounts for anyone younger. We don&rsquo;t knowingly collect
        information from children under 13; if we learn we have, we&rsquo;ll delete it. If
        you believe a child under 13 is using Purselo, email <a href={mailto}>{email}</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        When we update this policy, we&rsquo;ll change the &ldquo;Last updated&rdquo; date at
        the top. If we make material changes, we&rsquo;ll also let you know in the app.
      </p>

      <h2>Contact us</h2>
      <p>
        {app.operator}, {app.location}
        <br />
        <a href={mailto}>{email}</a>
      </p>
      <p>
        See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
