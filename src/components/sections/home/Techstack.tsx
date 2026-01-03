"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Cpu,
  Globe,
  Workflow,
  BarChart3,
  Container,
  Palette,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Technology {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  gradient: string;
  bgColor: string;
}

const technologies: Technology[] = [
  {
    name: "Next.js",
    description:
      "The React framework for production—featuring server-side rendering, static generation, and seamless API routes for blazing-fast web apps.",
    icon: Layers,
    category: "Frontend",
    gradient: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-500/10",
  },
  {
    name: "React",
    description:
      "A powerful JavaScript library for building fast, scalable, and highly interactive user interfaces using reusable components.",
    icon: Code2,
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "Django",
    description:
      "A robust Python-based backend framework designed for rapid development, strong security, and long-term maintainability.",
    icon: Server,
    category: "Backend",
    gradient: "from-emerald-600 to-teal-700",
    bgColor: "bg-emerald-500/10",
  },
  {
    name: "Node.js",
    description:
      "A high-performance JavaScript runtime built on Chrome's V8 engine, ideal for scalable and real-time backend services.",
    icon: Server,
    category: "Backend",
    gradient: "from-green-600 to-emerald-700",
    bgColor: "bg-green-500/10",
  },
  {
    name: "TensorFlow",
    description:
      "An industry-leading open-source framework for building, training, and deploying advanced machine learning and AI models.",
    icon: Cpu,
    category: "AI/ML",
    gradient: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "PyTorch",
    description:
      "A flexible deep learning framework favored for research and production, enabling dynamic computation and neural network development.",
    icon: Sparkles,
    category: "AI/ML",
    gradient: "from-red-500 to-orange-600",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Apache Spark",
    description:
      "A unified analytics engine optimized for large-scale data processing, real-time analytics, and machine learning workloads.",
    icon: BarChart3,
    category: "Data",
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-500/10",
  },
  {
    name: "Airflow",
    description:
      "A workflow orchestration platform for scheduling, automating, and monitoring complex data pipelines with reliability.",
    icon: Workflow,
    category: "Data",
    gradient: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-500/10",
  },
  {
    name: "Kubernetes",
    description:
      "A container orchestration platform that automates application deployment, scaling, and operations across cloud environments.",
    icon: Container,
    category: "DevOps",
    gradient: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "WordPress",
    description:
      "A flexible and widely adopted content management system used to build dynamic, SEO-friendly, and content-driven websites.",
    icon: Globe,
    category: "CMS",
    gradient: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
  },
  {
    name: "Figma",
    description:
      "A collaborative UI/UX design platform for creating intuitive interfaces, interactive prototypes, and scalable design systems.",
    icon: Palette,
    category: "Design",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
  },
  {
    name: "MongoDB",
    description:
      "A flexible NoSQL database designed for modern applications, offering powerful querying, scalability, and document-based storage.",
    icon: Server,
    category: "Backend",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
];

const categories = [
  { name: "All", count: technologies.length },
  {
    name: "Frontend",
    count: technologies.filter((t) => t.category === "Frontend").length,
  },
  {
    name: "Backend",
    count: technologies.filter((t) => t.category === "Backend").length,
  },
  {
    name: "AI/ML",
    count: technologies.filter((t) => t.category === "AI/ML").length,
  },
  {
    name: "Data",
    count: technologies.filter((t) => t.category === "Data").length,
  },
  {
    name: "DevOps",
    count: technologies.filter((t) => t.category === "DevOps").length,
  },
  {
    name: "CMS",
    count: technologies.filter((t) => t.category === "CMS").length,
  },
  {
    name: "Design",
    count: technologies.filter((t) => t.category === "Design").length,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TechnologyStack() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"
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
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg mb-6"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-300 text-sm uppercase tracking-wider">
              Technology Stack
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Built with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              modern & proven<span> </span>
            </span>
            <br className="hidden sm:block" />
            technologies
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Our solutions are powered by a carefully selected stack of modern
            technologies, ensuring performance, scalability, and reliability.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={filterVariants}
        >
          {categories
            .filter((cat) => cat.count > 0)
            .map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-slate-800/40 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/50 hover:border-slate-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
              >
                <span className="flex items-center gap-2">
                  {category.name}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-md transition-colors ${
                      selectedCategory === category.name
                        ? "bg-white/20 text-white"
                        : "bg-slate-700/50 text-slate-500 group-hover:text-slate-400"
                    }`}
                  >
                    {category.count}
                  </span>
                </span>
              </motion.button>
            ))}
        </motion.div>

        {/* Technology Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={statsVariants}
        >
          {[
            { label: "Technologies", value: "12+" },
            { label: "Frameworks", value: "8+" },
            { label: "Cloud Platforms", value: "5+" },
            { label: "Years Combined Exp.", value: "25+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              className="text-center p-4 bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/30"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(99, 102, 241, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechCard({ tech, index }: { tech: Technology; index: number }) {
  const Icon = tech.icon;

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <motion.div
        className="relative h-full min-h-[200px] bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-5 overflow-hidden"
        whileHover={{
          y: -8,
          borderColor: "rgba(99, 102, 241, 0.5)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Background hover effect */}
        <motion.div
          className={`absolute inset-0 ${tech.bgColor}`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`p-3 bg-gradient-to-br ${tech.gradient} rounded-xl shadow-lg`}
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
            <motion.span
              className="px-2.5 py-1 bg-slate-700/40 backdrop-blur-sm text-slate-400 text-xs font-medium rounded-lg border border-slate-600/30"
              whileHover={{ scale: 1.05 }}
            >
              {tech.category}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
            {tech.name}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed flex-grow group-hover:text-slate-300 transition-colors duration-300">
            {tech.description}
          </p>
        </div>

        {/* Decorative corner gradient */}
        <motion.div
          className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${tech.gradient} rounded-full`}
          initial={{ opacity: 0.05 }}
          whileHover={{ opacity: 0.15, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
