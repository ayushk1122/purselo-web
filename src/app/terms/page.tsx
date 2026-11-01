import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { app } from "@/lib/site";

const lastUpdated = "November 1, 2026";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the Purselo iPhone app, operated by Purselo LLC.",
  alternates: {
    canonical: "/terms",
  },
};

const email = app.supportEmail;
const mailto = `mailto:${email}`;

export default function TermsPage() {
  return (
    <LegalPage eyebrow={`${app.name} for iPhone`} title="Terms of Use" lastUpdated={lastUpdated} email={email}>
      <p>
        These terms apply when you use the {app.name} iPhone app. {app.name} is operated by{" "}
        {app.operator}, based in {app.location}. By using {app.name}, you agree to these
        terms.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>
          You must be at least 13 to use Purselo. The app asks for your birthday at sign-up
          and doesn&rsquo;t create accounts for anyone younger.
        </li>
        <li>
          Keep your sign-in details secure. You&rsquo;re responsible for what happens on
          your account.
        </li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of what you add to Purselo: boards, Pursuits, photos, videos,
        text, drawings, and links. You give us the permission we need to store it, show it
        to the people you choose to share it with (your followers, people you approve, or
        everyone on Explore if you share it there), and make the previews and copies the
        app needs to work.
      </p>
      <p>
        Only add content you own or have the rights to share. Don&rsquo;t add anything that
        infringes someone else&rsquo;s copyright, trademark, or privacy.
      </p>

      <h2>Content from other services</h2>
      <p>
        Content cards link to posts, videos, and music on YouTube, Instagram, TikTok,
        Twitch, X, Spotify, Apple Music, and SoundCloud. A card shows a preview and opens the
        original on that service. Purselo doesn&rsquo;t host or play that content, and those
        services&rsquo; own terms apply to it.
      </p>
      <p>
        For an X post, the card shows a saved copy of the post: its text, photo, and the
        author&rsquo;s picture. People viewing your board never contact X. Once a day, your
        own phone checks each X post with X. If X no longer shows a post (because it was
        deleted, made private, or suspended), its card stops showing it. If a post was
        edited, its card gets the new text.
      </p>

      <h2>Using Purselo responsibly</h2>
      <p>
        Purselo has zero tolerance for objectionable content and abusive users. These
        aren&rsquo;t allowed on Purselo:
      </p>
      <ul>
        <li>Nudity or sexual content.</li>
        <li>Harassment or bullying.</li>
        <li>Hate speech.</li>
        <li>Violence or threats.</li>
        <li>Content encouraging self-harm.</li>
        <li>Spam or scams.</li>
        <li>Pretending to be someone else.</li>
        <li>Using someone&rsquo;s work without permission.</li>
        <li>Anything illegal.</li>
      </ul>
      <p>Content involving the sexual exploitation of children is reported to the authorities.</p>

      <h2>Reporting and blocking</h2>
      <ul>
        <li>
          Anyone can report a Selo or a Pursuit in the app: tap &#8943; on its card, or touch
          and hold it on Explore. Choose a reason and, if you like, add details. Reports are
          private, so the person reported isn&rsquo;t told who reported them.
        </li>
        <li>
          We review reports within 24 hours. We may dismiss a report, remove content from
          Explore, hide a Pursuit, or suspend the account.
        </li>
        <li>
          Anyone can block another person. Blocking works both ways: neither of you can see
          the other&rsquo;s profile or boards, follow each other, or find each other in
          search, and existing follows and requests between you end. The blocked person
          isn&rsquo;t told. You can unblock someone in Settings &rarr; Blocked people.
        </li>
        <li>Don&rsquo;t misuse reporting. Repeated false reports can lead to suspension.</li>
      </ul>

      <h2>Suspension and appeals</h2>
      <ul>
        <li>
          A suspended account is hidden from everyone, and its owner can&rsquo;t use Purselo.
          Signing in shows a notice with the reason, where to appeal, and the options to
          delete the account or sign out.
        </li>
        <li>
          For content that&rsquo;s illegal or puts someone in danger, we may lock the account
          instead, which also stops sign-in, and keep what&rsquo;s needed for the
          authorities.
        </li>
        <li>
          To appeal, email <a href={mailto}>{email}</a>. We review appeals and may restore the
          account.
        </li>
      </ul>

      <h2>Deleting your account</h2>
      <p>
        You can delete your account anytime in Settings &rarr; Delete account. This
        permanently removes your profile, boards, Pursuits, photos, videos, follows, and
        followers. If you signed in with Apple, Apple&rsquo;s sign-in for Purselo is revoked
        too. Reports you sent, or that were made about you, are kept for safety records,
        without a link to your account once it&rsquo;s deleted.
      </p>

      <h2>Copyright notices</h2>
      <p>
        If you believe content on Purselo infringes your copyright, send a notice to our
        designated agent:
      </p>
      <address className="not-italic">
        Copyright Agent, {app.operator}
        <br />
        915 Middle River Drive, Suite 517, Fort Lauderdale, FL 33304
        <br />
        Phone: <a href="tel:+12063798919">206-379-8919</a>
        <br />
        Email: <a href={mailto}>{email}</a>
      </address>
      <p>Include:</p>
      <ul>
        <li>What&rsquo;s being infringed.</li>
        <li>Where it is on Purselo (a purselo.app link if you have one).</li>
        <li>Your contact details.</li>
        <li>
          A statement that you have a good-faith belief the use isn&rsquo;t authorized, and
          that your notice is accurate.
        </li>
      </ul>
      <p>
        In the app, the &ldquo;Uses my work without permission&rdquo; report reason reaches us
        the same way.
      </p>
      <p>
        We review each notice. If the content is infringing, we remove or disable it, and we
        may suspend repeat infringers. Sending a notice in bad faith can be a legal issue for
        you.
      </p>

      <h2>No warranties</h2>
      <p>
        Purselo is provided &ldquo;as is,&rdquo; without warranties of any kind.
      </p>

      {/* draft: legal review before a wider launch */}
      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, {app.operator} isn&rsquo;t liable for indirect or
        consequential losses, or for content people add or link to.
      </p>

      {/* draft: legal review before a wider launch */}
      <h2>Indemnification</h2>
      <p>
        You&rsquo;re responsible for the content you add. You agree to cover {app.operator}{" "}
        for claims that arise from that content or from your breaking these terms.
      </p>

      {/* draft: legal review before a wider launch */}
      <h2>Ending the agreement</h2>
      <p>
        We may suspend or end your access if you break these terms. You can stop anytime by
        deleting your account in Settings &rarr; Delete account.
      </p>

      {/* draft: legal review before a wider launch */}
      <h2>Changes to these terms</h2>
      <p>
        When we change these terms, we&rsquo;ll update the &ldquo;Last updated&rdquo; date at
        the top. For significant changes, we&rsquo;ll also tell you in the app. Using Purselo
        after a change means you accept it.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, United States.
      </p>

      {/* draft: legal review before a wider launch */}
      <h2>Disputes</h2>
      <p>
        If you have a dispute with us, please contact <a href={mailto}>{email}</a> first so we
        can try to resolve it. Disputes are handled under the Governing law section above.
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
