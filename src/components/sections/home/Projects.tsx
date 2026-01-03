"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  Code,
  Star,
  MessageSquare,
  TrendingUp,
  Eye,
  Shield,
  Building,
  FileText,
  Bot,
  Calendar,
  Users,
  Clock,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Database" | "Cloud" | "Tools";
}

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  images: string[];
  technologies: Technology[];
  year: string;
  client: string;
  featured: boolean;
  duration: string;
  teamSize: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Intelligent Customer Support AI",
    description:
      "Advanced conversational AI that handles 95% of customer inquiries with human-like responses.",
    fullDescription:
      "Developed a sophisticated AI-powered customer support system that revolutionized customer service operations. The system uses advanced NLP techniques and sentiment analysis to understand customer queries and provide contextual, human-like responses. Integrated with existing CRM systems and reduced response time by 80% while maintaining high customer satisfaction scores.",
    category: "Conversational AI",
    icon: MessageSquare,
    images: [],
    technologies: [
      { name: "GPT-4", category: "AI/ML" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "React", category: "Frontend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "Docker", category: "Tools" },
    ],
    year: "2024",
    client: "TechCorp Inc.",
    featured: true,
    duration: "6 months",
    teamSize: 5,
  },
  {
    id: 2,
    title: "Predictive Analytics Engine",
    description:
      "Machine learning system that forecasts market trends and customer behavior with 89% accuracy.",
    fullDescription:
      "Built a comprehensive predictive analytics platform that processes vast amounts of market data to forecast trends and customer behavior patterns. The system employs ensemble learning methods and real-time data processing to provide actionable insights for business decision-making. Successfully deployed across multiple business units with significant impact on revenue optimization.",
    category: "Machine Learning",
    icon: TrendingUp,
    images: [],
    technologies: [
      { name: "Python", category: "Backend" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "Apache Spark", category: "Tools" },
      { name: "Kafka", category: "Tools" },
      { name: "AWS", category: "Cloud" },
      { name: "Elasticsearch", category: "Database" },
      { name: "Grafana", category: "Tools" },
    ],
    year: "2024",
    client: "DataFlow Solutions",
    featured: true,
    duration: "8 months",
    teamSize: 7,
  },
  {
    id: 3,
    title: "Computer Vision Quality Control",
    description:
      "AI-powered visual inspection system that detects defects in manufacturing with superhuman precision.",
    fullDescription:
      "Engineered an advanced computer vision system for automated quality control in manufacturing processes. The system uses deep learning models trained on thousands of product images to identify defects with precision exceeding human inspectors. Integrated seamlessly with existing production lines and provides real-time quality metrics and alerts.",
    category: "Computer Vision",
    icon: Eye,
    images: [],
    technologies: [
      { name: "PyTorch", category: "AI/ML" },
      { name: "OpenCV", category: "AI/ML" },
      { name: "YOLO v8", category: "AI/ML" },
      { name: "FastAPI", category: "Backend" },
      { name: "Redis", category: "Database" },
      { name: "NVIDIA Triton", category: "Tools" },
      { name: "MLflow", category: "Tools" },
    ],
    year: "2024",
    client: "Manufacturing Co.",
    featured: false,
    duration: "4 months",
    teamSize: 4,
  },
  {
    id: 4,
    title: "HR Analytics Dashboard",
    description:
      "Interactive dashboard with key HR metrics like attrition rate, employee breakdown by education, age, and job role.",
    fullDescription:
      "This HR Analytics Dashboard provides real-time insights into employee data, including attrition rates, gender distribution, job roles, and salary breakdowns. Visualized through dynamic charts and graphs, it helps HR professionals identify patterns and make informed decisions. The dashboard covers various employee demographics such as education, age, salary range, and job role to assess the health of the organization.",
    category: "HR Analytics",
    icon: Shield,
    images: ["/images/hr_analysis.jpg"],
    technologies: [
      { name: "Power BI", category: "Tools" },
      { name: "DAX", category: "Tools" },
      { name: "SQL", category: "Database" },
    ],
    year: "2024",
    client: "TechCorp Inc.",
    featured: true,
    duration: "3 months",
    teamSize: 3,
  },
  {
    id: 5,
    title: "UK Company Data Filtering Service",
    description:
      "Real-time filtering service for Companies House data to identify newly formed companies and their details.",
    fullDescription:
      "Developed an intelligent data filtering platform that processes Companies House information in near real-time. The service filters newly registered UK companies by geographic area and industry, while automatically identifying and excluding virtual address providers to ensure accurate physical mailing addresses. The system delivers curated company data including names, addresses, and director information within 24 hours of company formation, saving businesses time and resources on targeted outreach.",
    category: "Data Processing & Analytics",
    icon: Building,
    images: ["/images/localnewbusiness.png"],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "MUI (Material-UI)", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "Companies House API", category: "Backend" },
      { name: "Real-time Data Processing", category: "AI/ML" },
      { name: "Address Validation", category: "Database" },
    ],
    year: "2024",
    client: "Various UK Businesses",
    featured: true,
    duration: "4 months",
    teamSize: 3,
  },
  {
    id: 6,
    title: "AI-Powered Resume Builder",
    description:
      "Intelligent resume platform that generates tailored content and optimizes resumes for specific job targets using AI.",
    fullDescription:
      "Developed an advanced resume building platform that leverages AI to transform basic user information into professionally tailored resumes. The system analyzes job descriptions and user profiles to generate optimized summaries, experience bullet points, and skill sections. Features include AI-powered content generation, real-time editing, multiple template options, and ATS optimization to ensure resumes stand out to both recruiters and automated systems.",
    category: "AI Content Generation",
    icon: FileText,
    images: ["/images/ai-resume.png", "/images/ai-resume-two.png"],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "OpenAI GPT-4", category: "AI/ML" },
      { name: "MongoDB", category: "Database" },
      { name: "AWS S3", category: "Cloud" },
      { name: "JWT Auth", category: "Tools" },
    ],
    year: "2024",
    client: "CareerTech Solutions",
    featured: true,
    duration: "5 months",
    teamSize: 4,
  },
  {
    id: 7,
    title: "Smart Job Application Assistant",
    description:
      "AI-driven platform that automates job applications and tailors resumes for each specific job posting.",
    fullDescription:
      "Built an intelligent job application system that uses AI to analyze job descriptions and automatically customize resumes and cover letters for each application. The platform integrates with major job boards, tracks application status, and provides analytics on application performance. Advanced features include sentiment analysis for job descriptions, automated A/B testing of resume versions, and personalized application strategies based on industry trends.",
    category: "Career Automation",
    icon: Bot,
    images: [
      "/images/cv-sorter.png",
      "/images/cv-sorter-two.png",
      "/images/cv-sorter-three.png.jpg",
    ],
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "LangChain", category: "AI/ML" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "Docker", category: "Tools" },
      { name: "Chrome Extension", category: "Tools" },
    ],
    year: "2024",
    client: "JobSeeker Pro",
    featured: true,
    duration: "6 months",
    teamSize: 5,
  },
];

const getTechCategoryColor = (category: Technology["category"]) => {
  const colors = {
    Frontend: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "AI/ML": "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Database: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Cloud: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    Tools: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  return colors[category];
};

const getTechCategoryDot = (category: Technology["category"]) => {
  const colors = {
    Frontend: "bg-cyan-400",
    Backend: "bg-emerald-400",
    "AI/ML": "bg-violet-400",
    Database: "bg-amber-400",
    Cloud: "bg-sky-400",
    Tools: "bg-slate-400",
  };
  return colors[category];
};

export default function ProjectsCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextImage = (projectId: number) => {
    setCurrentImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId);
      if (!project) return prev;
      const currentIndex = prev[projectId] || 0;
      const nextIndex = (currentIndex + 1) % project.images.length;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const prevImage = (projectId: number) => {
    setCurrentImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId);
      if (!project) return prev;
      const currentIndex = prev[projectId] || 0;
      const prevIndex =
        (currentIndex - 1 + project.images.length) % project.images.length;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg mb-6">
            <Code className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-300 text-sm uppercase tracking-wider">
              Our Projects
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforming Ideas Into<span> </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of AI-powered applications, data platforms,
            and custom software solutions that drive real business results.
          </p>
        </div>

        {/* Projects Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={projects.length > 1}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-black/20">
                  <div className="grid lg:grid-cols-2 min-h-[550px]">
                    {/* Left - Image Section */}
                    <div className="relative bg-gradient-to-br from-slate-900/80 to-indigo-950/50 flex items-center justify-center p-6 sm:p-8 lg:p-10">
                      {/* Decorative elements */}
                      <div className="absolute top-4 left-4 w-20 h-20 border border-indigo-500/20 rounded-full" />
                      <div className="absolute bottom-4 right-4 w-32 h-32 border border-blue-500/10 rounded-full" />

                      <div className="relative w-full max-w-lg">
                        {project.images.length > 0 ? (
                          <div className="relative group">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
                              <Image
                                src={
                                  project.images[
                                    currentImageIndex[project.id] || 0
                                  ]
                                }
                                alt={`${project.title} - Image ${
                                  (currentImageIndex[project.id] || 0) + 1
                                }`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />

                              {/* Image Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Image Navigation */}
                            {project.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => prevImage(project.id)}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 border border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                                >
                                  <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                                <button
                                  onClick={() => nextImage(project.id)}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 border border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                                >
                                  <ChevronRight className="w-5 h-5 text-white" />
                                </button>

                                {/* Image Dots */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                  {project.images.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() =>
                                        setCurrentImageIndex((prev) => ({
                                          ...prev,
                                          [project.id]: index,
                                        }))
                                      }
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        (currentImageIndex[project.id] || 0) ===
                                        index
                                          ? "bg-indigo-400 w-6"
                                          : "bg-slate-600 hover:bg-slate-500"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ) : (
                          /* Empty State */
                          <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600/20 to-blue-600/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-600/30 to-blue-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/30">
                                <project.icon className="w-10 h-10 text-indigo-400" />
                              </div>
                              <p className="text-slate-400 text-sm">
                                Visual preview coming soon
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right - Content Section */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                      {/* Category & Featured Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium border border-indigo-500/20">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-400 rounded-lg text-sm font-medium border border-amber-500/20">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6 line-clamp-4 sm:line-clamp-none">
                        {project.fullDescription}
                      </p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                            <Calendar className="w-3.5 h-3.5" />
                            Year
                          </div>
                          <div className="text-white font-semibold">
                            {project.year}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            Duration
                          </div>
                          <div className="text-white font-semibold">
                            {project.duration}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                            <Users className="w-3.5 h-3.5" />
                            Team
                          </div>
                          <div className="text-white font-semibold">
                            {project.teamSize} experts
                          </div>
                        </div>
                        <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                          <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            Client
                          </div>
                          <div className="text-white font-semibold text-sm truncate">
                            {project.client}
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 8)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${getTechCategoryColor(
                                  tech.category
                                )}`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${getTechCategoryDot(
                                    tech.category
                                  )}`}
                                />
                                {tech.name}
                              </span>
                            ))}
                          {project.technologies.length > 8 && (
                            <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-700/30 text-slate-400 border border-slate-600/30">
                              +{project.technologies.length - 8} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 shadow-lg hover:scale-110">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 shadow-lg hover:scale-110">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center gap-2 mt-10" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: rgb(71, 85, 105);
          border-radius: 9999px;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgb(100, 116, 139);
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(
            to right,
            rgb(99, 102, 241),
            rgb(59, 130, 246)
          );
          width: 28px;
        }

        .projects-swiper .swiper-slide {
          height: auto;
        }

        .projects-swiper {
          padding: 10px;
        }
      `}</style>
    </section>
  );
}
