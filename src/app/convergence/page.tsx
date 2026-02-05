// src/app/connect/page.tsx
import type { Metadata } from "next";
import ConnectClient from "./convergence";

export const metadata: Metadata = {
  title: "Connect with MPM | Enter the Convergence of Sons & Daughters",
  description:
    "From isolation to One Accord. Join the Community, WIN Network, Dunamis Army, or request prayer. Welcome to the Covenant.",
};

export default function ConnectPage() {
  return <ConnectClient />;
}