import { Metadata } from "next";

export default function AddDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export const metadata: Metadata = {
  title: "Add Data",
};
