"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

import { fadeBlurUp, floatingMotion } from "@/lib/motion";

export function HeroProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeBlurUp}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        className="relative mb-4"
        animate={reduceMotion ? undefined : floatingMotion}
      >
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,rgba(255,255,255,0.75),rgba(255,77,204,0.55),rgba(118,92,255,0.55),rgba(83,204,255,0.45),rgba(255,255,255,0.7))] blur-md" />
        <div className="relative rounded-full border border-white/30 bg-white/10 p-1.5 shadow-[0_0_40px_rgba(255,106,218,0.35)] backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-full border border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))] p-1">
            <Image
              src="/virginia-avatar.jpg"
              alt="Avatar estilizado de Virginia"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
            <div className="absolute inset-x-4 top-0 h-10 rounded-full bg-white/30 blur-xl" />
          </div>
        </div>
        <div className="absolute -right-1 bottom-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-[0_0_26px_rgba(129,106,255,0.42)] backdrop-blur-xl">
          <Crown className="h-4 w-4" />
        </div>
      </motion.div>

      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/78 backdrop-blur-xl">
        <Sparkles className="h-3.5 w-3.5 text-fuchsia-200" />
        Iconic Digital Presence
      </div>

      <h1 className="text-premium text-[2.25rem] font-semibold leading-none tracking-[-0.06em] sm:text-[2.5rem]">
        Virginia
      </h1>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
        Artista, empresária e fenômeno digital com universo pop-luxury de
        beleza, lifestyle e hype.
      </p>
    </motion.header>
  );
}
