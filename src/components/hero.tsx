import { Monogram } from "@/components/brand";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="md:flex md:min-h-[calc(100svh-5rem)] md:flex-col">
      <div className="relative mx-auto flex w-full max-w-[90rem] flex-1 flex-col px-5 pt-12 pb-16 sm:px-8 md:pt-20 md:pb-0 lg:px-12 lg:pt-24">
        <Monogram
          priority
          className="rise rise-3 pointer-events-none absolute top-[16%] right-8 hidden w-[min(26vw,22rem)] md:block lg:right-12"
        />
        <p className="rise flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-ink">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
          Coming soon to iOS
        </p>
        <p className="rise rise-2 mt-8 text-sm tracking-[0.02em] whitespace-nowrap text-muted md:mt-14 md:text-base">
          {site.tagline}
        </p>
        <h1 className="rise rise-2 relative mt-3 font-serif text-[2.75rem] leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl md:mt-4 md:max-w-[16ch] md:text-7xl lg:text-[6.5rem]">
          <span className="block md:inline">Everything you </span>
          <em className="block italic md:inline">pursue, </em>
          <span className="block md:inline">in one place.</span>
        </h1>
        <p className="rise rise-3 mt-12 max-w-md text-base leading-relaxed text-muted md:mt-auto md:pt-24 md:pb-16 md:text-lg md:leading-relaxed">
          Every hobby and passion you share, brought together in one customizable place.
        </p>
      </div>
    </section>
  );
}
