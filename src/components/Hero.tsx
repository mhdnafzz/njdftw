"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            animation: "glowPulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            animation: "glowPulse 8s ease-in-out infinite 2s",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Stacked text mark ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center leading-none select-none"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* NJD — gradient headline */}
        <h1
          className="font-black tracking-tighter text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(6rem, 22vw, 18rem)",
            lineHeight: 0.9,
            backgroundImage: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 5s ease infinite",
          }}
        >
          NJD
        </h1>

        {/* ftw — solid white subtitle */}
        <h2
          className="font-black tracking-tighter text-slate-200"
          style={{
            fontSize: "clamp(2.5rem, 9vw, 7rem)",
            lineHeight: 1,
            marginTop: "-0.05em",
          }}
        >
          ftw
        </h2>
      </motion.div>
    </section>
  );
}
