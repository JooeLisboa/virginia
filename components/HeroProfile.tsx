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
        <div className="absolute inset-[-12px] rounded-full bg-[conic-gradient(from_120deg,rgba(255,244,251,0.92),rgba(255,102,200,0.68),rgba(220,177,255,0.72),rgba(149,204,255,0.42),rgba(255,244,251,0.88))] blur-lg" />
        <div className="absolute inset-[-18px] rounded-full bg-[radial-gradient(circle,rgba(255,112,206,0.38),transparent_62%)] blur-2xl" />
        <div className="relative rounded-full border border-white/40 bg-white/12 p-1.5 shadow-[0_0_50px_rgba(255,96,195,0.4)] backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-full border border-white/28 bg-[linear-gradient(160deg,rgba(255,255,255,0.34),rgba(255,255,255,0.08))] p-1">
            <Image
              src="/virginia-avatar.jpg"
              alt="Avatar estilizado de Virginia"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
            <div className="absolute inset-x-4 top-0 h-10 rounded-full bg-white/34 blur-xl" />
            <div className="absolute inset-x-6 bottom-2 h-7 rounded-full bg-[#ff87d8]/25 blur-xl" />
          </div>
        </div>
        <div className="absolute -right-1 bottom-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/18 text-white shadow-[0_0_26px_rgba(255,116,203,0.5)] backdrop-blur-xl">
          <Crown className="h-4 w-4" />
        </div>
      </motion.div>

      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/84 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,111,193,0.12)]">
        <Sparkles className="h-3.5 w-3.5 text-[#ffd6f4]" />
        Universo Virginia
      </div>

      <h1 className="text-premium text-[2.35rem] font-semibold leading-none tracking-[-0.07em] sm:text-[2.7rem]">
        Virginia
      </h1>
      <p className="mt-3 max-w-[17rem] text-[0.95rem] font-medium leading-relaxed text-white/78 sm:max-w-xs sm:text-[1rem]">
        Beleza, atitude e brilho em cada clique para uma presença que inspira,
        vende e domina atenção.
      </p>
    </motion.header>
  );
}
