// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex  md:items-center md:justify-center">
        {/* Left Nav */}
        <nav className="hidden md:flex items-right md:items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Home
          </Link>
          <Link href="/prayers" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Prayers
          </Link>
          <Link href="/win" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            WIN
          </Link>
     
          {/* About Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 group-hover:text-[#cc5500] transition font-medium flex items-center gap-1">
              About <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/about"
                className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#cc5500] transition"
              >
                About MPM
              </Link>
              <Link
                href="/members"
                className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#cc5500] transition"
              >
                Our Leaders & Members
              </Link>
            </div>
          </div>

          <Link href="/convergence" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Convergence
          </Link>
  {/* Center Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold mx-8">
          <Image src="/logo.png" alt="MPM Logo" width={140} height={50} className="h-10 w-auto" />
        </Link>
          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 group-hover:text-[#cc5500] transition font-medium flex items-center gap-1">
              Resources <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/resources"
                className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#cc5500] transition"
              >
                MPM Library
              </Link>
              <Link
                href="/events"
                className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#cc5500] transition"
              >
                Events
              </Link>
            </div>
          </div>

          <Link href="/give" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Give
          </Link>

          <Link href="/volunteer" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Volunteer
          </Link>

          <Link href="/connect" className="text-gray-700 hover:text-[#cc5500] transition font-medium">
            Connect
          </Link>

          <Link
            href="/join"
            className="bg-[#cc5500] text-white px-6 py-2.5 rounded-full hover:bg-[#b34700] transition font-medium shadow-sm"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:hidden">
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <Image src="/logo.png" alt="MPM Logo" width={120} height={40} className="h-8 w-auto" />
          </Link>
        <button className="md:hidden text-gray-700 items-right" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button></div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden  border-t border-gray-200 px-6 py-6 space-y-4">
          <Link href="/" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <div>
            <button
              className="w-full text-left py-2 text-gray-800 hover:text-[#cc5500] flex items-center justify-between"
              onClick={() => toggleDropdown("About")}
            >
              About <ChevronDown size={18} className={openDropdown === "About" ? "rotate-180" : ""} />
            </button>
            {openDropdown === "About" && (
              <div className="pl-4 space-y-2 mt-1">
                <Link href="/about" className="block py-1.5 text-gray-600 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
                  About MPM
                </Link>
                <Link href="/members" className="block py-1.5 text-gray-600 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
                  Our Leaders & Members
                </Link>
              </div>
            )}
          </div>

          <Link href="/prayers" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Prayers
          </Link>

          <Link href="/win" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            WIN
          </Link>

          <div>
            <button
              className="w-full text-left py-2 text-gray-800 hover:text-[#cc5500] flex items-center justify-between"
              onClick={() => toggleDropdown("Resources")}
            >
              Resources <ChevronDown size={18} className={openDropdown === "Resources" ? "rotate-180" : ""} />
            </button>
            {openDropdown === "Resources" && (
              <div className="pl-4 space-y-2 mt-1">
                <Link href="/resources" className="block py-1.5 text-gray-600 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
                  MPM Library
                </Link>
                <Link href="/events" className="block py-1.5 text-gray-600 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
                  Events
                </Link>
              </div>
            )}
          </div>

          <Link href="/convergence" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Convergence
          </Link>

          <Link href="/give" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Give
          </Link>

          <Link href="/volunteer" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Volunteer
          </Link>

          <Link href="/connect" className="block py-2 text-gray-800 hover:text-[#cc5500]" onClick={() => setMobileOpen(false)}>
            Connect
          </Link>

          <Link
            href="/join"
            className="block py-3 px-6 bg-[#cc5500] text-white rounded-full text-center hover:bg-[#b34700] transition"
            onClick={() => setMobileOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
}