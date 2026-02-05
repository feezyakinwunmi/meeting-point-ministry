// src/app/win/page.tsx
import type { Metadata } from "next";
import WINClient from "./win";

export const metadata: Metadata = {
  title: "WIN - Women Inspired Network | Professional Marketplace Disciples",
  description:
    "Empowering daughters in law, medicine, and business. Where professional excellence meets spiritual fire. Build your brand with Kingdom authority.",
};

export default function WINPage() {
  return <WINClient />;
}