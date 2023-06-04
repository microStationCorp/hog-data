import { cn } from "@/lib/utils";

function Skeleton({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted flex items-center justify-center", className)}
      {...props}
    >
      <div className="text-xl text-slate-500">{children}</div>
    </div>
  );
}

export { Skeleton };
