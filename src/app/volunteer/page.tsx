// src/app/volunteer/page.tsx  ← SERVER COMPONENT (SEO only)
import type { Metadata } from "next";
import VolunteerClient from "./volunteer";

export const metadata: Metadata = {
  title: "Serve at MPM | Enlist in the Community of Disciples",
  description:
    "Use your professional skills for the Kingdom. Enlist in our Tech, Admin, or Shepherd wings to support the fire on the Altar.",
};

export default function VolunteerPage() {
  return <VolunteerClient />;
}