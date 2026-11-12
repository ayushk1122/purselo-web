import type { Metadata } from "next";
import Image from "next/image";
import { AppStoreBadge } from "@/components/app-store-badge";
import { PhoneFrame } from "@/components/phone-frame";

export const metadata: Metadata = {
  title: "Get Purselo",
  description: "Download Purselo for iPhone on the App Store.",
  alternates: {
    canonical: "/beta",
  },
};

export default function GetPurseloPage() {
  return (
    <section className="mx-auto grid w-full max-w-[90rem] flex-1 gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
      <div className="order-2 bg-cream px-6 py-14 sm:px-10 lg:order-1 lg:py-20">
        <PhoneFrame className="mx-auto w-full max-w-[17rem]">
          <Image
            src="/preview/purselo-profile.webp"
            alt="A Selo in Purselo, with a tile for each Pursuit"
            fill
            unoptimized
            priority
            sizes="17rem"
            className="object-cover"
          />
        </PhoneFrame>
      </div>

      <div className="order-1 max-w-2xl lg:order-2">
        <p className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-ink">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
          Now on iPhone
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
          Purselo is <em className="italic">here.</em>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          Bring every hobby and passion you share into one place, your Selo. Download
          Purselo on your iPhone to start yours.
        </p>
        <AppStoreBadge height={48} className="-ml-3 mt-7" />
      </div>
    </section>
  );
}
