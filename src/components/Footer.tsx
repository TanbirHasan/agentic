"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Solutions", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud & DevOps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Data Analytics", href: "#services" },
  ];

  const company = [
    { name: "About Us", href: "#about-us" },
    { name: "Our Projects", href: "#projects" },
    { name: "Technology Stack", href: "#tech-stack" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[150px]" />

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section - CTA Banner */}
        <div className="border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready to build something{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    amazing?
                  </span>
                </h3>
                <p className="text-slate-400">
                  Let&apos;s discuss your project and bring your ideas to life.
                </p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section - Links & Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/logo3.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                A full-service technology agency building AI-powered solutions,
                custom software, and digital experiences that drive growth.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{service.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+00152885253"
                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Call us</p>
                      <p className="text-sm">+ (00) 152 885 253</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@domainname.com"
                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email us</p>
                      <p className="text-sm">info@domainname.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Visit us</p>
                      <p className="text-sm">
                        123 Lorem Street, Suite 5B
                        <br />
                        London, UK SW1A 1AA
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm text-center sm:text-left">
                © {currentYear} Your Agency Name. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
