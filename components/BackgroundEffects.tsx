"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const glows = [
  "from-[#ff63cb]/32 via-[#ffb3ea]/12 to-transparent",
  "from-[#d6b8ff]/30 via-[#f7c7ff]/10 to-transparent",
  "from-[#9dd2ff]/22 via-[#ff88d8]/10 to-transparent",
];

export function BackgroundEffects() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_34%),linear-gradient(160deg,rgba(34,11,40,0.94),rgba(56,18,59,0.95)_38%,rgba(26,11,36,0.94)_100%)]" />
      <div className="absolute inset-0 aurora-layer opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220%200%20400%20400%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.72%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.08%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-35" />

      {glows.map((glow, index) => (
        <motion.div
          key={glow}
          className={cn(
            "absolute rounded-full blur-3xl",
            "h-44 w-44 sm:h-56 sm:w-56 bg-linear-to-br",
            glow,
            index === 0 && "-left-10 top-10",
            index === 1 && "right-0 top-1/4",
            index === 2 && "bottom-0 left-1/4",
          )}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: index === 1 ? [0, -12, 0] : [0, 14, 0],
                  y: [0, index % 2 === 0 ? -12 : 10, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-x-8 top-16 h-28 rounded-full bg-white/12 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.2, 0.35, 0.2], scaleX: [1, 1.08, 1] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute block h-1.5 w-1.5 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.56)]"
            style={{
              left: `${10 + ((index * 7) % 80)}%`,
              top: `${8 + ((index * 11) % 80)}%`,
            }}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.15, 0.8, 0.15], scale: [0.9, 1.4, 0.9] }
            }
            transition={{
              duration: 3.5 + (index % 4),
              repeat: Infinity,
              delay: index * 0.18,
            }}
          />
        ))}
      </div>
    </div>
  );
}
