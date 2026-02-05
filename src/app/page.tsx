// src/app/page.tsx  ← This is now a Server Component (no "use client")
import type { Metadata } from "next";
import HomeClient from "./components/Home";  // ← We'll create this next

export const metadata: Metadata = {
  title: "Meeting Point Ministry | Church Unity & Discipleship Ottawa",
  description:
    "Join a community of disciples dedicated to lowering denominational flags. Experience relational unity and the Five-Fold Ministry in Ottawa, Canada.",
  openGraph: {
    title: "Meeting Point Ministry | Church Unity & Discipleship Ottawa",
    description: "...",
    url: "https://meetingpointe.org",
    siteName: "Meeting Point Ministry",
    images: [
      {
        url: "/og-home.jpg", // Add this image to /public later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  // twitter, alternates.canonical, etc. as before
};

export default function HomePage() {
  return <HomeClient />;  // Just render the client part
}