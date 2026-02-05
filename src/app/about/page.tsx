// src/app/about/page.tsx  ← SERVER COMPONENT
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About MPM | The Spiritual Umbilical Cord of Canada",
  description:
    "Discover the vision of Apostle Isaac Gimba. We facilitate the convergence of sons and daughters to strengthen the Body of Christ through one accord.",
  openGraph: {
    title: "About Meeting Point Ministry",
    description: "...",
    images: ["/og-about.jpg"], // add this image later
  },
};

export default function AboutPage() {
  return <AboutClient />;
}