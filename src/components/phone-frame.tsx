import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[2.1rem] bg-ink p-[5px] shadow-[0_40px_70px_-40px_rgba(20,18,16,0.55)] ring-1 ring-ink/10",
        className,
      )}
    >
      <div className="relative aspect-[471/1024] overflow-hidden rounded-[1.8rem] bg-ink">
        {children}
      </div>
    </div>
  );
}
