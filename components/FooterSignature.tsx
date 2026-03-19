import Link from 'next/link';

export function FooterSignature() {
  return (
    <footer className="pt-1 text-center">
      <Link
        href="https://instagram.com/seuinstagram"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.24em] text-white/45 uppercase backdrop-blur-xl transition hover:text-white/72"
      >
        Design by @seuinstagram
      </Link>
    </footer>
  );
}
