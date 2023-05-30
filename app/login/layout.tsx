import { Metadata } from "next";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export const metadata: Metadata = {
  title: "login page",
};
