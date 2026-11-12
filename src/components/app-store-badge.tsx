"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { app } from "@/lib/site";

// Apple's artwork, unmodified: public/brand/app-store/download-on-the-app-store-black.svg (119.66407 × 40).
const BADGE_SRC = "/brand/app-store/download-on-the-app-store-black.svg";
const BADGE_RATIO = 119.66407 / 40;
// Apple: at least 40px tall onscreen, with clear space of one-quarter the badge height on every side.
const MIN_HEIGHT = 40;

function isAppleMobile() {
  return (
    /iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

const noSubscription = () => () => {};

/** On iPhone and iPad the App Store app takes over the current tab; elsewhere open a new tab. */
function useOpensNewTab() {
  return useSyncExternalStore(
    noSubscription,
    () => !isAppleMobile(),
    () => false,
  );
}

function linkProps(newTab: boolean) {
  return newTab ? { target: "_blank", rel: "noopener" } : {};
}

type AppStoreBadgeProps = {
  /** Badge height in pixels; never below Apple's 40px minimum. */
  height?: number;
  /** The link pads the badge with its clear space; use negative margins to align the artwork's edge. */
  className?: string;
};

export function AppStoreBadge({ height = MIN_HEIGHT, className }: AppStoreBadgeProps) {
  const newTab = useOpensNewTab();
  const badgeHeight = Math.max(height, MIN_HEIGHT);

  return (
    <a
      href={app.appStoreUrl}
      {...linkProps(newTab)}
      className={cn("inline-block shrink-0 transition-opacity duration-300 hover:opacity-80", className)}
      style={{ padding: badgeHeight / 4 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BADGE_SRC}
        alt="Download on the App Store"
        width={Math.round(badgeHeight * BADGE_RATIO)}
        height={badgeHeight}
        className="block"
      />
    </a>
  );
}

export function AppStoreTextLink({ className }: { className?: string }) {
  const newTab = useOpensNewTab();

  return (
    <a href={app.appStoreUrl} {...linkProps(newTab)} className={className}>
      Download {app.name} on the App Store
    </a>
  );
}
