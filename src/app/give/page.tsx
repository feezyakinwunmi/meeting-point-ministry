// src/app/give/page.tsx
import type { Metadata } from "next";
import GiveClient from "./give";

export const metadata: Metadata = {
  title: "Give & Donate to MPM | Partner with the Ottawa Altar",
  description:
    "Support the vision of unity. Your seed fuels the Daily Prayer Altar and equips disciples across Canada. Give securely or donate via E-transfer.",
};

export default function GivePage() {
  return <GiveClient />;
}