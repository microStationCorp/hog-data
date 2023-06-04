import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Skeleton className="h-12 w-4/5 rounded-lg bg-slate-300">
        Loading...
      </Skeleton>
    </div>
  );
}
