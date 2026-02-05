"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const members = [
  { name: "Pastor Alfred Ogbumoh", image: "/m1.png" },
  { name: "Pasteur Brunor Savard", image: "/m2.png" },
  { name: "Christopher W. Byberg", image: "/m3.png" },
  { name: "Pastor Chuck Balik", image: "/m4.png" },
  { name: "Pastor Doug Valerio", image: "/m5.jpg" },
  { name: "Pastor Isaac Gimba", image: "/m6.png" },
  { name: "Pasteur Jose Mukesa", image: "/m7.jpg" },
  { name: "Dr. James McKeown Quinnoo", image: "/m8.jpg" },
  { name: "Pastor Kiwanda Redner", image: "/m9.png" },
  { name: "Pastor Mike Welch", image: "/m10.png" },
  { name: "Richard Long", image: "/m11.png" },
  { name: "Pastor Yong-Jin Rhee", image: "/m12.png" },
];

export default function MembersClient() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Small Hero */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
      

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-[#cc5500] via-[#006400] to-[#8b0000] bg-clip-text text-transparent"
          >
            Our Leaders & Members
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg font-medium text-gray-700"
          >
            Carrying the Vision of Unity and Intercession
          </motion.p>
        </div>
      </section>

      {/* Members Grid */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.08 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-4 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[#cc5500] transition-colors">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}