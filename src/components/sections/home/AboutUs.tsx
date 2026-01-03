"use client";

import React from "react";
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Palette,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Team Role Interface
interface TeamRole {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const teamRoles: TeamRole[] = [
  {
    icon: Code2,
    title: "Frontend Engineers",
    description:
      "Crafting lightning-fast, accessible interfaces with Next.js, React, and TypeScript that users love.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Full-Stack & Backend",
    description:
      "Architecting robust APIs and systems with Django, Node.js, and the MERN stack for enterprise-grade performance.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Brain,
    title: "AI & ML Engineers",
    description:
      "Building intelligent solutions—chatbots, recommendation engines, and custom ML models that drive business value.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Data Analysts",
    description:
      "Transforming raw data into actionable insights with advanced analytics, visualization, and predictive modeling.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "DevOps Engineers",
    description:
      "Ensuring reliability and scale with CI/CD pipelines, cloud infrastructure, and 24/7 monitoring systems.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    description:
      "Creating intuitive, conversion-focused experiences through user research, prototyping, and pixel-perfect design.",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden"
    >
      {/* Background Grid - Smaller on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      {/* Animated Glow Orbs - Smaller and repositioned on mobile */}
      <motion.div
        className="absolute top-5 right-5 sm:top-10 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-indigo-700/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-slate-700/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 mb-3 sm:mb-4 md:mb-6 lg:mb-8 bg-slate-800/30 backdrop-blur-sm rounded-md sm:rounded-lg border border-slate-700/50"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-indigo-400" />
            <span className="text-[10px] sm:text-xs md:text-sm text-slate-300 uppercase tracking-wider">
              About Us
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight tracking-tight"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-slate-400 bg-clip-text text-transparent">
              Digital Products
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            That Drive Growth
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-xl text-slate-400 leading-relaxed px-2 sm:px-0"
          >
            A full-service technology agency combining design, engineering, and
            AI to transform your ideas into market-leading digital solutions.
          </motion.p>
        </motion.div>

        {/* Main Content - Stack on mobile/tablet, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-stretch lg:items-center">
          {/* Story Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full order-1"
          >
            <motion.div
              className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-slate-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-700/50 overflow-hidden h-full"
              whileHover={{
                borderColor: "rgba(99, 102, 241, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Glow */}
              <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 md:-top-20 md:-right-20 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl" />

              <div className="relative">
                {/* Our Story Label */}
                <motion.div
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4 lg:mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 md:w-10 md:h-1 lg:w-12 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full" />
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                    Our Story
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 leading-snug"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  From Vision to Reality—Your Technology Partner
                </motion.h3>

                {/* Paragraphs */}
                <motion.p
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed mb-2 sm:mb-3 md:mb-4 lg:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  We&apos;re a collective of passionate engineers, designers,
                  and strategists who believe great technology should be
                  accessible to every ambitious business.
                </motion.p>

                <motion.p
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Whether you&apos;re launching an MVP, scaling infrastructure,
                  or integrating AI into your workflow—we handle the entire
                  journey from concept to deployment.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold rounded-md sm:rounded-lg md:rounded-xl shadow-lg shadow-indigo-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let&apos;s Build Together</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Team Roles Section */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full order-2"
          >
            {/* Desktop - Vertical Swiper */}
            <div className="hidden lg:block h-[440px] xl:h-[480px] overflow-hidden rounded-2xl">
              <Swiper
                direction="vertical"
                slidesPerView={4}
                spaceBetween={12}
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="h-full"
              >
                {teamRoles.map((role, index) => (
                  <SwiperSlide key={index} className="!h-[115px]">
                    <TeamRoleCardDesktop role={role} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Tablet - 2 cards visible */}
            <div className="hidden sm:block lg:hidden">
              <Swiper
                slidesPerView={2}
                spaceBetween={12}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "about-swiper-bullet",
                  bulletActiveClass: "about-swiper-bullet-active",
                }}
                modules={[Autoplay, Pagination]}
                className="pb-8"
              >
                {teamRoles.map((role, index) => (
                  <SwiperSlide key={index}>
                    <TeamRoleCardTablet role={role} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Mobile - Single full card */}
            <div className="block sm:hidden">
              <Swiper
                slidesPerView={1}
                spaceBetween={12}
                loop
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="!overflow-visible"
              >
                {teamRoles.map((role, index) => (
                  <SwiperSlide key={index}>
                    <TeamRoleCardMobile role={role} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Swiper Pagination Styles */}
      <style jsx global>{`
        .about-swiper-bullet {
          width: 6px;
          height: 6px;
          background: rgb(71, 85, 105);
          border-radius: 50%;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          margin: 0 3px !important;
        }

        .about-swiper-bullet:hover {
          background: rgb(100, 116, 139);
        }

        .about-swiper-bullet-active {
          background: linear-gradient(
            to right,
            rgb(99, 102, 241),
            rgb(59, 130, 246)
          );
          width: 16px;
          border-radius: 3px;
        }

        @media (min-width: 640px) {
          .about-swiper-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
          .about-swiper-bullet-active {
            width: 20px;
            border-radius: 4px;
          }
        }
      `}</style>
    </section>
  );
}

// Desktop Card
function TeamRoleCardDesktop({ role }: { role: TeamRole }) {
  const Icon = role.icon;

  return (
    <motion.div
      className="h-[97px] px-4 py-3 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-center cursor-pointer"
      whileHover={{
        borderColor: "rgba(99, 102, 241, 0.4)",
        backgroundColor: "rgba(30, 41, 59, 0.6)",
        y: -2,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4 w-full">
        <motion.div
          className={`flex-shrink-0 p-2.5 bg-gradient-to-br ${role.gradient} rounded-xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-white mb-0.5">{role.title}</h3>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
            {role.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Tablet Card
function TeamRoleCardTablet({ role }: { role: TeamRole }) {
  const Icon = role.icon;

  return (
    <motion.div
      className="p-3 sm:p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 cursor-pointer h-full min-h-[120px]"
      whileHover={{
        borderColor: "rgba(99, 102, 241, 0.4)",
        backgroundColor: "rgba(30, 41, 59, 0.6)",
        y: -4,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center gap-2">
          <motion.div
            className={`flex-shrink-0 p-2 bg-gradient-to-br ${role.gradient} rounded-lg`}
          >
            <Icon className="w-4 h-4 text-white" />
          </motion.div>
          <h3 className="text-xs sm:text-sm font-bold text-white">
            {role.title}
          </h3>
        </div>
        <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed line-clamp-3">
          {role.description}
        </p>
      </div>
    </motion.div>
  );
}

// Mobile Card
function TeamRoleCardMobile({ role }: { role: TeamRole }) {
  const Icon = role.icon;

  return (
    <motion.div
      className="p-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700/50 cursor-pointer"
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-2.5">
        <motion.div
          className={`flex-shrink-0 p-2 bg-gradient-to-br ${role.gradient} rounded-lg`}
        >
          <Icon className="w-4 h-4 text-white" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-bold text-white mb-1">{role.title}</h3>
          <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-3">
            {role.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
