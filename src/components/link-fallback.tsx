import Link from "next/link";
import { Monogram } from "@/components/brand";

type LinkFallbackProps = {
  username: string;
  pursuitId?: string;
};

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-medium tracking-[0.02em] transition-colors duration-300";

export function LinkFallback({ username, pursuitId }: LinkFallbackProps) {
  const handle = `@${username}`;
  const appUrl = pursuitId ? `purselo://${handle}/p/${pursuitId}` : `purselo://${handle}`;

  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center sm:px-8 md:py-32">
        <Monogram className="mx-auto w-14" />
        <h1 className="mt-10 font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
          {pursuitId ? "A Pursuit by " : null}
          <em className="italic [overflow-wrap:anywhere]">{handle}</em> on Purselo
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
          Purselo is where people share their Selo: one board for everything they&rsquo;re
          into.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={appUrl} className={`${buttonClass} bg-ink text-paper hover:bg-ink/85`}>
            Open in Purselo
          </a>
          <Link
            href="/#waitlist"
            className={`${buttonClass} border border-ink/20 text-ink hover:border-ink`}
          >
            Get Purselo
          </Link>
        </div>
      </div>
    </section>
  );
}
