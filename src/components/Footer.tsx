"use client";

import { motion } from "framer-motion";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  const socials = [
    {
      icon: <IconBrandInstagram className="w-5 h-5" />,
      href: "#", // ← paste first Instagram URL here
      label: "Instagram",
      hoverColor: "#E1306C",
    },
    {
      icon: <IconBrandInstagram className="w-5 h-5" />,
      href: "#", // ← paste second Instagram URL here
      label: "Instagram 2",
      hoverColor: "#E1306C",
    },
  ];

  return (
    <footer id="connect" className="relative border-t border-glass-border mt-12">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Tag */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-black tracking-tight mb-2"
        >
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #22d3ee, #a855f7)",
            }}
          >
            njdftw
          </span>
        </motion.h2>
        <p className="text-slate-600 text-sm mb-8">
          Let&apos;s squad up.
        </p>

        {/* Social icons */}
        <div className="flex gap-3 mb-10">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              aria-label={s.label}
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 transition-all duration-300 bg-white/[0.03] border border-white/[0.06]"
              style={
                {
                  "--hover-color": s.hoverColor,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = s.hoverColor;
                (e.currentTarget as HTMLElement).style.borderColor =
                  s.hoverColor + "40";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${s.hoverColor}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

        <p className="text-slate-700 text-xs text-center">
          © {new Date().getFullYear()} njdftw. Designed for the grind.
        </p>
      </div>
    </footer>
  );
}
