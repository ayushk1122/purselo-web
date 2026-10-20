import Image from "next/image";
import { cn } from "@/lib/cn";

type Tone = "ink" | "paper";

type BrandMarkProps = {
  tone?: Tone;
  className?: string;
  priority?: boolean;
};

type LabelledBrandMarkProps = BrandMarkProps & {
  alt?: string;
};

const wordmark = { width: 1002, height: 395 };
const monogram = { width: 600, height: 474 };

export function Wordmark({ tone = "ink", className, priority, alt = "Purselo" }: LabelledBrandMarkProps) {
  return (
    <Image
      src={`/brand/purselo-wordmark-${tone}.png`}
      alt={alt}
      width={wordmark.width}
      height={wordmark.height}
      priority={priority}
      unoptimized
      className={cn("h-auto select-none", className)}
    />
  );
}

export function Monogram({ tone = "ink", className, priority }: BrandMarkProps) {
  return (
    <Image
      src={`/brand/purselo-monogram-${tone}.png`}
      alt=""
      aria-hidden="true"
      width={monogram.width}
      height={monogram.height}
      priority={priority}
      unoptimized
      className={cn("h-auto select-none", className)}
    />
  );
}
