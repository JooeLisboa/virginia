import Link from "next/link";

export function FooterSignature() {
  return (
    <footer className="pt-1 text-center">
      <Link
        href="https://instagram.com/Jooelisboa"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.22em] text-white/50 uppercase backdrop-blur-xl transition hover:text-white/78"
      >
        Crafted by @Jooelisboa
      </Link>
    </footer>
  );
}
