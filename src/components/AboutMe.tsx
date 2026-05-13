"use client";

import { motion } from "framer-motion";
import { Crosshair, Zap, Flame, Target, Swords } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutMe() {
  const games = [
    { name: "Valorant", role: "Duelist / IGL", rank: "Immortal 3" },
    { name: "Apex Legends", role: "Main Wraith", rank: "Master" },
    { name: "League of Legends", role: "Mid / Jungle", rank: "Diamond II" },
  ];

  const traits = [
    { icon: <Flame className="w-5 h-5" />, label: "Aggressive" },
    { icon: <Target className="w-5 h-5" />, label: "Aim-centric" },
    { icon: <Swords className="w-5 h-5" />, label: "Shotcaller" },
    { icon: <Zap className="w-5 h-5" />, label: "Clutch Player" },
  ];

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
              <h3 className="text-xl font-bold text-white">The Story So Far</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Competitive FPS & MOBA player who lives for high-stakes ranked matches and deep
              theory-crafting. I push mechanical skill to the limit, analyse every VOD, and call
              the shots for my squad. When I'm not grinding the ladder, I'm streaming casual
              play-throughs or breaking down pro strats.
            </p>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2">
              {traits.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:border-neon-cyan/30 hover:text-neon-cyan transition-colors"
                >
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Game rotation — narrow card */}
          <motion.div variants={fadeUp} className="lg:col-span-2 glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white">Main Rotation</h3>
            </div>

            <div className="space-y-4">
              {games.map((g, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all"
                >
                  <div>
                    <p className="text-white font-semibold text-sm group-hover:text-neon-cyan transition-colors">
                      {g.name}
                    </p>
                    <p className="text-slate-500 text-xs">{g.role}</p>
                  </div>
                  <span className="text-[11px] font-bold text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-full">
                    {g.rank}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
