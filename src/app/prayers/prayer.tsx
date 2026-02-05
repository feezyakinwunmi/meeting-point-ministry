"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Flame, Clock, Moon, Sun, Users, Heart, ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function PrayersClient() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pray.png" // candlelight, hands raised, fire/altar imagery
            alt="Disciples keeping the fire burning - Meeting Point Ministry Altar"
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
            The Daily Prayer Altar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold text-white"
          >
            A Lifestyle of Intercession – "The fire must never go out"
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* 1. The Call */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              The Call: A Lifestyle of Intercession
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              "The fire must never go out" (Leviticus 6:12-13). At Meeting Point Ministry, the Altar is not a program; it is a Covenant among disciples to keep the fire of intercession burning 24/7/364. We believe prayer is the spiritual oxygen of the Church. When we pray in one accord, we break resistance and prepare the ground for the Five-Fold Ministry to flourish.
            </p>
          </div>
        </motion.section>

        {/* 2. The Three Watches – Card layout */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
            The Three Watches: Our Daily Rhythm
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Moon,
                time: "Midnight Incense | 12:00 AM",
                headline: "Starting the Day in Dominion",
                desc: "We take authority over the day ahead in the quiet of the night, standing as watchmen for our families and nation.",
                cta: "Join the Midnight Watch",
                color: "#8b0000",
              },
              {
                icon: Sun,
                time: "Morning Decree | 6:00 AM",
                headline: "Praying Until Something Happens (PUSH)",
                desc: "Join the company of disciples at dawn to seek the face of God and decree His will over our city before the world wakes.",
                cta: "Join the Morning Watch",
                color: "#cc5500",
              },
              {
                icon: Clock,
                time: "Noon Watch | 12:00 PM",
                headline: "Fuel for the Journey",
                desc: "A high-impact, 30-minute refueling station designed for marketplace disciples to keep their fire burning during the workday.",
                cta: "Join the Noon Watch",
                color: "#006400",
              },
            ].map((watch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-transparent hover:border-[${watch.color}] text-center"
              >
                <watch.icon className="w-10 h-10 mx-auto mb-4 text-[${watch.color}]" />
                <h4 className="text-base font-medium text-gray-600 mb-2">{watch.time}</h4>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{watch.headline}</h3>
                <p className="text-gray-600 text-sm mb-4">{watch.desc}</p>
                <Link
                  href="#" // Zoom link or passcode page
                  className="inline-flex items-center text-[${watch.color}] font-medium hover:underline gap-1 text-sm"
                >
                  {watch.cta} <ArrowRight size={16} />
                </Link>
                <p className="text-xs text-gray-500 mt-2">(Passcode: prayer)</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. CPI Strategy */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-gray-900">
              The "CPI" Strategy: Why We Pray
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Consistent", desc: "Spiritual discipline builds spiritual authority.", color: "#cc5500" },
                { title: "Persistent", desc: "We do not stop until the atmosphere of our city shifts.", color: "#006400" },
                { title: "Insistent", desc: "We demand that the Kingdom of Heaven be established on Earth.", color: "#8b0000" },
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-lg font-bold mb-3 text-gray-900" style={{ color: principle.color }}>
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 4. Standing With You – Request & Testimonies */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Standing With You: Requests & Testimonies
            </h3>
            <p className="text-base md:text-lg mb-10 text-gray-700">
              Are you in a season of transition or facing a storm? Our company of disciples is ready to intercede for you in Covenant Connection.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/prayer-request"
                className="bg-[#cc5500] hover:bg-[#b34700] text-white font-medium py-4 px-10 rounded-full shadow transition flex items-center justify-center gap-2"
              >
                Submit a Prayer Request <ArrowRight size={18} />
              </Link>
              <Link
                href="/testimonies"
                className="border border-[#cc5500] text-[#cc5500] hover:bg-[#cc5500]/10 font-medium py-4 px-10 rounded-full transition flex items-center justify-center gap-2"
              >
                Read Testimonies of Breakthrough <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}