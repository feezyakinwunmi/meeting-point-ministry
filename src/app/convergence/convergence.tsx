"use client";

import { useState } from "react";
import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  HeartHandshake,
  Users,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

export default function ConnectClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "I want to join the Community of Disciples (General)",
    "I am interested in The Convergence (Sons & Daughters / Leadership)",
    "I want to join the WIN Network (Professional Women)",
    "I want to enlist in the Dunamis Army (Youth)",
    "I have a Prayer Request for the Altar",
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pep.png" // community hands together / unity circle
            alt="Disciples connecting in covenant - Meeting Point Ministry"
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
            Connect with the Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold text-white"
          >
            Entering the Convergence of Sons and Daughters
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* 1. From Isolation to One Accord */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              From Isolation to One Accord
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Unity begins with a single connection. Whether you are joining our daily prayer rhythm, aligning as a marketplace disciple in WIN, or ready to commit as a Son or Daughter of this mandate, we are ready to welcome you. Let us lift the flag of Jesus together.
            </p>
          </div>
        </motion.section>

        {/* 2. Strategic Connection Points – Small cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            Strategic Connection Points
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Flame,
                title: "The Global Altar",
                desc: "For prayer requests or inquiries regarding our 24/7 watches.",
                color: "#8b0000",
              },
              {
                icon: Users,
                title: "The Convergence Office",
                desc: "For leaders looking to align with the ministry’s core mandate and specialized gatherings.",
                color: "#cc5500",
              },
              {
                icon: Briefcase,
                title: "Marketplace & Youth",
                desc: "Dedicated support for the Women Inspired Network (WIN) and the Dunamis Army.",
                color: "#006400",
              },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-transparent hover:border-[${point.color}] text-center"
              >
                <point.icon className="w-10 h-10 mx-auto mb-4 text-[${point.color}]" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{point.title}</h4>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            <div className="bg-gray-50 p-6 rounded-xl">
              <MapPin className="w-8 h-8 mx-auto md:mx-0 mb-3 text-[#cc5500]" />
              <p className="text-sm font-medium">1807 St Joseph Blvd Unit 301, Orléans, ON K1C 7C6</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Phone className="w-8 h-8 mx-auto md:mx-0 mb-3 text-[#cc5500]" />
              <p className="text-sm font-medium">613-440-8337</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Mail className="w-8 h-8 mx-auto md:mx-0 mb-3 text-[#cc5500]" />
              <p className="text-sm font-medium">info@meetingpointe.org</p>
            </div>
          </div>
        </motion.section>

        {/* 3. Step into Your Calling – Form + Custom Dropdown */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Step into Your Calling
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
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              {/* Custom Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700">My Interest</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between focus:outline-none focus:border-[#cc5500] transition"
                >
                  {selectedOption || "Select your interest..."}
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                  >
                    {options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelectedOption(opt);
                          setIsOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left hover:bg-gray-50 transition text-sm md:text-base"
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#cc5500] transition"
                  placeholder="How can we stand in one accord with you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#cc5500] hover:bg-[#b34700] text-white font-medium py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                Submit & Join the Community <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.section>

        {/* 4. Visit the Altar */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Visit the Altar: Our Ottawa Hub
          </h3>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-700">
            We are strategically located in Orléans, serving as the "Spiritual Umbilical Cord" of the nation’s capital. If you are in the Ottawa region, we invite you to break bread and pray with us in person.
          </p>

          <div className="inline-flex items-center gap-4 bg-gray-50 px-8 py-5 rounded-full border border-gray-200 shadow-md">
            <MapPin className="w-7 h-7 text-[#cc5500]" />
            <span className="text-lg font-medium text-gray-800">
              1807 St Joseph Blvd Unit 301, Orléans, ON K1C 7C6
            </span>
          </div>
        </motion.section>

        {/* 5. Stay in the Flow */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Stay in the Flow
          </h3>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-700">
            Don’t wait for the next event. Follow our daily decrees and community updates on social media to remain connected to the fire.
          </p>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-[#cc5500] hover:text-[#b34700] transition text-2xl">
              Facebook
            </a>
            <a href="#" className="text-[#cc5500] hover:text-[#b34700] transition text-2xl">
              X / Twitter
            </a>
            <a href="#" className="text-[#cc5500] hover:text-[#b34700] transition text-2xl">
              LinkedIn
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}