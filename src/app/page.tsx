import type { Metadata } from "next";
import { AppPreview } from "@/components/app-preview";
import { Closing } from "@/components/closing";
import { Hero } from "@/components/hero";
import { WhyPurselo } from "@/components/why-purselo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPurselo />
      <AppPreview />
      <Closing />
    </>
  );
}
