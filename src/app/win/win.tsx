"use client";

import { motion, Variants} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Briefcase,Users, Gavel, Stethoscope, Plane, Palette, Flame, Heart, ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};
export default function WINClient() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pic12.jpg" // professional women + prayer element
            alt="Women leading with excellence and fire - WIN Meeting Point Ministry"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#cc5500] to-[#006400] bg-clip-text text-transparent"
          >
            Women Inspired Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl font-medium text-gray-700"
          >
            Professional Excellence. Spiritual Fire.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Goal & Mandate */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Your Career is Your Pulpit
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              WIN is a strategic alliance of professional women—lawyers, doctors, pilots, executives—who lead with precision and prayer. We provide the Covenant Connection required to dominate in high-pressure industries while remaining anchored in your calling.
            </p>
          </div>
        </motion.section>

        {/* WIN Advantage – Small icon cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-[#cc5500]">
            The WIN Advantage
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Briefcase,
                title: "Command Your Field",
                desc: "Access resources designed to help you excel in your specific industry.",
              },
              {
                icon: Users,
                title: "Kingdom Collaboration",
                desc: "Align with other professional women to exchange strategy, wisdom, and opportunities.",
              },
              {
                icon: Flame,
                title: "Spiritual Covering",
                desc: "Secure the intercessory support needed to navigate the unique challenges of marketplace leadership and family.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#cc5500]/60"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-[#cc5500]" />
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Pillars – Horizontal scroll or grid */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            Our Pillars
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Flame, title: "Influence", desc: "Leading with unyielding integrity and a spirit of excellence." },
              { icon: Heart, title: "Identity", desc: "Grounding your worth in being a daughter of the King, not a job title." },
              { icon: Users, title: "Inheritance", desc: "Establishing financial and spiritual legacies for the generations to follow." },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all text-center border-t-4 border-[#006400]/60"
              >
                <pillar.icon className="w-10 h-10 mx-auto mb-4 text-[#006400]" />
                <h4 className="text-lg font-bold mb-2">{pillar.title}</h4>
                <p className="text-gray-600 text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/join-win"
              className="bg-[#cc5500] hover:bg-[#b34700] text-white font-medium py-4 px-10 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
            >
              Join the WIN Network <ArrowRight size={20} />
            </Link>
            <Link
              href="/events"
              className="bg-white border border-[#cc5500] text-[#cc5500] hover:bg-[#cc5500]/10 font-medium py-4 px-10 rounded-full shadow transition duration-300 flex items-center justify-center gap-2"
            >
              View Upcoming Gatherings <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}