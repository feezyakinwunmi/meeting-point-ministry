// src/components/resources/ResourcesClient.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Clock, Users, Briefcase, Flame, BookOpen, Share2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { YouTubeEmbed } from '@next/third-parties/google';
import { Calendar } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const demoResources = [
  {
    id: 1,
    title: "The Watchman’s Mandate – Midnight Incense",
    speaker: "Apostle Isaac Gimba",
    date: "January 15, 2025",
    duration: "48 min",
    description: "Learn the CPI strategy (Consistent, Persistent, Insistent) to stand as a watchman for your city and family.",
    youtubeId: "tsoQdXaNnQE",
    category: "Altar Archives",
    tags: ["Prayer", "Intercession", "Noon Refuel"],
  },
  {
    id: 2,
    title: "Shepherding the Shepherd – Unity in Leadership",
    speaker: "Pastor [Name] Gimba",
    date: "February 2, 2025",
    duration: "1 hr 12 min",
    description: "Deep dive into navigating denominational differences and building relational bridges among leaders.",
    youtubeId: "tsoQdXaNnQE",
    category: "Unity Blueprint",
    tags: ["Leadership", "Five-Fold", "Pastors"],
  },
  {
    id: 3,
    title: "Identity in the Boardroom – Marketplace Fire",
    speaker: "Sis. Grace Okafor",
    date: "March 10, 2025",
    duration: "32 min",
    description: "Short but powerful teaching on grounding your worth in Christ while leading with excellence at work.",
    youtubeId: "tsoQdXaNnQE",
    category: "Marketplace Wisdom",
    tags: ["WIN", "Professionals", "Noon Refuel"],
  },
  // Add more demo entries as needed
];

export default function ResourcesClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredResources = demoResources.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || res.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/res.jpg" // books, fire, open bible, light rays – light & fire theme
            alt="Equipping the Body with Light and Fire - MPM Resources"
            fill
            className="object-cover brightness-90"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90" /> */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-white"
          >
            MPM Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold text-white"
          >
            Equipping the Body. Illuminating the Word. Activating the Five-Fold.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-12 md:space-y-16">
        {/* Search & Filter Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-5 rounded-xl shadow-md"
        >
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search teachings, speakers, topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#cc5500] transition"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto flex-wrap">
            {["All", "Altar Archives", "Unity Blueprint", "Marketplace Wisdom"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  activeFilter === cat
                    ? "bg-[#cc5500] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredResources.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12">No resources found. Try another search.</p>
          ) : (
            filteredResources.map((res) => (
              <motion.div
                key={res.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Thumbnail + Play overlay */}
                <div className="relative aspect-video">
                  <YouTubeEmbed
                    videoid={res.youtubeId}
                    width={400}
                    height={225}
                    playlabel={`Play ${res.title}`}
                    params="rel=0&modestbranding=1"
                    style="position: absolute; inset: 0;"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#cc5500]/80 flex items-center justify-center">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#cc5500] transition-colors">
                    {res.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {res.speaker}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {res.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {res.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{res.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#006400] bg-[#006400]/10 px-3 py-1 rounded-full">
                      {res.category}
                    </span>
                    <button className="text-[#cc5500] hover:text-[#b34700] transition flex items-center gap-1 text-sm">
                      <Share2 size={16} /> Share
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-12 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Take the Fire With You
          </h3>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-700">
            Don’t just watch—engage with the community. Subscribe for latest teachings, share with fellow disciples, or submit topics for the Altar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/subscribe"
              className="bg-[#cc5500] hover:bg-[#b34700] text-white font-medium py-4 px-10 rounded-full shadow transition flex items-center justify-center gap-2"
            >
              Subscribe to Updates <ArrowRight size={18} />
            </Link>
            <Link
              href="/submit-topic"
              className="border border-[#cc5500] text-[#cc5500] hover:bg-[#cc5500]/10 font-medium py-4 px-10 rounded-full transition flex items-center justify-center gap-2"
            >
              Submit a Topic <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}