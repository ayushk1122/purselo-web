import { Monogram } from "@/components/brand";

const seloTraits = [
  "Customizable down to the details, so it looks like your life, not a template.",
  "Made to share with friends, family, and the people you choose.",
] as const;

export function WhyPurselo() {
  return (
    <section id="about" className="border-t border-line" aria-labelledby="why-heading">
      <div className="mx-auto w-full max-w-[90rem] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="flex items-center gap-4 md:col-span-3 md:flex-col md:items-start md:gap-6">
            <Monogram className="w-10 md:w-14" />
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">Why Purselo</p>
          </div>
          <div className="md:col-span-9 lg:col-span-8">
            <h2
              id="why-heading"
              className="max-w-[16ch] font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
            >
              Your life doesn&rsquo;t fit in a <em className="italic">single feed.</em>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Social apps are built around one stream of posts. There is no real way to
              organize every hobby you care about, or to display them creatively in one
              place. Purselo will change that.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-line pt-14 md:mt-28 md:grid-cols-12 md:gap-8 md:pt-20">
          <div className="md:col-span-5 md:self-center lg:col-span-6">
            <p className="font-serif text-[4.5rem] leading-[0.9] tracking-[-0.04em] text-ink sm:text-[6rem] md:text-right lg:text-[8.5rem]">
              Your <em className="italic">Selo</em>
            </p>
          </div>
          <div className="md:col-span-7 md:self-center lg:col-span-5 lg:col-start-8">
            <p className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-balance text-ink md:text-4xl">
              The culmination of all of your pursuits, in one place.
            </p>
            <ul className="mt-10 border-t border-line">
              {seloTraits.map((trait) => (
                <li key={trait} className="border-b border-line py-5 text-base leading-relaxed text-muted">
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
