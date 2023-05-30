import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOG Data",
  description: "HOG data database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>{children}</main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
