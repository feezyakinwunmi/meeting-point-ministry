// src/app/prayers/page.tsx
import type { Metadata } from "next";
import PrayersClient from "./prayer";

export const metadata: Metadata = {
  title: "Daily Prayer Altar | 24/7 Intercession Ottawa | MPM",
  description:
    "Join the Altar. Consistent, persistent, and insistent prayer watches at Midnight, 6 AM, and Noon. Keep the fire burning for our city and nation.",
};

export default function PrayersPage() {
  return <PrayersClient />;
}