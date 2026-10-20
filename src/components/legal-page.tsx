import Link from "next/link";
import { Monogram } from "@/components/brand";
import { site } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <article className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 md:py-28">
      <Monogram className="mb-8 w-12" />
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">{title}</h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted [&_a]:text-ink [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 hover:[&_a]:decoration-ink">
        {children}
      </div>
      <p className="mt-12 text-sm text-muted">
        <Link href="/" className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
          Return home
        </Link>
        <span aria-hidden="true" className="px-3">
          /
        </span>
        <a href={`mailto:${site.email}`} className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
          {site.email}
        </a>
      </p>
    </article>
  );
}
