import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { DEFAULT_METADATA } from '@/lib/metadata';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans">
        <nav className="border-b border-gold/20 bg-ink/95 backdrop-blur sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-serif font-bold text-gold">
                  ✦ Arcana Ask
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/tarot-spreads" className="text-gray-300 hover:text-gold transition-colors">
                  Spreads
                </Link>
                <Link href="/tarot-card-meanings" className="text-gray-300 hover:text-gold transition-colors">
                  Card Meanings
                </Link>
                <Link href="/guides/how-to-read-tarot" className="text-gray-300 hover:text-gold transition-colors">
                  Guides
                </Link>
              </div>
              <Link href="/free-tarot-reading" className="btn-primary text-sm">
                Free Reading
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-gold/20 bg-ink-light mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-gold font-serif font-bold text-xl mb-4">
                  Arcana Ask
                </h3>
                <p className="text-gray-400 text-sm">
                  Free online tarot readings for entertainment and reflection.
                </p>
              </div>
              
              <div>
                <h4 className="text-gold font-semibold mb-4">Popular Readings</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/yes-or-no-tarot" className="text-gray-400 hover:text-gold transition-colors">Yes or No Tarot</Link></li>
                  <li><Link href="/daily-tarot" className="text-gray-400 hover:text-gold transition-colors">Daily Tarot</Link></li>
                  <li><Link href="/love-tarot" className="text-gray-400 hover:text-gold transition-colors">Love Tarot</Link></li>
                  <li><Link href="/celtic-cross-tarot" className="text-gray-400 hover:text-gold transition-colors">Celtic Cross</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gold font-semibold mb-4">Learn</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/tarot-card-meanings" className="text-gray-400 hover:text-gold transition-colors">Card Meanings</Link></li>
                  <li><Link href="/tarot-spreads" className="text-gray-400 hover:text-gold transition-colors">Tarot Spreads</Link></li>
                  <li><Link href="/guides/how-to-read-tarot" className="text-gray-400 hover:text-gold transition-colors">How to Read Tarot</Link></li>
                  <li><Link href="/guides/tarot-for-beginners" className="text-gray-400 hover:text-gold transition-colors">Tarot for Beginners</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gold font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/disclaimer" className="text-gray-400 hover:text-gold transition-colors">Disclaimer</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Arcana Ask. For entertainment purposes only.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
