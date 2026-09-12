'use client';

import { TarotCard as TarotCardType } from '@/lib/tarot-data';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
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
    <div className="w-full h-full bg-gradient-to-br from-ink to-ink-light rounded-lg border-2 border-gold/30 shadow-xl overflow-hidden">
      <svg
        viewBox="0 0 200 350"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative border */}
        <rect
          x="10"
          y="10"
          width="180"
          height="330"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          rx="8"
        />
        <rect
          x="15"
          y="15"
          width="170"
          height="320"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          rx="6"
          opacity="0.5"
        />

        {/* Central mystical pattern */}
        <g transform="translate(100, 175)">
          {/* Outer circle */}
          <circle r="60" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
          <circle r="50" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4" />
          
          {/* Star pattern */}
          <path
            d="M 0,-40 L 10,-12 L 38,-12 L 16,4 L 24,32 L 0,16 L -24,32 L -16,4 L -38,-12 L -10,-12 Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
          />
          
          {/* Center dot */}
          <circle r="4" fill="#d4af37" />
          
          {/* Decorative dots around */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 45;
            const y = Math.sin(rad) * 45;
            return <circle key={angle} cx={x} cy={y} r="2" fill="#d4af37" opacity="0.6" />;
          })}
        </g>

        {/* Corner decorations */}
        <g opacity="0.4">
          <path d="M 25,25 L 35,25 L 25,35 Z" fill="#d4af37" />
          <path d="M 175,25 L 165,25 L 175,35 Z" fill="#d4af37" />
          <path d="M 25,325 L 35,325 L 25,315 Z" fill="#d4af37" />
          <path d="M 175,325 L 165,325 L 175,315 Z" fill="#d4af37" />
        </g>
      </svg>
    </div>
  );
}

function CardFront({ card, reversed }: { card: TarotCardType; reversed: boolean }) {
  const suitColors: Record<string, string> = {
    wands: '#e85d04',
    cups: '#4361ee',
    swords: '#6c757d',
    pentacles: '#2d6a4f',
  };

  const suitColor = card.suit ? suitColors[card.suit] : '#d4af37';

  return (
    <div
      className={`w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-gold shadow-xl overflow-hidden ${
        reversed ? 'rotate-180' : ''
      }`}
    >
      <svg
        viewBox="0 0 200 350"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Border */}
        <rect
          x="8"
          y="8"
          width="184"
          height="334"
          fill="none"
          stroke={suitColor}
          strokeWidth="2"
          rx="8"
        />

        {/* Card Number/Title Area */}
        <rect x="15" y="15" width="170" height="40" fill={suitColor} opacity="0.1" rx="4" />
        <text
          x="100"
          y="38"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill={suitColor}
          fontFamily="serif"
        >
          {card.name.toUpperCase()}
        </text>

        {/* Suit symbol */}
        {card.suit && (
          <g transform="translate(100, 100)">
            <SuitSymbol suit={card.suit} color={suitColor} />
          </g>
        )}

        {/* Arcana indicator */}
        {card.arcana === 'major' && (
          <g transform="translate(100, 175)">
            <circle r="50" fill="none" stroke={suitColor} strokeWidth="2" opacity="0.3" />
            <text
              x="0"
              y="8"
              textAnchor="middle"
              fontSize="36"
              fontWeight="bold"
              fill={suitColor}
              fontFamily="serif"
            >
              {card.number !== undefined ? card.number : '•'}
            </text>
          </g>
        )}

        {/* Minor arcana number */}
        {card.arcana === 'minor' && card.number !== undefined && (
          <g transform="translate(100, 175)">
            {Array.from({ length: Math.min(card.number, 10) }).map((_, i) => {
              const angle = (i * 360) / Math.min(card.number!, 10);
              const rad = ((angle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * 40;
              const y = Math.sin(rad) * 40;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={card.number! > 7 ? 4 : 5}
                  fill={suitColor}
                  opacity="0.6"
                />
              );
            })}
          </g>
        )}

        {/* Keywords at bottom */}
        <rect x="15" y="295" width="170" height="40" fill={suitColor} opacity="0.05" rx="4" />
        <text
          x="100"
          y="318"
          textAnchor="middle"
          fontSize="9"
          fill={suitColor}
          opacity="0.8"
          fontFamily="sans-serif"
        >
          {card.keywords.slice(0, 3).join(' • ')}
        </text>
      </svg>
    </div>
  );
}

function SuitSymbol({ suit, color }: { suit: string; color: string }) {
  switch (suit) {
    case 'wands':
      return (
        <g>
          <rect x="-3" y="-35" width="6" height="70" fill={color} rx="2" />
          <circle cx="0" cy="-40" r="6" fill={color} />
          <path d="M -8,-30 L -15,-20 L -8,-25 Z" fill={color} opacity="0.7" />
          <path d="M 8,-30 L 15,-20 L 8,-25 Z" fill={color} opacity="0.7" />
        </g>
      );
    case 'cups':
      return (
        <g>
          <ellipse cx="0" cy="-10" rx="20" ry="25" fill="none" stroke={color} strokeWidth="3" />
          <rect x="-2" y="10" width="4" height="15" fill={color} />
          <ellipse cx="0" cy="27" rx="8" ry="3" fill={color} />
        </g>
      );
    case 'swords':
      return (
        <g>
          <path d="M 0,-40 L 0,30" stroke={color} strokeWidth="4" />
          <path d="M -15,-10 L 15,-10" stroke={color} strokeWidth="3" />
          <path d="M 0,-40 L -5,-35 L 5,-35 Z" fill={color} />
          <rect x="-6" y="28" width="12" height="8" fill={color} rx="1" />
        </g>
      );
    case 'pentacles':
      return (
        <g>
          <circle r="30" fill="none" stroke={color} strokeWidth="3" />
          <path
            d="M 0,-30 L 7,-9 L 28,-9 L 12,5 L 18,26 L 0,13 L -18,26 L -12,5 L -28,-9 L -7,-9 Z"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
          />
        </g>
      );
    default:
      return null;
  }
}
