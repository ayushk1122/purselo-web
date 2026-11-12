import { AppStoreBadge } from "@/components/app-store-badge";
import { Monogram } from "@/components/brand";
import type { LinkPreview } from "@/lib/link-preview";

type LinkFallbackProps = {
  username: string;
  pursuitId?: string;
  preview: LinkPreview | null;
};

const eyebrowClass =
  "flex items-center justify-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-muted";
const titleClass =
  "mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink [overflow-wrap:anywhere] sm:text-6xl";

function LockIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function Heading({ username, pursuitId, preview }: LinkFallbackProps) {
  const handle = `@${username}`;

  if (!preview) {
    return (
      <>
        <p className={eyebrowClass}>{pursuitId ? "Pursuit" : "Selo"}</p>
        <h1 className={titleClass}>
          {pursuitId ? "A Pursuit by " : null}
          <em className="italic">{handle}</em> on Purselo
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
          This link can&rsquo;t be previewed here. It may be private or no longer available.
        </p>
      </>
    );
  }

  if (preview.kind === "private_selo") {
    return (
      <>
        <p className={eyebrowClass}>
          <LockIcon />
          Private Selo
        </p>
        <h1 className={titleClass}>{preview.title}</h1>
        <p className="mt-4 text-base text-muted md:text-lg">{handle}</p>
      </>
    );
  }

  return (
    <>
      <p className={eyebrowClass}>{preview.kind === "pursuit" ? `A Pursuit by ${handle}` : "Selo"}</p>
      <h1 className={titleClass}>{preview.title}</h1>
      {preview.kind === "selo" ? <p className="mt-4 text-base text-muted md:text-lg">{handle}</p> : null}
    </>
  );
}

function getPurseloCopy({ username, preview }: LinkFallbackProps) {
  const handle = `@${username}`;
  switch (preview?.kind) {
    case "selo":
      return `Download Purselo to see ${handle}\u2019s Selo and every Pursuit on it.`;
    case "private_selo":
      return `This Selo is private. Download Purselo to ask ${handle} for access.`;
    case "pursuit":
      return "Download Purselo to see this Pursuit and the rest of the Selo it belongs to.";
    default:
      return "Download Purselo to open this link in the app.";
  }
}

export function LinkFallback(props: LinkFallbackProps) {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 md:py-28">
        <Monogram className="mx-auto mb-10 w-14" />
        <Heading {...props} />

        <section className="mx-auto mt-14 max-w-md border-t border-line pt-12" aria-labelledby="get-purselo">
          <h2 id="get-purselo" className="font-serif text-3xl tracking-[-0.02em] text-ink">
            Get Purselo
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{getPurseloCopy(props)}</p>
          <AppStoreBadge height={48} className="mt-4" />
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Already have Purselo? Open this link on your iPhone to go straight to it.
          </p>
        </section>
      </div>
    </section>
  );
}
