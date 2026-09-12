# Arcana Ask

**Free online tarot reading web app** built for organic growth through SEO and excellent user experience.

🔮 [Live Demo](#) | 📖 [Documentation](#) | 🎴 [All Card Meanings](/tarot-card-meanings)

## Features

### Core Functionality
- ✨ **Multiple Tarot Spreads**: Yes/No, Daily Card, Three Card, Celtic Cross, and more
- 🎴 **Complete 78-Card Deck**: Full Major and Minor Arcana with upright/reversed meanings
- 🔄 **Interactive Reading Experience**: Smooth shuffle animations, card flip effects, satisfying UX
- 💾 **Local Storage**: Automatically save reading history (private, browser-only)
- 📱 **Mobile-First Design**: Responsive, accessible, reduced-motion support
- 🎨 **Custom Card Artwork**: Original SVG/CSS designs (no copyrighted Rider-Waite imagery)

### SEO Optimization
- 🎯 **20+ Landing Pages**: Targeting high-value keywords (yes/no tarot, daily tarot, etc.)
- 📄 **78 Card Meaning Pages**: Individual pages for every card with rich content
- 🗺️ **Sitemap & Robots.txt**: Proper indexing configuration
- 🏷️ **Rich Metadata**: Open Graph, JSON-LD structured data, optimized titles/descriptions
- ⚡ **Static Site Generation**: Fast page loads, excellent Core Web Vitals
- 🔗 **Internal Linking**: Strategic cross-linking between spreads, cards, and guides

### Content
- 📚 **Educational Guides**: "How to Read Tarot", "Tarot for Beginners"
- 🎯 **Category-Aware Interpretations**: Love, career, and general readings
- 📖 **Comprehensive Card Database**: Keywords, upright/reversed meanings, love/career insights
- 🔍 **Position-Specific Guidance**: Interpretations adapted to card position in spread
- 📝 **Reading Synthesis**: Holistic interpretation combining all drawn cards

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)
- **Analytics**: Google Analytics 4 (optional)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd arcana-ask

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required: Site URL for metadata and sitemaps
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: OpenAI API key for enhanced interpretations (fallback to deterministic)
OPENAI_API_KEY=sk-...
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

Any platform supporting Next.js 14+ works:
- Netlify
- Cloudflare Pages  
- AWS Amplify
- Self-hosted with Docker

Build command: `npm run build`  
Output directory: `.next`

## SEO Checklist

### ✅ Pre-Launch
- [x] All 20+ tool pages created with unique content
- [x] All 78 card meaning pages generated
- [x] Sitemap.xml at root
- [x] Robots.txt configured
- [x] Open Graph metadata on all pages
- [x] JSON-LD structured data where applicable
- [x] Mobile-responsive design
- [x] Fast page load times (SSG)
- [x] Internal linking strategy
- [x] Unique meta titles and descriptions
- [x] H1 tags with primary keywords
- [x] FAQ sections on key pages
- [x] Disclaimer, Privacy, Terms pages

### 📊 Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals
- [ ] Track keyword rankings
- [ ] Analyze top-performing pages
- [ ] Add content based on search queries
- [ ] Build quality backlinks
- [ ] Create blog content (optional)

## Project Structure

```
arcana-ask/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── globals.css          # Global styles
│   ├── yes-or-no-tarot/     # Yes/No tool page
│   ├── daily-tarot/         # Daily card page
│   ├── [other-tools]/       # More spread pages
│   ├── meanings/
│   │   ├── [slug]/          # Dynamic card meaning pages
│   │   └── major-arcana/    # Major Arcana overview
│   ├── guides/              # Educational content
│   └── [legal-pages]/       # Disclaimer, privacy, terms
├── components/              # React components
│   ├── TarotCard.tsx       # Card display with animations
│   └── ReadingWidget.tsx   # Interactive reading interface
├── lib/                     # Core logic and data
│   ├── tarot-data.ts       # 78-card deck database
│   ├── spreads.ts          # Spread definitions
│   ├── reading-engine.ts   # Card drawing & interpretation
│   ├── metadata.ts         # SEO metadata helpers
│   ├── storage.ts          # localStorage management
│   └── analytics.ts        # Event tracking
├── public/
│   └── robots.txt          # Search engine instructions
└── [config files]          # Next, TypeScript, Tailwind configs
```

## Key Routes

### Primary Landing Pages
- `/` - Homepage hub
- `/free-tarot-reading` - Main CTA page
- `/yes-or-no-tarot` - #1 SEO priority
- `/daily-tarot` - Daily card draw
- `/three-card-tarot` - Past-Present-Future
- `/celtic-cross-tarot` - 10-card spread
- `/love-tarot` - Relationship guidance
- `/career-tarot` - Professional insights

### Content Pages
- `/tarot-card-meanings` - All 78 cards index
- `/meanings/[card-slug]` - Individual card pages (78 total)
- `/tarot-spreads` - Spread guide
- `/guides/how-to-read-tarot` - Beginner tutorial
- `/guides/tarot-for-beginners` - Getting started

### Legal
- `/disclaimer` - Entertainment disclaimer
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Analytics Events

Track user engagement with these events:

```typescript
- reading_start       // User begins a reading
- reading_complete    // Reading finished and displayed
- card_flip          // Individual card flipped
- reading_save       // Reading saved to history
- reading_share      // Share button clicked
- email_capture      // Email submitted (if feature added)
- tip_jar_click      // Donation link clicked (if feature added)
```

## Card Data Format

Each card includes:

```typescript
{
  id: string              // URL-friendly slug
  name: string            // Display name
  arcana: 'major' | 'minor'
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles'
  number?: number
  keywords: string[]
  upright: {
    meaning: string       // General interpretation
    love: string         // Love/relationship context
    career: string       // Career/work context
  }
  reversed: {
    meaning: string
    love: string
    career: string
  }
}
```

## Customization

### Adding a New Spread

1. Define spread in `lib/spreads.ts`:
```typescript
export const SPREADS = {
  'my-spread': {
    id: 'my-spread',
    name: 'My Custom Spread',
    description: 'Description here',
    cardCount: 3,
    positions: [/* position objects */]
  }
}
```

2. Create page at `app/my-spread/page.tsx`
3. Add to navigation and internal links
4. Update sitemap

### Changing Card Artwork

Edit the `TarotCard` component (`components/TarotCard.tsx`). The `CardFront` and `CardBack` functions render SVG designs.

### Modifying Interpretations

Update card data in `lib/tarot-data.ts`. Each card has:
- General upright/reversed meanings
- Love-specific interpretations
- Career-specific interpretations

## Performance

Current metrics (target):
- **Lighthouse Score**: 95+ all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Bundle Size**: < 200 KB (JS)

Optimizations:
- Static Site Generation (SSG) for all pages
- Image optimization via Next.js
- Code splitting and tree shaking
- Minimal external dependencies
- CSS purging via Tailwind

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced-motion preferences respected
- Color contrast meets WCAG AA
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari iOS 13+
- Chrome Android (latest)

## Contributing

Contributions welcome! Areas for enhancement:
- Additional tarot spreads
- Enhanced card interpretations
- Multi-language support
- Accessibility improvements
- Performance optimizations

## License

[Add your license here]

## Disclaimer

⚠️ **Important**: Tarot readings provided by Arcana Ask are for entertainment and self-reflection purposes only. They are not a substitute for professional medical, legal, financial, or therapeutic advice. Users must be 18+ and accept full responsibility for their decisions.

## Support

For questions or issues:
- Open a GitHub issue
- [Contact information]

---

Built with ❤️ and ✨ for the tarot community.

**Ready to launch and compete for organic traffic!**
