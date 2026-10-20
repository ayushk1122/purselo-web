"use client";

import { useEffect, useRef, useState } from "react";

type DemoVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export function DemoVideo({ src, poster, label }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
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
    <>
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
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause demo video" : "Play demo video"}
        className="absolute bottom-4 left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 rounded-full bg-ink/70 px-4 text-[0.7rem] uppercase tracking-[0.2em] text-paper backdrop-blur-sm transition-colors duration-300 hover:bg-ink"
      >
        <span aria-hidden="true" className="flex h-2.5 w-2.5 items-center justify-center">
          {playing ? (
            <span className="flex h-2.5 gap-[3px]">
              <span className="w-[3px] bg-paper" />
              <span className="w-[3px] bg-paper" />
            </span>
          ) : (
            <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-paper" />
          )}
        </span>
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}
