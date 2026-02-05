// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";





export const metadata: Metadata = {
  title: "Meeting Point Ministry | Church Unity & Discipleship Ottawa",
  description:
    "Join a community of disciples dedicated to lowering denominational flags. Experience relational unity and the Five-Fold Ministry in Ottawa, Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` antialiased bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}