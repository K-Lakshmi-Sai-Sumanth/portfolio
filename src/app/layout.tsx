import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAKSHMI SAI Sumanth | MERN Stack Developer",
  description:
    "Portfolio of K. Lakshmi Sai Sumanth, a MERN stack developer with 3+ years of experience in building scalable web applications.",
    icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
