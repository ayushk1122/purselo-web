import Link from "next/link";
import { Monogram } from "@/components/brand";
import { site } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effectiveDate?: string;
  email?: string;
  children: React.ReactNode;
};

const linkClass = "text-ink underline decoration-line underline-offset-4 hover:decoration-ink";

export function LegalPage({ eyebrow, title, effectiveDate, email = site.email, children }: LegalPageProps) {
  return (
    <article className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 md:py-28">
      <Monogram className="mb-8 w-12" />
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">{title}</h1>
      {effectiveDate ? (
        <p className="mt-5 text-sm text-muted">
          Effective date: <span className="text-ink">{effectiveDate}</span>
        </p>
      ) : null}
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted [&_a]:text-ink [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 hover:[&_a]:decoration-ink [&_h2]:pt-8 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:pt-2 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-ink [&_strong]:font-medium [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-muted">
        {children}
      </div>
      <p className="mt-12 text-sm text-muted">
        <Link href="/" className={linkClass}>
          Return home
        </Link>
        <span aria-hidden="true" className="px-3">
          /
        </span>
        <a href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>
      </p>
    </article>
  );
}
