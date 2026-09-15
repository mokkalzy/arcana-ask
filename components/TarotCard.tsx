'use client';

import { TarotCard as TarotCardType } from '@/lib/tarot-data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getMajorArcanaIllustration, GenericMajorIllustration } from './CardIllustrations';

interface TarotCardProps {
  card?: TarotCardType;
  reversed?: boolean;
  faceUp?: boolean;
  onClick?: () => void;
  className?: string;
  animateFlip?: boolean;
}

export default function TarotCard({
  card,
  reversed = false,
  faceUp = false,
  onClick,
  className = '',
  animateFlip = false,
}: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(faceUp);

  const handleClick = () => {
    if (animateFlip) {
      setIsFlipped(!isFlipped);
    }
    onClick?.();
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Back */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <CardBack />
        </div>

        {/* Card Front */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {card && <CardFront card={card} reversed={reversed} />}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CardBack() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-midnight via-midnight-50 to-midnight rounded-sm border border-stone-100/20 shadow-2xl overflow-hidden relative">
      <svg
        viewBox="0 0 200 350"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle grain texture */}
        <defs>
          <pattern id="grain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#0f1419" />
            <circle cx="20" cy="30" r="0.5" fill="#e8e4df" opacity="0.1" />
            <circle cx="60" cy="70" r="0.5" fill="#e8e4df" opacity="0.1" />
            <circle cx="40" cy="50" r="0.5" fill="#e8e4df" opacity="0.1" />
          </pattern>
          <linearGradient id="backGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c66b54" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8a9a8e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width="200" height="350" fill="url(#grain)" />
        <rect x="0" y="0" width="200" height="350" fill="url(#backGradient)" />

        {/* Refined border pattern */}
        <rect
          x="12"
          y="12"
          width="176"
          height="326"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="0.5"
          rx="2"
          opacity="0.3"
        />
        <rect
          x="18"
          y="18"
          width="164"
          height="314"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="0.5"
          rx="2"
          opacity="0.2"
        />

        {/* Central symbolic pattern - more sophisticated */}
        <g transform="translate(100, 175)" opacity="0.4">
          {/* Outer circular motif */}
          <circle r="55" fill="none" stroke="#e8e4df" strokeWidth="0.5" />
          <circle r="48" fill="none" stroke="#e8e4df" strokeWidth="0.5" opacity="0.6" />
          <circle r="41" fill="none" stroke="#e8e4df" strokeWidth="0.5" opacity="0.4" />
          
          {/* Geometric star - eight points */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 20;
            const y1 = Math.sin(rad) * 20;
            const x2 = Math.cos(rad) * 35;
            const y2 = Math.sin(rad) * 35;
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#e8e4df"
                strokeWidth="1"
                opacity="0.5"
              />
            );
          })}
          
          {/* Inner circle and dot */}
          <circle r="15" fill="none" stroke="#e8e4df" strokeWidth="0.5" />
          <circle r="2.5" fill="#e8e4df" opacity="0.8" />
          
          {/* Decorative points */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 60;
            const y = Math.sin(rad) * 60;
            return (
              <g key={angle}>
                <circle cx={x} cy={y} r="1.5" fill="#e8e4df" opacity="0.6" />
              </g>
            );
          })}
        </g>

        {/* Corner flourishes - minimal */}
        <g opacity="0.2" stroke="#e8e4df" strokeWidth="0.5" fill="none">
          <path d="M 25,25 L 35,25" />
          <path d="M 25,25 L 25,35" />
          <path d="M 175,25 L 165,25" />
          <path d="M 175,25 L 175,35" />
          <path d="M 25,325 L 35,325" />
          <path d="M 25,325 L 25,315" />
          <path d="M 175,325 L 165,325" />
          <path d="M 175,325 L 175,315" />
        </g>
      </svg>
    </div>
  );
}

function CardFront({ card, reversed }: { card: TarotCardType; reversed: boolean }) {
  const suitThemes: Record<string, { primary: string; secondary: string; accent: string }> = {
    wands: { primary: '#c66b54', secondary: '#d88975', accent: '#a55544' },
    cups: { primary: '#8a9a8e', secondary: '#a8b5ab', accent: '#6d7d71' },
    swords: { primary: '#5a6b7d', secondary: '#7a8b9d', accent: '#3a4b5d' },
    pentacles: { primary: '#d4c5b0', secondary: '#e5d9c9', accent: '#b8a78f' },
  };

  const theme = card.suit ? suitThemes[card.suit] : { primary: '#c66b54', secondary: '#d88975', accent: '#a55544' };

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-stone-50 via-stone to-stone-100 rounded-sm border border-stone-200 shadow-2xl overflow-hidden"
      style={{ transform: reversed ? 'rotate(180deg)' : 'none' }}
    >
      <svg
        viewBox="0 0 200 350"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`cardGrad-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.secondary} stopOpacity="0.1" />
            <stop offset="100%" stopColor={theme.primary} stopOpacity="0.15" />
          </linearGradient>
          <filter id="softShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="1" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background gradient */}
        <rect x="0" y="0" width="200" height="350" fill={`url(#cardGrad-${card.id})`} />

        {/* Refined border */}
        <rect
          x="10"
          y="10"
          width="180"
          height="330"
          fill="none"
          stroke={theme.primary}
          strokeWidth="0.5"
          rx="2"
          opacity="0.4"
        />

        {/* Title area */}
        <g>
          <rect x="20" y="20" width="160" height="32" fill={theme.primary} opacity="0.08" rx="1" />
          <text
            x="100"
            y="39"
            textAnchor="middle"
            fontSize="11"
            fontWeight="400"
            fill={theme.accent}
            fontFamily="serif"
            letterSpacing="0.5"
          >
            {card.name.toUpperCase()}
          </text>
        </g>

        {/* Main illustration area */}
        <g transform="translate(100, 175)">
          {card.arcana === 'major' && card.number !== undefined && (
            <>
              {getMajorArcanaIllustration(card, theme) || (
                <GenericMajorIllustration cardNumber={card.number} theme={theme} />
              )}
            </>
          )}
          {card.suit && <ImprovedSuitSymbol suit={card.suit} theme={theme} />}
          {card.arcana === 'minor' && card.number !== undefined && !card.suit && (
            <MinorArcanaPattern number={card.number} theme={theme} />
          )}
        </g>

        {/* Keywords at bottom - more refined */}
        <g>
          <rect x="20" y="298" width="160" height="32" fill={theme.primary} opacity="0.05" rx="1" />
          <text
            x="100"
            y="316"
            textAnchor="middle"
            fontSize="8"
            fill={theme.accent}
            opacity="0.7"
            fontFamily="sans-serif"
            letterSpacing="0.8"
          >
            {card.keywords.slice(0, 2).join(' • ').toUpperCase()}
          </text>
        </g>

        {/* Subtle corner marks */}
        <g opacity="0.2" stroke={theme.primary} strokeWidth="0.5" fill="none">
          <path d="M 20,20 L 28,20" />
          <path d="M 20,20 L 20,28" />
          <path d="M 180,20 L 172,20" />
          <path d="M 180,20 L 180,28" />
          <path d="M 20,330 L 28,330" />
          <path d="M 20,330 L 20,322" />
          <path d="M 180,330 L 172,330" />
          <path d="M 180,330 L 180,322" />
        </g>
      </svg>
    </div>
  );
}

function ImprovedSuitSymbol({ suit, theme }: { suit: string; theme: { primary: string; secondary: string; accent: string } }) {
  switch (suit) {
    case 'wands':
      return (
        <g opacity="0.7">
          <rect x="-2" y="-40" width="4" height="80" fill={theme.primary} rx="2" />
          <circle cx="0" cy="-45" r="5" fill={theme.accent} />
          <path d="M -10,-32 Q -8,-28 -4,-30 L -6,-35 Z" fill={theme.secondary} />
          <path d="M 10,-32 Q 8,-28 4,-30 L 6,-35 Z" fill={theme.secondary} />
          <ellipse cx="0" cy="42" rx="8" ry="3" fill={theme.accent} opacity="0.5" />
        </g>
      );
    case 'cups':
      return (
        <g opacity="0.7">
          <path
            d="M -20,-15 Q -20,15 0,25 Q 20,15 20,-15 L 15,-15 Q 15,10 0,18 Q -15,10 -15,-15 Z"
            fill="none"
            stroke={theme.primary}
            strokeWidth="2"
          />
          <ellipse cx="0" cy="-16" rx="20" ry="4" fill="none" stroke={theme.primary} strokeWidth="2" />
          <rect x="-1.5" y="23" width="3" height="14" fill={theme.primary} rx="1" />
          <ellipse cx="0" cy="38" rx="10" ry="3" fill={theme.accent} opacity="0.6" />
          <path d="M -12,-8 Q -5,-5 0,-8 Q 5,-5 12,-8" stroke={theme.secondary} strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>
      );
    case 'swords':
      return (
        <g opacity="0.7">
          <path d="M 0,-45 L 0,35" stroke={theme.primary} strokeWidth="3" />
          <path d="M 0,-45 L -4,-40 L 4,-40 Z" fill={theme.accent} />
          <rect x="-12" y="-5" width="24" height="3" fill={theme.primary} rx="1" />
          <rect x="-8" y="33" width="16" height="8" fill={theme.primary} rx="1" />
          <path d="M 0,-40 L 0,32" stroke={theme.secondary} strokeWidth="1" opacity="0.3" />
        </g>
      );
    case 'pentacles':
      return (
        <g opacity="0.7">
          <circle r="35" fill="none" stroke={theme.primary} strokeWidth="2.5" />
          <circle r="28" fill="none" stroke={theme.primary} strokeWidth="0.5" opacity="0.4" />
          <path
            d="M 0,-28 L 8,-8 L 28,-8 L 13,4 L 19,24 L 0,12 L -19,24 L -13,4 L -28,-8 L -8,-8 Z"
            fill="none"
            stroke={theme.accent}
            strokeWidth="2"
          />
          <circle r="3" fill={theme.accent} opacity="0.8" />
        </g>
      );
    default:
      return null;
  }
}

function MajorArcanaSymbol({ card, theme }: { card: TarotCardType; theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      <circle r="50" fill="none" stroke={theme.primary} strokeWidth="1.5" opacity="0.3" />
      <circle r="42" fill="none" stroke={theme.primary} strokeWidth="1" opacity="0.2" />
      <text
        x="0"
        y="15"
        textAnchor="middle"
        fontSize="56"
        fontWeight="300"
        fill={theme.primary}
        fontFamily="serif"
        opacity="0.7"
      >
        {card.number !== undefined ? (card.number === 0 ? '0' : card.number) : '•'}
      </text>
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 55;
        const y = Math.sin(rad) * 55;
        return <circle key={angle} cx={x} cy={y} r="1.5" fill={theme.primary} opacity="0.4" />;
      })}
    </g>
  );
}

function MinorArcanaPattern({ number, theme }: { number: number; theme: { primary: string; secondary: string; accent: string } }) {
  const count = Math.min(number, 10);
  
  if (count <= 4) {
    // Arranged in corners/center
    const positions = [
      [0, 0],
      [-25, -25],
      [25, 25],
      [-25, 25],
      [25, -25],
    ].slice(0, count);
    
    return (
      <g>
        {positions.map((pos, i) => (
          <circle key={i} cx={pos[0]} cy={pos[1]} r="6" fill={theme.primary} opacity="0.6" />
        ))}
      </g>
    );
  }
  
  // Circular arrangement for 5+
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * 360) / count - 90;
        const rad = (angle * Math.PI) / 180;
        const radius = count > 7 ? 45 : 40;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={count > 8 ? 4 : 5}
            fill={theme.primary}
            opacity="0.6"
          />
        );
      })}
      <circle r="10" fill="none" stroke={theme.primary} strokeWidth="0.5" opacity="0.3" />
    </g>
  );
}
