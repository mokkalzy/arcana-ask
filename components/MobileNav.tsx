'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/yes-or-no-tarot', label: 'Yes or No' },
    { href: '/daily-tarot', label: 'Daily Card' },
    { href: '/three-card-tarot', label: 'Three Cards' },
    { href: '/love-tarot', label: 'Love' },
    { href: '/career-tarot', label: 'Career' },
    { href: '/celtic-cross-tarot', label: 'Celtic Cross' },
    { href: '/tarot-spreads', label: 'All Spreads' },
    { href: '/tarot-card-meanings', label: 'Card Meanings' },
    { href: '/guides/how-to-read-tarot', label: 'How to Read' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 text-stone hover:text-stone-50 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight/95 backdrop-blur-lg z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-midnight-50 border-l border-stone-100/10 z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20 space-y-6">
                <div className="space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-stone-100 hover:text-stone transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="pt-6 border-t border-stone-100/10">
                  <Link
                    href="/free-tarot-reading"
                    onClick={() => setIsOpen(false)}
                    className="block btn-primary text-center"
                  >
                    Begin Reading
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
