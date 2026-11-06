import type { Metadata } from "next";
import Image from "next/image";
import { BetaForm } from "@/components/beta-form";
import { PhoneFrame } from "@/components/phone-frame";

export const metadata: Metadata = {
  title: "Apply for the Beta",
  description:
    "Apply to try Purselo on iPhone through TestFlight before it launches. Open to people 13 and older in the United States.",
  alternates: {
    canonical: "/beta",
  },
};

export default function BetaPage() {
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
          Purselo Beta
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
          Try Purselo <em className="italic">early.</em>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          We&rsquo;re inviting a small group to test Purselo on iPhone through TestFlight
          before it launches. Tell us a little about yourself, and if there&rsquo;s a spot,
          we&rsquo;ll send you an invitation.
        </p>
        <div className="mt-12">
          <BetaForm />
        </div>
      </div>
    </section>
  );
}
