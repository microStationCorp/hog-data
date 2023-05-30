import { Metadata } from "next";

export default function DataTableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export const metadata: Metadata = {
  title: "Data Table page",
};
