import { Monogram } from "@/components/brand";

export function Closing() {
  return (
    <section className="overflow-hidden bg-ink text-paper" aria-labelledby="closing-heading">
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[90rem] flex-col justify-end px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <Monogram
          tone="paper"
          className="pointer-events-none absolute top-16 right-5 w-28 opacity-90 sm:right-8 md:top-1/2 md:right-12 md:w-[min(28vw,24rem)] md:-translate-y-1/2"
        />
        <p className="text-[0.72rem] uppercase tracking-[0.22em] text-sand">Coming soon to iOS</p>
        <h2
          id="closing-heading"
          className="relative mt-8 max-w-[12ch] font-serif text-[2.7rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.25rem]"
        >
          <span className="block">Your passions.</span>
          <span className="block">Your progress.</span>
          <span className="block italic">Your story.</span>
        </h2>
      </div>
    </section>
  );
}
