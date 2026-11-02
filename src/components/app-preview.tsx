import Image from "next/image";
import { DemoVideo } from "@/components/demo-video";
import { PhoneFrame } from "@/components/phone-frame";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

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

const recordings = [
  {
    slug: "demo",
    title: "Selo",
    copy: "Step from your Selo into each Pursuit.",
    label:
      "Screen recording of the Purselo app, moving from a profile into baseball, pet photo, golf, and music pursuits",
  },
  {
    slug: "orbit",
    title: "Orbit",
    copy: "Catch up on what\u2019s new from boards you follow.",
    label:
      "Screen recording of Orbit in the Purselo app, stepping through recent updates from boards the user follows",
  },
  {
    slug: "circle",
    title: "Circle",
    copy: "Followers, daily visits, and who you follow.",
    label:
      "Screen recording of Circle in the Purselo app, showing followers, daily visits, and the people and Pursuits you follow",
  },
  {
    slug: "explore",
    title: "Explore",
    copy: "Boards people choose to share, sorted your way.",
    label: "Screen recording of Explore in the Purselo app, browsing and sorting shared boards",
  },
] as const;

const labelClass = "text-[0.72rem] uppercase tracking-[0.22em]";

export function AppPreview() {
  return (
    <section id="preview" className="border-t border-line" aria-labelledby="preview-heading">
      <div className="mx-auto w-full max-w-[90rem] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <div>
          <p className={cn(labelClass, "text-muted")}>Preview</p>
          <h2
            id="preview-heading"
            className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
          >
            A first <em className="italic">look.</em>
          </h2>
        </div>

        <div className="mt-14 bg-cream px-6 py-14 sm:px-10 md:mt-20 md:py-20 lg:px-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className={cn(labelClass, "text-muted")}>In motion</p>
              <h3 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl">
                {site.tagline}
              </h3>
            </div>
            <p className={cn(labelClass, "pb-2 text-muted md:hidden")} aria-hidden="true">
              Swipe
            </p>
          </div>
          <ul
            aria-label="App recordings"
            tabIndex={0}
            className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:-mx-10 sm:scroll-px-10 sm:px-10 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4 xl:gap-x-10 [&::-webkit-scrollbar]:hidden"
          >
            {recordings.map((recording) => (
              <li
                key={recording.slug}
                className="w-[62vw] max-w-[15rem] shrink-0 snap-start md:mx-auto md:w-full md:max-w-[17.5rem]"
              >
                <DemoVideo
                  src={`/preview/purselo-${recording.slug}.mp4`}
                  poster={`/preview/purselo-${recording.slug}-poster.webp`}
                  label={recording.label}
                >
                  <h4 className="font-serif text-2xl tracking-[-0.02em] text-ink">{recording.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{recording.copy}</p>
                </DemoVideo>
              </li>
            ))}
          </ul>
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
