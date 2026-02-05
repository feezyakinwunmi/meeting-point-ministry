"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Flame, Heart, Users, Handshake, MapPin, ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutClient() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pic12.jpg"
            alt="Disciples in covenant unity - Meeting Point Ministry"
            fill
            className="object-cover brightness-90 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-[#cc5500] via-[#006400] to-[#8b0000] bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg font-medium text-gray-700"
          >
            Our Divine Mandate — More Than a Meeting. A Covenant.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission – New small section */}
      <div className="container mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-[#cc5500]"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#cc5500]">Vision</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To build and strengthen Christian prayer altars, to support leaders to pray without ceasing and to keep the fire on the altar burning ceaselessly. Leviticus 8:13
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-[#006400]"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#006400]">Mission</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To strengthen the bond of unity amongst different and many parts of the Church.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content – lighter, more visual & engaging */}
      <div className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* 1. More Than a Meeting */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#cc5500]">
              More Than a Meeting. A Covenant.
            </h2>
            <div className="prose prose-base md:prose-lg max-w-none leading-relaxed text-gray-700">
              <p className="mb-5">
                In a season of division, Meeting Point Ministry (MPM) is a prophetic response to Jesus’ prayer in John 17: "That they all may be one." We believe the spiritual atmosphere of a city is shifted when Disciples move in unity.
              </p>
              <p className="mb-5 italic text-[#006400]/90">
                We are not here to build a new denomination or a private kingdom. We serve as a Spiritual Umbilical Cord — nourishing the Body of Christ through Covenant Connection and unceasing intercession.
              </p>
              <p>
                When we lower our denominational flags, we make room for the Flag of Jesus to be lifted over our streets, homes, and government.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 2. DNA of a Disciple */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
            DNA of a Disciple: Our Core Covenants
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Heart,
                color: "#cc5500",
                title: "Covenant Love",
                subtitle: "The Motivation",
                desc: "We move beyond mere tolerance to a commitment that survives disagreement. Based on Matthew 22:37-40, our love is the active proof of our discipleship.",
              },
              {
                icon: Handshake,
                color: "#006400",
                title: "Radical Generosity",
                subtitle: "The Demonstration",
                desc: "This is love in action. For an MPM disciple, generosity includes ceaseless prayer, shared meals, and honoring the Five-Fold graces in others.",
              },
              {
                icon: Users,
                color: "#8b0000",
                title: "Unity in One Accord",
                subtitle: "The Power",
                desc: "Spiritual power (Dunamis) is released when disciples dwell in unity. By connecting Apostles, Prophets, Evangelists, Pastors, and Teachers, we create a spiritual covering that no single church can provide alone.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-transparent hover:border-[${item.color}]"
              >
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-gradient-to-br from-[${item.color}]/10 to-[${item.color}]/5 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[${item.color}]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-base text-[${item.color}] font-medium mb-3">{item.subtitle}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Founders */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-xl grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8b0000]">
              The Founders: From the Boardroom to the Altar
            </h2>
            <div className="prose prose-base text-gray-700 leading-relaxed">
              <p>
                Meeting Point Ministry was born in 2017 from a journey of direct obedience. Before his call to ministry, Apostle Isaac Gimba was rooted in the marketplace—first as a businessman in Nigeria, then as a banker in Canada.
              </p>
              <p>
                This background allows him to see the Church through the eyes of both a shepherd and a professional leader. His mandate was clear: Support the Church in Canada to pray.
              </p>
              <p>
                Alongside him, Pastor [Name] Gimba (Lead for the Women Inspired Network) bridges the gap for women in leadership and the marketplace. Together, they have moved from the boardroom to the Altar, proving that a true Disciple carries the fire of God into every sector of society.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#cc5500]/10 to-[#8b0000]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/m6.png"
              alt="Apostle Isaac Gimba - Meeting Point Ministry"
              width={500}
              height={650}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
            />
          </motion.div>
        </motion.section>

        {/* 4. Why Ottawa */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#006400]">
            Why Ottawa? The Strategic Gateway
          </h2>
          <div className="prose prose-base max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-5">
              Ottawa is more than a capital; it is the "umbilical cord" of the nation. What happens here spiritually vibrates across all of Canada.
            </p>
            <p>
              By establishing a Daily Prayer Altar (24/7/364), we ensure the fire of intercession never goes out. We are watchmen on the wall, inviting Disciples from every tribe to join us in shifting the atmosphere of our nation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-3 bg-[#006400]/10 px-6 py-4 rounded-full border border-[#006400]/30 shadow-md"
          >
            <MapPin className="w-6 h-6 text-[#006400]" />
            <span className="text-base md:text-lg font-medium text-gray-800">
              Ottawa, Canada – Heart of the Nation
            </span>
          </motion.div>
        </motion.section>

        {/* 5. Find Your Place */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#cc5500]">
            Find Your Place in the Covenant
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-4xl mx-auto text-gray-700">
            You are the missing connection. A chain is only as strong as its links. Whether you are a lead Pastor seeking brotherhood, a professional woman seeking covering, or a young person ready to enlist in the Dunamis Army, your presence strengthens the Body.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/leaders", label: "Meet Our Leaders", color: "#cc5500" },
              { href: "/prayers", label: "Join the Daily Altar", color: "#006400" },
              { href: "/give", label: "Become a Covenant Partner", color: "#8b0000" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`group bg-white border border-gray-200 hover:border-[${item.color}] p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-center`}
              >
                <span className="text-base md:text-lg font-bold text-gray-900 block mb-2">{item.label}</span>
                <ArrowRight className="inline w-5 h-5 text-gray-500 group-hover:text-[${item.color}] group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}