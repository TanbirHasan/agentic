"use client";

import React from "react";
import { Brain, Cpu, Cloud, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative min-h-screen pt-20 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-indigo-600/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-slate-700/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-700/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Build. Scale. Automate.
              <br />
              <motion.span
                className="bg-gradient-to-r from-indigo-400 via-blue-500 to-slate-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                We turn ideas into intelligent digital products
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are a full-stack technology agency specializing in AI
              solutions, modern web applications, scalable backend systems, and
              cloud infrastructure. From MVP to enterprise — we design, build,
              and deploy products that grow businesses.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          {/* <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all">
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-xl border border-slate-600 text-slate-300 hover:border-indigo-500 hover:text-white transition-all">
                Book Free Consultation
              </button>
            </div>
          </div> */}

          {/* Services */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "AI & Data Solutions",
                  desc: "Chatbots, ML models, predictive analytics, and data-driven systems.",
                },
                {
                  icon: Rocket,
                  title: "Frontend Engineering",
                  desc: "High-performance apps using Next.js & React with modern UX.",
                },
                {
                  icon: Cpu,
                  title: "Backend & APIs",
                  desc: "Secure, scalable systems built with Django, Node, and MERN.",
                },
                {
                  icon: Cloud,
                  title: "DevOps & Cloud",
                  desc: "CI/CD pipelines, cloud deployment, monitoring, and scaling.",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-indigo-600/50 transition-colors duration-300 hover:bg-slate-800/50"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            className="mt-14 text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Trusted by startups, founders, and growing teams worldwide 🚀
          </motion.p>
        </div>
      </div>
    </div>
  );
}
