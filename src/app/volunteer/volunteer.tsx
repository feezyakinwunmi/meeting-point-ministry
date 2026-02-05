// src/app/volunteer/VolunteerClient.tsx
"use client";

import { useState } from "react";
import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Briefcase,
  HeartHandshake,
  Users,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp,
    Palette,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function VolunteerClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWing, setSelectedWing] = useState("");

  const wings = [
    "Digital/Media (Tech Wing)",
    "Administration (Order Wing)",
    "Prayer/Intercession (Altar Wing)",
    "Counseling (Shepherd Wing)",
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/vol.jpg" // image of people serving / team in unity
            alt="Disciples serving the Kingdom - Meeting Point Ministry"
            fill
            className="object-cover brightness-90"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" /> */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-white"
          >
            Serve at MPM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold text-white"
          >
            Lifting the Flag of Jesus Through Devotion
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* 1. Your Skill is a Seed */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Your Skill is a Seed
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Meeting Point Ministry (MPM) does not run on programs; it runs on the devotion of Sons and Daughters. When you serve here, you are not just filling a position—you are strengthening the Spiritual Umbilical Cord of our nation. By joining this company of disciples, you facilitate the Convergence of churches and help lift the Flag of Jesus across Canada.
            </p>
          </div>
        </motion.section>

        {/* 2. Strategic Support Wings – Icon cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            Strategic Support Wings
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Code,
                title: "Tech & Media Wing",
                desc: "Capturing the 'Light and Fire' to connect our global community through high-quality digital ministry.",
                color: "#cc5500",
              },
              {
                icon: Briefcase,
                title: "Admin & Operations Wing",
                desc: "Bringing the spirit of order to ensure the Daily Altar and Convergence gatherings are seamless.",
                color: "#006400",
              },
              {
                icon: HeartHandshake,
                title: "Shepherd Wing",
                desc: "Providing spiritual support and intercessory covering for pastors and families in transition.",
                color: "#8b0000",
              },
              {
                icon: Users,
                title: "Financial Stewardship Wing",
                desc: "Applying professional expertise to maintain the movement’s financial integrity and growth.",
                color: "#cc5500",
              },
              {
                icon: Palette,
                title: "Creative Wing",
                desc: "Using branding, design, and the arts to visualize the vision of unity.",
                color: "#006400",
              },
            ].map((wing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-transparent hover:border-[${wing.color}] text-center"
              >
                <wing.icon className="w-10 h-10 mx-auto mb-4 text-[${wing.color}]" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{wing.title}</h4>
                <p className="text-gray-600 text-sm">{wing.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Disciple’s Commitment */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              The Disciple’s Commitment
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              Service at MPM is a sacred trust. We look for disciples who embody our core DNA:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Faith in Action", desc: "A deep commitment to Jesus and the unity of His Church." },
                { title: "Professional Excellence", desc: "Giving God your best, reflecting the spirit of excellence in the workplace." },
                { title: "Covenant Integrity", desc: "Reliability, discretion, and a heart that honors the Five-Fold leadership." },
              ].map((commit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{commit.title}</h4>
                  <p className="text-gray-600 text-sm">{commit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 4. Enlist Form – Custom dropdown */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Enlist in Service
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Professional Industry (e.g., IT, Finance, Law, Creative)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="Your field"
                />
              </div>

              {/* Custom Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">Area of Ministry</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between focus:outline-none focus:border-[#cc5500] transition"
                >
                  {selectedWing || "Select your interest..."}
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                  >
                    {wings.map((wing) => (
                      <button
                        key={wing}
                        type="button"
                        onClick={() => {
                          setSelectedWing(wing);
                          setIsOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left hover:bg-gray-50 transition text-sm md:text-base"
                      >
                        {wing}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="Describe how your skills can serve the vision of unity."
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="nda" className="mt-1 w-5 h-5 text-[#cc5500] border-gray-300 rounded" required />
                <label htmlFor="nda" className="text-sm text-gray-600">
                  I agree to abide by the MPM Covenant of Confidentiality (NDA) and Ontario Volunteer Safety Guidelines.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#cc5500] hover:bg-[#b34700] text-white font-medium py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                Register to Serve <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.section>

        {/* 5. Walking in Integrity */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Walking in Integrity
          </h3>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-700">
            To serve at the "Spiritual Umbilical Cord" of the nation requires a commitment to both spiritual fervor and operational excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-[#cc5500]" />
              <h4 className="text-lg font-bold mb-2">Covenant of Confidentiality</h4>
              <p className="text-sm text-gray-600">
                All team members are required to sign the MPM Non-Disclosure Agreement (NDA) to protect the sanctuary of our leaders and disciples.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-[#cc5500]" />
              <h4 className="text-lg font-bold mb-2">Safety & Stewardship</h4>
              <p className="text-sm text-gray-600">
                We adhere to provincial standards of care. All physical volunteers must abide by the Ontario Health and Safety Standards.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}