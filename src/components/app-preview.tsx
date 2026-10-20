import Image from "next/image";
import { DemoVideo } from "@/components/demo-video";
import { PhoneFrame } from "@/components/phone-frame";
import { cn } from "@/lib/cn";

const screens = [
  {
    slug: "profile",
    title: "Selo",
    copy: "Every pursuit, one tile each.",
  },
  {
    slug: "golf",
    title: "Golf",
    copy: "Sessions, goals, and scores.",
  },
  {
    slug: "music",
    title: "Music",
    copy: "Playlists, artists, and albums.",
  },
  {
    slug: "creator",
    title: "Creator",
    copy: "Videos, socials, and private tiles.",
  },
  {
    slug: "gallery",
    title: "Gallery",
    copy: "A photo portfolio, edge to edge.",
  },
] as const;

const labelClass = "text-[0.72rem] uppercase tracking-[0.22em]";

export function AppPreview() {
  return (
    <section id="preview" className="border-t border-line" aria-labelledby="preview-heading">
      <div className="mx-auto w-full max-w-[90rem] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className={cn(labelClass, "text-muted")}>Preview</p>
            <h2
              id="preview-heading"
              className="mt-5 max-w-[14ch] font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
            >
              A first <em className="italic">look.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted md:col-span-4 md:col-start-9">
            Early screens from the iOS app in development.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 bg-cream px-6 py-14 sm:px-10 md:mt-20 md:grid-cols-12 md:gap-8 md:py-20 lg:px-16">
          <div className="mx-auto w-full max-w-[17.5rem] md:col-span-5 md:max-w-[19rem] lg:col-span-4 lg:col-start-2">
            <PhoneFrame>
              <DemoVideo
                src="/preview/purselo-demo.mp4"
                poster="/preview/purselo-demo-poster.webp"
                label="Screen recording of the Purselo app, moving from a profile into baseball, pet photo, golf, and music pursuits"
              />
            </PhoneFrame>
          </div>
          <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-7">
            <p className={cn(labelClass, "text-muted")}>In motion</p>
            <h3 className="mt-5 max-w-[12ch] font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl">
              One Selo, every pursuit.
            </h3>
            <p className="mt-6 text-sm text-muted">Screen recording from a development build.</p>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              Inside the app
            </h3>
            <p className={cn(labelClass, "text-muted lg:hidden")} aria-hidden="true">
              Swipe
            </p>
          </div>
          <ul
            aria-label="App screens"
            tabIndex={0}
            className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {screens.map((screen, index) => (
              <li
                key={screen.slug}
                className={cn(
                  "group w-[64vw] max-w-[16rem] shrink-0 snap-start sm:w-[42vw] lg:w-auto lg:max-w-none",
                  index % 2 === 1 && "lg:mt-16",
                )}
              >
                <PhoneFrame className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none">
                  <Image
                    src={`/preview/purselo-${screen.slug}.webp`}
                    alt={`Purselo ${screen.title.toLowerCase()} screen`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 18vw, 64vw"
                    className="object-cover"
                  />
                </PhoneFrame>
                <p className="mt-6 font-serif text-lg italic text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-1 font-serif text-2xl tracking-[-0.02em] text-ink">{screen.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{screen.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
