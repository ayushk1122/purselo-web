import Link from "next/link";
import { Monogram } from "@/components/brand";

type LinkFallbackProps = {
  username: string;
  pursuitId?: string;
};

export function LinkFallback({ username, pursuitId }: LinkFallbackProps) {
  const handle = `@${username}`;

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
          into. It&rsquo;s in beta on iPhone right now.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/beta"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-medium tracking-[0.02em] text-paper transition-colors duration-300 hover:bg-ink/85"
          >
            Apply for the beta
          </Link>
        </div>
      </div>
    </section>
  );
}
