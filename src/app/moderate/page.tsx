import type { Metadata } from "next";
import { ModerateReport } from "@/components/moderate-report";

export const metadata: Metadata = {
  title: "Moderate report",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function ModeratePage() {
  return <ModerateReport />;
}
