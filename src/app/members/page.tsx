// src/app/members/page.tsx
import type { Metadata } from "next";
import MembersClient from "./MembersClient";

export const metadata: Metadata = {
  title: "Our Leaders & Members | Meeting Point Ministry",
  description:
    "Meet the sons and daughters carrying the vision of unity and intercession. From Apostle Isaac Gimba to global partners — one Body, one Flag, one Christ.",
};

export default function MembersPage() {
  return <MembersClient />;
}