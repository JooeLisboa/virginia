'use client';

import { motion } from 'framer-motion';

import { PremiumLinkItem } from '@/components/PremiumLinkItem';
import { brandLinks } from '@/lib/design-tokens';
import { staggerContainer } from '@/lib/motion';

export function PremiumLinkList() {
  return (
    <motion.ul initial="hidden" animate="visible" variants={staggerContainer} className="space-y-3">
      {brandLinks.map((link) => (
        <PremiumLinkItem
          key={link.title}
          title={link.title}
          description={link.description}
          href={link.href}
          tag={link.tag}
          accent={link.accent}
          icon={link.icon}
        />
      ))}
    </motion.ul>
  );
}
