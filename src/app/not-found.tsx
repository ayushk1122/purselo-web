import Link from "next/link";
import { Monogram } from "@/components/brand";

export default function NotFound() {
  return (
    <article className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-24 sm:px-8 md:py-32">
      <Monogram className="mb-8 w-12" />
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-5 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">
        This page is not here.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        The link may be out of date, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-11 items-center self-start text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
      >
        Return home
      </Link>
    </article>
  );
}
