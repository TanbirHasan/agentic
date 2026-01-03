"use client";

import React from "react";
import {
  Brain,
  Sparkles,
  Code,
  Shield,
  Cloud,
  Smartphone,
  BarChart3,
  Palette,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgGradient: string;
  iconBg: string;
}

const services: Service[] = [
  {
    title: "AI Strategy & Automation",
    description:
      "We identify high-impact AI opportunities and build intelligent systems that automate workflows, reduce costs, and improve decision-making.",
    icon: Brain,
    color: "text-indigo-400",
    bgGradient: "from-slate-800/50 to-indigo-900/30",
    iconBg: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Custom AI Solutions",
    description:
      "From AI chatbots to machine learning models, we design and deploy tailored AI solutions built around your real business needs.",
    icon: Sparkles,
    color: "text-blue-400",
    bgGradient: "from-slate-800/50 to-blue-900/30",
    iconBg: "from-blue-600 to-blue-800",
  },
  {
    title: "Full-Stack Development",
    description:
      "We build scalable web and backend systems using Next.js, React, Django, and MERN—optimized for performance and growth.",
    icon: Code,
    color: "text-emerald-400",
    bgGradient: "from-slate-800/50 to-emerald-900/30",
    iconBg: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, CI/CD pipelines, monitoring, and scalable infrastructure to ensure reliability from day one.",
    icon: Cloud,
    color: "text-cyan-400",
    bgGradient: "from-slate-800/50 to-cyan-900/30",
    iconBg: "from-cyan-600 to-cyan-800",
  },
  {
    title: "Data Analytics & BI",
    description:
      "We transform raw data into actionable insights through dashboards, analytics pipelines, and business intelligence systems.",
    icon: BarChart3,
    color: "text-purple-400",
    bgGradient: "from-slate-800/50 to-purple-900/30",
    iconBg: "from-purple-600 to-purple-800",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "User-centered design focused on clarity, usability, and conversion—ensuring products people actually enjoy using.",
    icon: Palette,
    color: "text-pink-400",
    bgGradient: "from-slate-800/50 to-pink-900/30",
    iconBg: "from-pink-600 to-pink-800",
  },
  {
    title: "Security & Reliability",
    description:
      "Secure architectures, data protection, access control, and system hardening to keep your product stable and compliant.",
    icon: Shield,
    color: "text-red-400",
    bgGradient: "from-slate-800/50 to-red-900/30",
    iconBg: "from-red-600 to-red-800",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps with seamless backend integration and performance-driven architecture.",
    icon: Smartphone,
    color: "text-orange-400",
    bgGradient: "from-slate-800/50 to-orange-900/30",
    iconBg: "from-orange-600 to-orange-800",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
      id="services"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Static glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-700/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-700/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-lg mb-6 backdrop-blur-sm">
            <span className="text-slate-300 text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive technology services for
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            your digital{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              transformation
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From AI-powered solutions to custom software development, we provide
            end-to-end technology services to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group relative">
      <div
        className={`relative h-full min-h-[220px] bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1`}
      >
        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed flex-grow">
            {service.description}
          </p>
        </div>

        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.iconBg} opacity-5 rounded-bl-full`}
        />
      </div>
    </div>
  );
}
