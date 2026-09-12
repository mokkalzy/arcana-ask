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
        <nav className="border-b border-stone-100/10 bg-midnight/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <span className="text-2xl md:text-3xl font-serif font-light text-stone tracking-tight group-hover:text-terracotta transition-colors duration-300">
                  Arcana Ask
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/tarot-spreads" className="text-stone-100 hover:text-stone transition-colors duration-200 text-sm font-medium">
                  Spreads
                </Link>
                <Link href="/tarot-card-meanings" className="text-stone-100 hover:text-stone transition-colors duration-200 text-sm font-medium">
                  Meanings
                </Link>
                <Link href="/guides/how-to-read-tarot" className="text-stone-100 hover:text-stone transition-colors duration-200 text-sm font-medium">
                  Guides
                </Link>
              </div>
              <Link href="/free-tarot-reading" className="btn-primary text-sm py-3 px-6">
                Begin Reading
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-stone-100/10 bg-midnight-50 mt-32">
          <div className="container mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-stone font-serif font-light text-2xl mb-4 tracking-tight">
                  Arcana Ask
                </h3>
                <p className="text-stone-100 text-sm leading-relaxed">
                  Thoughtful tarot readings for reflection and insight. Always free.
                </p>
              </div>
              
              <div>
                <h4 className="text-stone font-medium mb-4 text-sm uppercase tracking-wider">Popular</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/yes-or-no-tarot" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Yes or No Tarot</Link></li>
                  <li><Link href="/daily-tarot" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Daily Reading</Link></li>
                  <li><Link href="/love-tarot" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Love Tarot</Link></li>
                  <li><Link href="/celtic-cross-tarot" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Celtic Cross</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-stone font-medium mb-4 text-sm uppercase tracking-wider">Learn</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/tarot-card-meanings" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Card Meanings</Link></li>
                  <li><Link href="/tarot-spreads" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Spreads</Link></li>
                  <li><Link href="/guides/how-to-read-tarot" className="text-stone-100 hover:text-terracotta transition-colors duration-200">How to Read</Link></li>
                  <li><Link href="/guides/tarot-for-beginners" className="text-stone-100 hover:text-terracotta transition-colors duration-200">For Beginners</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-stone font-medium mb-4 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/disclaimer" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Disclaimer</Link></li>
                  <li><Link href="/privacy" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Privacy</Link></li>
                  <li><Link href="/terms" className="text-stone-100 hover:text-terracotta transition-colors duration-200">Terms</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-stone-100/10 pt-8 text-center text-stone-100 text-sm">
              <p>© {new Date().getFullYear()} Arcana Ask. For entertainment and reflection.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
