// src/components/HomeClient.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight,Users,Bird,BookOpen,MapPin,Clock,Calendar,Moon,Sun    ,Flame, HeartHandshake, Briefcase, Video } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import VideoPlayer from "./VideoPlayer";
import { YouTubeEmbed } from '@next/third-parties/google';


export default function HomeClient() {
  const { scrollYProgress } = useScroll();

  // Subtle parallax for hero background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  function JoinDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#cc5500] hover:bg-[#b34700] text-white font-bold py-6 px-10 rounded-full text-2xl shadow-xl transition duration-500 flex items-center justify-center gap-3"
      >
        Ready to Join? {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute mt-4 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 z-50"
        >
          <a
            href="/join-general" // link to general join form/page
            className="block px-8 py-6 text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
            onClick={() => setIsOpen(false)}
          >
            I want to Join the Community of Disciples (General)
          </a>
          <a
            href="/join-convergence" // link to leadership/Convergence form/page
            className="block px-8 py-6 text-lg font-semibold text-gray-800 hover:bg-gray-50 transition border-t border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            I am a Son/Daughter looking for The Convergence (Leadership)
          </a>
        </motion.div>
      )}
    </div>
  );
}

  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen overflow-x-hidden font-sans">

      {/* Hero - Immersive + animated text reveal */}
     <section className="relative h-screen min-h-[800px]">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{
      clickable: true,
      bulletClass: 'swiper-custom-bullet',
      bulletActiveClass: 'swiper-custom-bullet-active',
      renderBullet: (index, className) => {
        return `<span class="${className}"></span>`;
      },
    }}
    autoplay={{ delay: 6000, disableOnInteraction: false }}
    loop={true}
    className="h-full"
  >
    {[
      {
        bg: "/hero7.jpg", // diverse prayer
        alt: "Diverse disciples in unity prayer",
      },
      {
        bg: "/hero2.jpg", // youth praise
        alt: "Youth raising hands in worship",
      },
      {
        bg: "/hero6.jpg", // congregation service
        alt: "Church community gathering",
      },
      // Add more slides as needed
    ].map((slide, i) => (
      <SwiperSlide key={i}>
        <div className="relative h-full">
          <Image
            src={slide.bg}
            alt={slide.alt + " - Meeting Point Ministry"}
            fill
            className="object-cover brightness-50 scale-105"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f]/80 via-transparent to-[#0a0f1f]/30" />

          <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
            <div className="max-w-5xl">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                style={{
                  background: "linear-gradient(to right, #cc5500, #006400, #8b0000)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "white",
                }}
              >
                One Body. One Flag. One Christ
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="text-xl md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto font-light text-gray-100"
              >
                We are a company of disciples in Ottawa dedicated to lowering denominational flags to lift the flag of Jesus. Love demonstrated in unity and one accord is the key to seeing the Five-Fold Ministry established in our cities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/join"
                  className="inline-flex items-center bg-[#cc5500] hover:bg-[#b34700] text-white font-bold py-3 px-4 rounded-full text-lg md:text-xl shadow-2xl transition-all duration-500 border-4 border-[#cc5500]/40"
                >
                  Join Our Community of Brethren <ArrowRight className="ml-4 w-8 h-8" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom vertical pagination dots - center-right */}
  <style jsx global>{`
    .swiper-pagination {
      position: absolute !important;
      left: 40px !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 16px !important;
      width: auto !important;
      visibility: hidden !important;
    }
    .swiper-custom-bullet {
      width: 14px !important;
      height: 14px !important;
      background: rgba(255, 255, 255, 0.5) !important;
      border-radius: 50% !important;
      opacity: 1 !important;
      transition: all 0.3s ease !important;
      cursor: pointer !important;
            visibility: hidden !important;

    }
    .swiper-custom-bullet-active {
      background: #cc5500 !important;
      transform: scale(1.4) !important;
      box-shadow: 0 0 15px rgba(204, 85, 0, 0.7) !important;
            visibility: hidden !important;

    }
  `}</style>

  {/* Bottom overlapping events bar */}
  <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/3 md:translate-y-1/4">
    <div className="bg-[#0a0f1f]/80 backdrop-blur-xl border-t border-[#cc5500]/30 py-6 px-6 md:px-12 rounded-t-3xl max-w-6xl mx-auto shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div className="text-center md:text-left">
          <p className="text-[#cc5500] font-semibold text-lg">Upcoming / Weekly</p>
          <h4 className="text-2xl font-bold">Church Events</h4>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-8">
          {[
            { icon: Moon, text: "Midnight Incense ", time: "12:00 AM" },
            { icon: Sun, text: "Morning Decree", time: "Wed 06:00 AM" },
            { icon: Clock, text: "Noon Watch", time: "Fri 12:00 PM" },
            { icon: MapPin, text: "Ottawa Location", time: "Join us" },
          ].map((event, i) => (
            <div key={i} className="flex items-center gap-3">
              <event.icon className="w-8 h-8 text-[#cc5500]" />
              <div>
                <p className="font-medium">{event.text}</p>
                <p className="text-sm text-gray-300">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* How We Walk Together - Clean white bg, left list + right image collage */}
<section className="py-28 md:py-24 bg-gray-100 relative overflow-hidden">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-5xl md:text-5xl font-extrabold text-center mb-10 md:mb-10 text-[#0a0f1f]"
    >
      How We Walk Together
    </motion.h2>

    <div className="grid md:grid-cols-2  gap-12 md:gap-20 items-start">
      {/* Left: Listed items with icons */}
   <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, delay: 0.4 }}
  className="relative h-[250px] md:h-[400px] md:block"
>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-full h-full max-w-5xl">

      {/* Image 1 - Top-left horizontal (like open bible) */}
      <div className="absolute top-0 left-0 w-90 h-20 shadow-2xl z-10 hover:z-50 transition-all duration-500 hover:scale-110">
        <Image
          src="/pic1.jpg"
          alt="Open Bible in unity"
          width={440}
          height={300}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Image 2 - Mid-right horizontal (like church interior) */}
      <div className="absolute top-36 left-0 w-80 shadow-2xl z-20 hover:z-50 transition-all duration-500 hover:scale-110">
        <Image
          src="/pic2.jpg"
          alt="Church worship hall"
          width={380}
          height={280}
          className="rounded-2xl object-cover hidden md:block"
        />
      </div>

      {/* Image 3 - Bottom-left (like light bulb hands) */}
      <div className="absolute top-16 right-0 w-80 h-50 shadow-2xl z-10 hover:z-50 transition-all duration-500 hover:scale-110">
        <Image
          src="/pic3.jpg"
          alt="Hands holding spiritual light"
          width={380}
          height={400}
          className="rounded-2xl object-cover  "
        />
      </div>

      {/* Image 4 - Bottom-center small (like priest) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 shadow-2xl z-30 hover:z-50 transition-all duration-500 hover:scale-110">
        <Image
          src="/pic4.jpeg"
          alt="Apostle or disciple leading prayer"
          width={600}
          height={20}
          className="rounded-2xl object-contain hidden md:block"
        />
      </div>

    

    </div>
  </div>
</motion.div>  
 

      {/* Right: Smooth stacked collage of 5 small images */}
<div className="space-y-4 md:space-y-4">
        {[
          {
            icon: Users,
            title: "Build Covenant Connection",
            desc: "We don't just network; we build deep, relational trust that stands the test of time.",
            color: "#006400", // dark green
          },
          {
            icon: Flame,
            title: "Maintain the Altar of Disciples",
            desc: "We keep a perpetual fire of intercession, standing as watchmen over our families and cities.",
            color: "#8b0000", // dark red
          },
          {
            icon: HeartHandshake,
            title: "Activate Your Five-Fold Grace",
            desc: "We equip every disciple to function in their specific calling—Apostle, Prophet, Evangelist, Pastor, or Teacher.",
            color: "#cc5500", // dark orange
          },
          {
            icon: Briefcase,
            title: "Influence the Marketplace",
            desc: "We release disciples into their professional spheres to lead with a spirit of excellence.",
            color: "#006400",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.2, ease: "easeOut" }}
            className="flex items-start gap-6 group"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
              </div>
            </div>
            <div>
              <div className="w-24 h-1 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#0a0f1f]" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-md text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

   
    </div> 
  </div>
</section>





     



    {/* The Convergence - Matches sample style: white bg, circular icons, three cards */}
<section className="py-14 md:py-14 bg-white">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-900"
    >
      The Convergence
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-lg md:text-lg text-center  mx-auto mb-20 leading-relaxed text-gray-700"
    >
      Beyond our public altars lies The Convergence. This is the sacred space where the Sons and Daughters of Meeting Point Ministry gather in One Accord. It is more than a meeting; it is a spiritual alignment of like-minded disciples who carry the weight of the ministry’s mandate.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
      {[
    {
      Icon: Bird,
      title: "Spiritual Alignment",
      desc: "Deepening our roots as a family of disciples.",
    },
    {
      Icon: BookOpen,
      title: "Five-Fold Synergy",
      desc: "Where Apostles, Prophets, Evangelists, Pastors, and Teachers converge to share strategy and strength.",
    },
    {
      Icon: Flame,
      title: "Kingdom Legacy",
      desc: "Mentorship and fathering/mothering for the next generation of spiritual leaders.",
    },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.2 }}
          whileHover={{ y: -12, transition: { duration: 0.4 } }}
          className="text-center group"
        >
          {/* Circular icon */}
          <div className="mx-auto mb-8 w-32 h-32 md:w-30 md:h-30 rounded-full bg-gradient-to-br from-orange-200 to-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
        <item.Icon className="w-16 h-16 md:w-16 md:h-16 text-orange-600 " strokeWidth={2.5} />
      </div>

          <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900">
            {item.title}
          </h3>

          <p className="text-lg md:text-lg text-gray-600 leading-relaxed mb-8">
            {item.desc}
          </p>

        
        </motion.div>
      ))}
    </div>

   
  </div>
</section>


<section className="py-14 md:py-4 bg-gradient-to-br from-[#8b0000] to-[#cc5500] text-white">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-4xl font-extrabold text-center mb-12"
    >
      Dunamis Army (Youth)
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl md:text-2xl font-bold mb-8 leading-tight">
          A New Breed of Disciples
        </p>
        <p className="text-md md:text-md leading-relaxed">
          The Dunamis Army is a generation of young disciples who refuse to settle. We are training the next wave of leaders to save Canada—city by city, soul by soul—through the power of the Holy Spirit.
        </p>

        <Link
          href="/dunamis"
          className="mt-10 inline-flex items-center bg-white text-[#cc5500] hover:bg-gray-100 font-bold py-5 px-12 rounded-full text-xl shadow-lg transition duration-500"
        >
          Join the Army <ArrowRight className="ml-4" />
        </Link>
      </motion.div>

      {/* Right: Images with overlay effect */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-6 relative"
      >
        <div className="relative">
          <Image
            src="/pic5.jpeg"
            alt="Energetic youth worship - Dunamis Army"
            width={800}
            height={1100}
            className="rounded-3xl shadow-2xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#cc5500]/40 to-transparent rounded-3xl" />
        </div>
        <div className="relative">
          <Image
            src="/pic6.jpeg"
            alt="Young disciples praising"
            width={800}
            height={1100}
            className="rounded-3xl shadow-2xl object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8b0000]/40 to-transparent rounded-3xl" />
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* WIN Section - Image collage with reveal */}
     <section className="py-14 md:py-14 bg-gradient-to-br from-[#f8f5f2] to-[#fffaf0]">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#006400]"
    >
      WIN - Women Inspired Network
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-xl md:text-3xl font-semibold text-center mb-12 text-[#cc5500] tracking-wide"
    >
      Professional Excellence. Spiritual Fire.
    </motion.p>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text + highlights */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="space-y-10"
      >
        <p className="text-xl md:text-xl leading-relaxed text-gray-700">
          WIN is a vibrant community of professional women—disciples who lead in law, medicine, aviation, and the arts. We provide the Covenant Connection needed to thrive in your industry while staying rooted in your calling.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {["Law", "Medicine", "Aviation", "Arts"].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#cc5500]"
            >
              <h4 className="text-xl font-bold text-[#006400]">{field}</h4>
              <p className="text-gray-600 mt-2">Leading with Kingdom authority</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: Image collage or hero */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-6"
      >
        <Image
          src="/pic7.jpg" // replace with real
          alt="Professional women networking WIN"
          width={600}
          height={800}
          className="rounded-3xl shadow-2xl object-cover"
        />
        <div className="space-y-6">
          <Image
            src="/pic8.jpg"
            alt="Women in discussion spiritual fire"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover"
          />
          <Image
            src="/pic9.jpeg"
            alt="Empowered women community WIN"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center mt-16"
    >
      <Link
        href="/win"
        className="inline-flex items-center bg-[#cc5500] hover:bg-[#b34700] text-white font-bold py-5 px-12 rounded-full text-xl shadow-lg transition duration-500"
      >
        Discover WIN <ArrowRight className="ml-4" />
      </Link>
    </motion.div>
  </div>
</section>



<section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0f1f] to-[#001122] relative overflow-hidden">
  {/* Subtle fire gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#8b0000]/30 via-transparent to-[#cc5500]/10 pointer-events-none" />

  <div className="container mx-auto px-3 md:px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 md:items-center">
      {/* Left: Text content */}
      <div className="text-center md:text-left space-y-6 md:space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-[#8b0000]"
        >
          The Altar — Daily Prayer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white italic"
        >
          "The fire must never go out."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-prose mx-auto md:mx-0"
        >
          Our Daily Prayer Altar is where disciples gather from across the globe to intercede. This is not a program; it is a lifestyle of persistent, insistent prayer that births the Five-Fold Ministry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/prayers"
            className="inline-flex items-center justify-center w-full md:w-auto bg-[#8b0000] hover:bg-[#6d0000] text-white font-bold py-4 px-10 rounded-lg text-xl shadow-xl transition duration-500"
          >
            Watch Our Videos <Flame className="ml-4 w-8 h-8" />
          </Link>
        </motion.div>
      </div>

      {/* Right: Video embed – now properly responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="w-full"
      >
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video bg-black/40">
          <YouTubeEmbed
            videoid="tsoQdXaNnQE"
            width={400}
            height={315}
            playlabel="Play Daily Prayer Altar Video"
            params="rel=0&modestbranding=1&showinfo=0"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>




      {/* Be a Part of The Mandate - Steps with stagger */}
      <section className="py-24 md:py-32 bg-white">
  <div className="container mx-auto px-6 text-left">

    <div className="md:flex flex-row space-y-6 space-x-6">
      
    <div>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-xl md:text-3xl font-extrabold mb-6 text-gray-900"
    >
      Become a part of something great
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-md md:text-md max-w-4xl mx-auto mb-16 leading-relaxed text-gray-700"
    >
      Your partnership fuels the infrastructure that connects disciples across Canada. By giving, you strengthen the Covenant Connection that allows the Body of Christ to function as one.
    </motion.p>
</div>

    <div className="grid md:grid-cols-3 gap-16 md:gap-6">
      {[
        {
          number: "1",
          title: "Join the Community",
          desc: "Enter the daily rhythm of prayer at our public Altar.",
          date: "Step 1",
        },
        {
          number: "2",
          title: "Walk as a Disciple",
          desc: "Engage with our networks (WIN/Youth) to grow in your specific calling.",
          date: "Step 2",
        },
        {
          number: "3",
          title: "Enter The Convergence",
          desc: "For those called to be Sons and Daughters of the ministry, join our specialized leadership gatherings.",
          date: "Step 3",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.4 } }}
          className="bg-white  rounded-2xl shadow-lg  hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <div className="relative pt-12 pb-8 px-8 text-left ">
            {/* Orange circle with number */}
            <div className="absolute top-0 left-20 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#cc5500] flex items-center justify-center shadow-md">
              <span className="text-white text-3xl font-bold">{item.number}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-6 text-lg">
              {item.desc}
            </p>

          </div>
        </motion.div>
      ))}
    </div>
</div>



    {/* Custom button + dropdown menu */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
      className="mt-20 max-w-md mx-auto"
    >
      <JoinDropdown />
    </motion.div>

   
  </div>
</section>

 {/* Small Partnership Slider at bottom */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-6 text-gray-700">
            Our Partners & Supporters
          </h3>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="max-w-5xl mx-auto"
          >
            {[
              "/part1.png",
              "/part2.jpg",
              // "/part3.png",
              // "/part4.png",
              // "/part5.png",
              // "/part6.png",
            ].map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-20 md:h-24">
                  <Image
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    width={140}
                    height={80}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
}