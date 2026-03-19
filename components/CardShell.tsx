import type { PropsWithChildren } from "react";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { cn } from "@/lib/utils";

export function CardShell({ children }: PropsWithChildren) {
  return (
    <main className="relative isolate mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4 py-6 sm:px-6">
      <div className="absolute inset-0 bg-[#140815]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,124,210,0.18),transparent_26%),radial-gradient(circle_at_bottom,rgba(168,213,255,0.1),transparent_28%),radial-gradient(circle_at_center,rgba(221,184,255,0.08),transparent_34%)]" />

      <section
        className={cn(
          "glass-panel glow-border relative w-full overflow-hidden rounded-4xl",
        )}
      >
        <BackgroundEffects />
        <div className="relative z-10 flex flex-col gap-5 px-4 pb-4 pt-5 sm:px-5 sm:pb-5 sm:pt-6">
          {children}
        </div>
      </section>
    </main>
  );
}
