"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

function getEmoji(rating: number): string {
  if (rating === 0) return "🎮";
  if (rating <= 4) return "😭";
  if (rating <= 8) return "🙂";
  return "🤩";
}

function getLabel(rating: number): string {
  if (rating === 0) return "Drag the slider to rate";
  if (rating <= 2) return "Ouch…";
  if (rating <= 4) return "Keep practicing!";
  if (rating <= 6) return "Not bad!";
  if (rating <= 8) return "Nice plays!";
  if (rating === 9) return "Insane skills!";
  return "GOD-TIER! 🔥";
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function RatingSection() {
  const [rating, setRating] = useState(0);
  const hasFiredConfetti = useRef(false);

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.3, y: 0.6 },
      colors: ["#00f0ff", "#a855f7", "#f472b6", "#facc15"],
    });
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.7, y: 0.6 },
      colors: ["#00f0ff", "#a855f7", "#f472b6", "#facc15"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#00f0ff", "#a855f7", "#f472b6", "#facc15", "#34d399"],
      });
    }, 200);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRating(value);

    if (value === 10 && !hasFiredConfetti.current) {
      hasFiredConfetti.current = true;
      fireConfetti();
    }
    if (value < 10) {
      hasFiredConfetti.current = false;
    }
  };

  // Percentage for the filled track (0 at 1, 100 at 10)
  const fillPercent = rating === 0 ? 0 : ((rating - 1) / 9) * 100;

  return (
    <section className="py-20 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h3
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3"
        >
          Rate my{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
            gameplay!
          </span>
        </motion.h3>

        <motion.p variants={fadeUp} className="text-slate-500 text-sm mb-10">
          Drag the slider and let me know what you think
        </motion.p>

        {/* Emoji display */}
        <motion.div variants={fadeUp} className="mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={getEmoji(rating)}
              initial={{ scale: 0.4, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.4, opacity: 0, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-7xl sm:text-8xl mb-3 select-none"
            >
              {getEmoji(rating)}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={getLabel(rating)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-slate-400 text-sm font-semibold tracking-wide"
            >
              {getLabel(rating)}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Slider */}
        <motion.div variants={fadeUp} className="w-full max-w-md mx-auto mb-4">
          {/* Tick labels */}
          <div className="flex justify-between mb-2 px-1">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <span
                key={n}
                className={`text-xs font-bold transition-colors duration-200 w-5 text-center ${
                  rating >= n ? "text-neon-cyan" : "text-slate-600"
                }`}
              >
                {n}
              </span>
            ))}
          </div>

          {/* Range input with custom styling */}
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={rating || 1}
              onChange={handleSliderChange}
              className="rating-slider w-full"
              style={
                {
                  "--fill": `${fillPercent}%`,
                } as React.CSSProperties
              }
              aria-label="Rate gameplay from 1 to 10"
            />
          </div>
        </motion.div>

        {/* Selected rating display */}
        <AnimatePresence>
          {rating > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-slate-400">
                You rated{" "}
                <span className="text-neon-cyan font-bold text-sm">
                  {rating}/10
                </span>
                {rating === 10 && (
                  <span className="text-yellow-400 ml-1">⭐</span>
                )}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
