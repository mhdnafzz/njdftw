"use client";

import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutMe() {


  return (
    <section id="about" className="py-28 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs font-semibold text-neon-cyan uppercase tracking-[0.3em] mb-3">
            Player Profile
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            About <span className="text-neon-purple">Me</span>
          </h2>
          <div className="section-title-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bio — wide card */}
          <motion.div variants={fadeUp} className="lg:col-span-3 glass-card p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white">About Me</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              My name is Muhammed najad. I am from Kerala, India. My dream is to achieve
              something with this game like &apos;Raistar&apos; and other big content creators.
              Hope you all support — all I need is your love and support. Watch my gameplay
              and rate it!
            </p>

          </motion.div>

          {/* Game rotation — narrow card */}
          <motion.div variants={fadeUp} className="lg:col-span-2 glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white">Main Rotation</h3>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all">
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-neon-cyan transition-colors">
                    Free Fire Battleground
                  </p>
                  <p className="text-slate-500 text-xs">1v4 Specialist</p>
                </div>
                <span className="text-[11px] font-bold text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-full">
                  Grandmaster
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-2">
                Developed by 111dots Studio and published by Garena, Free Fire is a high-octane
                mobile battle royale that has become a global phenomenon since its 2017 release.
                Unlike other games in the genre, it focuses on fast-paced, 10-minute matches
                where 50 players drop onto an island to scavenge for loot and fight to be the
                last one standing. It features a unique character system where each hero has
                special active or passive abilities—like increased sprinting speed or
                healing—that can be mixed and matched using presets. Key gameplay mechanics
                include the use of Gloo Walls for instant cover and a ranking system that ranges
                from Bronze to Grandmaster. With the release of Free Fire MAX, players can also
                experience enhanced graphics and smoother performance while staying connected to
                the original community through FireLink technology.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
