"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarHeart,
  Gem,
  Send,
  Sparkles,
} from "lucide-react";

import { fadeBlurUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap = {
  Sparkles,
  Gem,
  BadgeCheck,
  CalendarHeart,
  Send,
};

type PremiumLinkItemProps = {
  title: string;
  description: string;
  href: string;
  tag: string;
  accent: string;
  icon: keyof typeof iconMap;
};

export function PremiumLinkItem({
  title,
  description,
  href,
  tag,
  accent,
  icon,
}: PremiumLinkItemProps) {
  const Icon = iconMap[icon];
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      variants={fadeBlurUp}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group list-none"
    >
      <Link
        href={href}
        className={cn(
          "glass-panel glow-border relative block overflow-hidden rounded-[1.55rem] px-4 py-4 transition-transform duration-300",
        )}
      >
        <div
          className={cn("absolute inset-0 bg-linear-to-r opacity-70", accent)}
        />
        <div className="absolute inset-px rounded-[1.45rem] bg-[linear-gradient(180deg,rgba(11,14,31,0.74),rgba(12,14,32,0.86))]" />
        <motion.div
          className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 group-hover:opacity-100"
          animate={reduceMotion ? undefined : { x: ["-10%", "180%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex items-start gap-3.5">
          <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/18 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl">
            <Icon className="h-[1.1rem] w-[1.1rem]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/58">
                {tag}
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/62 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h2 className="text-base font-semibold tracking-[-0.03em] text-white">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-white/66">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
