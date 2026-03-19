import { Bolt, Star } from 'lucide-react';

import { CardShell } from '@/components/CardShell';
import { FooterSignature } from '@/components/FooterSignature';
import { HeroProfile } from '@/components/HeroProfile';
import { PremiumLinkList } from '@/components/PremiumLinkList';
import { campaignHighlight } from '@/lib/design-tokens';

export default function Home() {
  return (
    <CardShell>
      <HeroProfile />

      <section className="glass-panel glow-border relative overflow-hidden rounded-[1.65rem] px-4 py-4">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_48%,rgba(255,122,208,0.12))]" />
        <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-[#ff7ad5]/30 blur-2xl" />
        <div className="absolute right-0 top-2 h-20 w-20 rounded-full bg-[#d6bcff]/20 blur-2xl" />
        <div className="absolute bottom-0 right-10 h-14 w-20 rounded-full bg-[#a8d5ff]/14 blur-2xl" />
        <div className="relative z-10 flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/18 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
            <Bolt className="h-5 w-5" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.09] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/72">
              <Star className="h-3.5 w-3.5 text-[#ffd2f0]" />
              {campaignHighlight.eyebrow}
            </div>
            <h2 className="max-w-xs text-[1.05rem] font-semibold leading-tight tracking-[-0.04em] text-white">
              {campaignHighlight.title}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
              {campaignHighlight.description}
            </p>
          </div>
        </div>
      </section>

      <PremiumLinkList />
      <FooterSignature />
    </CardShell>
  );
}
