"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Calendar,Briefcase, Flame, Users, ArrowRight, CreditCard, Mail, Phone, MapPin } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

export default function GiveClient() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/give.jpg" // use image of hands giving/offering or altar fire
            alt="Sowing seeds into the Kingdom - Meeting Point Ministry"
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
            Give & Donate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold text-white"
          >
            Your Seed Fuels the Fire
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* 1. Power of Partnership */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Your Donations Fuel the Fire
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              At Meeting Point Ministry (MPM), we believe that when you Give, you are making a spiritual investment in the unity of the Body of Christ. Since 2017, our work in Ottawa has been sustained by the sacrificial support of the Community of Disciples. When you Donate, you are not just funding an organization; you are fueling a national altar that intercedes for families, cities, and nations 24/7/364.
            </p>
          </div>
        </motion.section>

        {/* 2. Strategic Giving – Small icon cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-[#cc5500]">
            Stewardship of Every Dollar
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Flame, title: "Daily Altar", desc: "Maintaining technology and leadership for consistent prayer watches." },
              { icon: Briefcase, title: "Marketplace Impact (WIN)", desc: "Resources for professional daughters to dominate in their industries." },
              { icon: Users, title: "Youth Mobilization (Dunamis)", desc: "Equipping the next generation of sons to lead with power." },
              { icon: HeartHandshake, title: "Pastoral Unity", desc: "Supporting the Spiritual Umbilical Cord connecting church leaders across Canada." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#cc5500]/60 text-center"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-[#cc5500]" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Ways to Give – Clean cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            Ways to Give
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Become a Monthly Partner",
                desc: "Consistency is the key to breakthrough. Join our circle of monthly supporters who ensure the Altar never goes out.",
                cta: "GIVE MONTHLY",
                href: "/give/monthly",
                color: "#cc5500",
              },
              {
                title: "One-Time Seed",
                desc: "Provide a one-time donation to support upcoming Convergence events or regional unity missions.",
                cta: "DONATE NOW",
                href: "/give/one-time",
                // green color
                color: "#006400",
              },
              {
                title: "Marketplace & WIN Support",
                desc: "Direct your funds to support the Women Inspired Network and our marketplace discipleship programs.",
                cta: "GIVE TO WIN",
                href: "/give/win",
                color: "#8b0000",
              },
            ].map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[${option.color}] text-center"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-900">{option.title}</h4>
                <p className="text-gray-600 mb-6 text-sm md:text-base">{option.desc}</p>
                <Link
                  href={option.href}
                  className={`inline-flex items-center bg-[${option.color}] hover:bg-[${option.color}]/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-sm`}
                >
                  {option.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. Simple & Secure Methods – Trust signals */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            Simple & Secure Giving Methods
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Mail, title: "E-Transfer", desc: "Send directly to info@meetingpointe.org", color: "#cc5500" },
              { icon: CreditCard, title: "Online Portal", desc: "Secure credit/debit via encrypted platform", color: "#006400" },
              { icon: MapPin, title: "In-Person / Mail", desc: "1807 St Joseph Blvd Unit 301, Orléans, ON K1C 7C6", color: "#8b0000" },
              { icon: Phone, title: "Phone Support", desc: "Call 613 440 8337 for assistance", color: "#cc5500" },
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border border-gray-200"
              >
                <method.icon className="w-10 h-10 mx-auto mb-4 text-[#cc5500]" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-600 text-sm">
            Every gift is received with gratitude and stewarded with transparency.
          </div>
        </motion.section>
      </div>
    </main>
  );
}