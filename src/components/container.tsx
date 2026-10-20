import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "header" | "footer" | "section" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
