import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shahbaz Khan | Frontend Developer",

  description:
    "Explore Shahbaz Khan's personal portfolio, featuring frontend development skills, projects, and web development experience.",

  keywords: [
    "Shahbaz Khan",
    "Frontend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
  ],

  authors: [
    {
      name: "Shahbaz Khan",
    },
  ],

  openGraph: {
    title: "Shahbaz Khan | Frontend Developer",
    description:
      "Explore my projects, technical skills, and frontend development work.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
