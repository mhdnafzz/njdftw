"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Vault", href: "#vault" },
    { label: "Loadout", href: "#loadout" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-base/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col gap-0.5 group">
          {/* Top row: image + name */}
          <div className="flex items-center gap-2.5">
            <img
              src="/brand_logo.png"
              alt="njdftw brand logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-neon-cyan transition-colors">
              njdftw
            </span>
          </div>
          {/* UID badge */}
          <div className="flex items-center pl-[2.625rem]">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-widest text-slate-400 border"
              style={{
                borderColor: "rgba(34,211,238,0.25)",
                boxShadow: "0 0 6px rgba(34,211,238,0.12)",
                letterSpacing: "0.08em",
              }}
            >
              {/* Tiny flame icon */}
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-neon-cyan opacity-80 shrink-0"
              >
                <path d="M12 2C8.5 7 6 9.5 6 13a6 6 0 0012 0c0-3.5-2.5-6-6-11z" />
              </svg>
              UID: 288673346
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-neon-cyan transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-base/95 backdrop-blur-xl border-b border-glass-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-400 hover:text-neon-cyan transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
