import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Leo Lucky Hands Studios | Talent & Celebrity Management", template: "%s | Leo Lucky Hands Studios" },
  description: "Talent management, actress marketing, celebrity campaigns and brand collaborations from Leo Lucky Hands Studios.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="ambient-glow" /><Header /><main>{children}</main><Footer /></body></html>;
}
