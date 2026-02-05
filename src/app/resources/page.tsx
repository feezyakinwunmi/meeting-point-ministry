// src/app/resources/page.tsx  ← SERVER COMPONENT (for SEO)
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources | Light and Fire Teaching Series - Meeting Point Ministry",
  description:
    "Access our digital library of Five-Fold teachings, unity summit archives, and prayer strategies to grow as a son or daughter of the ministry.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}