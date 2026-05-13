"use client";

import { motion } from "framer-motion";

const clips = [
  { src: "/videos/clutch-1.mp4", label: "Clutch Clip 1" },
  { src: "/videos/clutch-2.mp4", label: "Clutch Clip 2" },
  { src: "/videos/clutch-3.mp4", label: "Clutch Clip 3" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function TheVault() {
  return (
    <section id="vault" className="py-28 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        {/* Big headline */}
        <motion.h2
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-center mb-14"
        >
          Clutch{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
            Moments
          </span>
        </motion.h2>

        {/* Video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {clips.map((clip) => (
            <motion.div
              key={clip.src}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden aspect-video glass-card"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                controls
                preload="metadata"
                playsInline
                aria-label={clip.label}
              >
                <source src={clip.src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

