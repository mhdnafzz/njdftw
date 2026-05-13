"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Loadout() {
  const specs = [
    { label: "CPU", value: "AMD Ryzen 5 5600H" },
    { label: "RAM", value: "8GB DDR4 RAM" },
    { label: "SSD", value: "512 GB NVMe Gen4 SSD" },
    { label: "GPU", value: "AMD Radeon RX 6500M" },
  ];

  return (
    <section id="loadout" className="py-28 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs font-semibold text-neon-cyan uppercase tracking-[0.3em] mb-3">
            Gear &amp; Setup
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-neon-purple">Loadout</span>
          </h2>
          <div className="section-title-line mt-4" />
        </motion.div>

        {/* Centered single card */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass-card p-10 w-full max-w-md group"
          >
            {/* Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: "#22d3ee10", color: "#22d3ee" }}
              >
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">PC Build</h3>
            </div>

            {/* Specs */}
            <ul className="space-y-4">
              {specs.map((spec, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-white/[0.04] pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">
                    {spec.label}
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
