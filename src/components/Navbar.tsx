"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about-us" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "AI Solutions", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-black/10 border-b border-slate-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center gap-3 group">
              <div className="relative w-24 h-12 sm:w-28 sm:h-14">
                <Image
                  src="/images/logo3.png"
                  alt="The Agentic Hub"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href + link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${
                      activeDropdown === link.label
                        ? "text-white bg-slate-800/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                        activeDropdown === link.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-xl shadow-black/20 p-2 min-w-[200px]">
                        {link.dropdown.map((item, index) => (
                          <Link
                            key={item.href + index}
                            href={item.href}
                            onClick={(e) => handleScrollClick(e, item.href)}
                            className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://calendly.com/zenfro236/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Schedule a Meeting
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-white transition-all duration-300 hover:bg-slate-700/50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-l border-slate-800/50 shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800/50">
            <div className="relative w-24 h-10">
              <Image
                src="/images/logo3.png"
                alt="The Agentic Hub"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-white hover:bg-slate-700/50 transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.href + link.label}
                  className={`transition-all duration-500 ${
                    menuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === link.label
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {link.dropdown.map((item, subIndex) => (
                            <Link
                              key={item.href + subIndex}
                              href={item.href}
                              onClick={(e) => handleScrollClick(e, item.href)}
                              className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleScrollClick(e, link.href)}
                      className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div
              className={`mt-8 transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <Link
                href="https://calendly.com/info@theagentichub.com/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-indigo-500/20"
              >
                <Sparkles className="w-4 h-4" />
                Schedule a Meeting
              </Link>

              <p className="text-center text-slate-500 text-xs mt-4">
                Free consultation • No commitment
              </p>
            </div>

            {/* Mobile Footer Info */}
            <div
              className={`mt-8 pt-8 border-t border-slate-800/50 transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-slate-500 text-sm text-center">
                Building digital products that drive growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
