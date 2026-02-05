// src/components/Footer.tsx
import Link from "next/link";
import { Flame, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1f] text-gray-300 py-12 md:py-16 border-t border-[#cc5500]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo & About */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Flame className="w-8 h-8 text-[#cc5500]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#cc5500] via-[#006400] to-[#8b0000] bg-clip-text text-transparent">
                MPM
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Lowering denominational flags to lift the flag of Jesus in Ottawa and across Canada. One Body. One Flag. One Christ.
            </p>
          </div>

          {/* Quick Links – Vertical */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#cc5500] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#cc5500] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/prayers" className="hover:text-[#cc5500] transition">
                  Prayers
                </Link>
              </li>
              <li>
                <Link href="/win" className="hover:text-[#cc5500] transition">
                  WIN
                </Link>
              </li>
              <li>
                <Link href="/convergence" className="hover:text-[#cc5500] transition">
                  Convergence
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-[#cc5500] transition">
                  Give
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-[#cc5500] transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#cc5500] transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-[#cc5500] transition">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-[#cc5500] flex-shrink-0 mt-1" />
                <span>1807 St Joseph Blvd Unit 301, Orléans, ON K1C 7C6</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#cc5500]" />
                <a href="tel:+16134408337" className="hover:text-[#cc5500] transition">
                  613-440-8337
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#cc5500]" />
                <a href="mailto:info@meetingpointe.org" className="hover:text-[#cc5500] transition break-all">
                  info@meetingpointe.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Powered By */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Connect With Us</h4>
            <div className="flex justify-center md:justify-start gap-5 mb-6">
              <a href="#" className="text-gray-400 hover:text-[#cc5500] transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cc5500] transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cc5500] transition">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cc5500] transition">
                <Instagram size={24} />
              </a>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              © {new Date().getFullYear()} Meeting Point Ministry. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Powered by{" "}
              <a
                href="https://ithriveonwisdom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cc5500] hover:underline transition"
              >
                Thriveon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}