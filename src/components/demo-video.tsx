"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/phone-frame";

type DemoVideoProps = {
  src: string;
  poster: string;
  label: string;
  autoPlay?: boolean;
  children: React.ReactNode;
};

export function DemoVideo({ src, poster, label, autoPlay = true, children }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(!autoPlay);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByUser.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  }

  return (
    <div>
      <PhoneFrame>
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </PhoneFrame>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0">{children}</div>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause demo video" : "Play demo video"}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-ink/15 px-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink"
        >
          <span aria-hidden="true" className="flex h-2.5 w-2.5 items-center justify-center">
            {playing ? (
              <span className="flex h-2.5 gap-[3px]">
                <span className="w-[3px] bg-ink" />
                <span className="w-[3px] bg-ink" />
              </span>
            ) : (
              <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-ink" />
            )}
          </span>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
