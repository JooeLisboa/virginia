import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'Virginia — Cartão Interativo Pop Premium',
  description: 'Cartão interativo mobile-first com universo pop premium, beauty e lifestyle para Virginia.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
