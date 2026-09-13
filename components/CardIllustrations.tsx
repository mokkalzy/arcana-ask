import { TarotCard } from '@/lib/tarot-data';

// Major Arcana Symbolic Illustrations
export function getMajorArcanaIllustration(card: TarotCard, theme: { primary: string; secondary: string; accent: string }) {
  const illustrations: Record<number, JSX.Element | null> = {
    0: <FoolIllustration theme={theme} />,
    1: <MagicianIllustration theme={theme} />,
    2: <HighPriestessIllustration theme={theme} />,
    17: <StarIllustration theme={theme} />,
    18: <MoonIllustration theme={theme} />,
    19: <SunIllustration theme={theme} />,
  };
  
  return card.number !== undefined ? (illustrations[card.number] || null) : null;
}

// The Fool (0) - Figure at cliff's edge with sun
function FoolIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Sun */}
      <circle cx="0" cy="-50" r="20" fill={theme.secondary} opacity="0.3" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={Math.cos(angle) * 25}
            y1={-50 + Math.sin(angle) * 25}
            x2={Math.cos(angle) * 32}
            y2={-50 + Math.sin(angle) * 32}
            stroke={theme.primary}
            strokeWidth="2"
            opacity="0.4"
          />
        );
      })}
      {/* Figure */}
      <circle cx="0" cy="-15" r="10" fill="none" stroke={theme.accent} strokeWidth="2" />
      <path d="M 0,-5 L 0,20" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M -12,5 L 12,5" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M 0,20 L -8,35" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M 0,20 L 8,35" stroke={theme.accent} strokeWidth="2.5" />
      {/* Cliff edge */}
      <path d="M -30,40 L -5,40 L -5,45" stroke={theme.primary} strokeWidth="2" fill="none" />
    </g>
  );
}

// The Magician (I) - Figure with arms raised, tools below
function MagicianIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Infinity symbol above */}
      <path
        d="M -15,-55 Q -10,-60 -5,-55 Q 0,-50 5,-55 Q 10,-60 15,-55 Q 10,-50 5,-45 Q 0,-40 -5,-45 Q -10,-50 -15,-55"
        fill="none"
        stroke={theme.secondary}
        strokeWidth="1.5"
      />
      {/* Figure */}
      <circle cx="0" cy="-25" r="8" fill="none" stroke={theme.accent} strokeWidth="2" />
      <path d="M 0,-17 L 0,10" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M -15,-10 L 0,-5 L 15,-10" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M 0,10 L -7,25" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M 0,10 L 7,25" stroke={theme.accent} strokeWidth="2.5" />
      {/* Four tools/elements */}
      <circle cx="-20" cy="40" r="4" fill={theme.primary} opacity="0.6" />
      <rect x="-3" y="38" width="6" height="6" fill={theme.primary} opacity="0.6" />
      <path d="M 10,38 L 15,48 L 20,38 Z" fill={theme.primary} opacity="0.6" />
      <circle cx="30" cy="42" r="3" fill={theme.primary} opacity="0.6" />
    </g>
  );
}

// The High Priestess (II) - Seated figure with moon crown and pillars
function HighPriestessIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Pillars */}
      <rect x="-40" y="-40" width="8" height="80" fill={theme.primary} opacity="0.3" />
      <rect x="32" y="-40" width="8" height="80" fill={theme.primary} opacity="0.3" />
      {/* Moon crown */}
      <path d="M -12,-45 Q 0,-50 12,-45" fill="none" stroke={theme.secondary} strokeWidth="2" />
      <circle cx="0" cy="-43" r="4" fill="none" stroke={theme.secondary} strokeWidth="1.5" />
      {/* Figure seated */}
      <circle cx="0" cy="-25" r="8" fill="none" stroke={theme.accent} strokeWidth="2" />
      <path d="M 0,-17 L 0,0" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M -12,-10 L 12,-10" stroke={theme.accent} strokeWidth="2.5" />
      <rect x="-15" y="0" width="30" height="25" fill="none" stroke={theme.accent} strokeWidth="2" />
      {/* Scroll */}
      <rect x="-8" y="5" width="16" height="12" fill={theme.secondary} opacity="0.3" />
    </g>
  );
}

// Additional Major Arcana illustrations would continue...
// For brevity, I'll create key cards and a pattern for others

// The Star (XVII) - Central star with smaller stars, water pouring
function StarIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Large central star */}
      <path
        d="M 0,-40 L 3,-28 L 15,-25 L 5,-15 L 8,-3 L 0,-10 L -8,-3 L -5,-15 L -15,-25 L -3,-28 Z"
        fill={theme.secondary}
        stroke={theme.primary}
        strokeWidth="1.5"
        opacity="0.7"
      />
      {/* Smaller stars */}
      {[
        { x: -30, y: -20 },
        { x: 30, y: -20 },
        { x: -25, y: 10 },
        { x: 25, y: 10 },
        { x: 0, y: 20 },
        { x: -15, y: 35 },
        { x: 15, y: 35 },
      ].map((pos, i) => (
        <path
          key={i}
          d={`M ${pos.x},${pos.y - 4} L ${pos.x + 1},${pos.y - 1} L ${pos.x + 4},${pos.y} L ${pos.x + 1},${pos.y + 1} L ${pos.x},${pos.y + 4} L ${pos.x - 1},${pos.y + 1} L ${pos.x - 4},${pos.y} L ${pos.x - 1},${pos.y - 1} Z`}
          fill={theme.primary}
          opacity="0.5"
        />
      ))}
    </g>
  );
}

// The Moon (XVIII) - Crescent moon with towers and water
function MoonIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Moon */}
      <circle cx="0" cy="-35" r="18" fill={theme.secondary} opacity="0.2" />
      <circle cx="5" cy="-35" r="18" fill={theme.primary} opacity="0.8" />
      {/* Towers */}
      <rect x="-35" y="10" width="12" height="30" fill={theme.accent} opacity="0.4" />
      <rect x="23" y="10" width="12" height="30" fill={theme.accent} opacity="0.4" />
      <rect x="-33" y="8" width="8" height="4" fill={theme.accent} opacity="0.6" />
      <rect x="25" y="8" width="8" height="4" fill={theme.accent} opacity="0.6" />
      {/* Water ripples */}
      {[0, 8, 16, 24].map((y) => (
        <path
          key={y}
          d={`M -20,${45 + y} Q -10,${43 + y} 0,${45 + y} Q 10,${47 + y} 20,${45 + y}`}
          fill="none"
          stroke={theme.secondary}
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
    </g>
  );
}

// The Sun (XIX) - Large sun with rays and figure
function SunIllustration({ theme }: { theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.8">
      {/* Sun */}
      <circle cx="0" cy="-30" r="25" fill={theme.secondary} opacity="0.3" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={Math.cos(angle) * 30}
            y1={-30 + Math.sin(angle) * 30}
            x2={Math.cos(angle) * 42}
            y2={-30 + Math.sin(angle) * 42}
            stroke={theme.primary}
            strokeWidth="2.5"
            opacity="0.6"
          />
        );
      })}
      {/* Happy face in sun */}
      <circle cx="-7" cy="-35" r="2" fill={theme.accent} />
      <circle cx="7" cy="-35" r="2" fill={theme.accent} />
      <path
        d="M -8,-22 Q 0,-18 8,-22"
        fill="none"
        stroke={theme.accent}
        strokeWidth="2"
      />
      {/* Figure below */}
      <circle cx="0" cy="15" r="8" fill="none" stroke={theme.accent} strokeWidth="2" />
      <path d="M 0,23 L 0,40" stroke={theme.accent} strokeWidth="2.5" />
      <path d="M -10,30 L 10,30" stroke={theme.accent} strokeWidth="2.5" />
    </g>
  );
}

// Generic Major Arcana pattern for remaining cards
function GenericMajorIllustration({ cardNumber, theme }: { cardNumber: number; theme: { primary: string; secondary: string; accent: string } }) {
  return (
    <g opacity="0.7">
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
        {cardNumber}
      </text>
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 55;
        const y = Math.sin(rad) * 55;
        return <circle key={angle} cx={x} cy={y} r="2" fill={theme.primary} opacity="0.4" />;
      })}
    </g>
  );
}

// Export functions for other illustrations (stubs for now, can be expanded)
export { FoolIllustration, MagicianIllustration, HighPriestessIllustration, StarIllustration, MoonIllustration, SunIllustration, GenericMajorIllustration };
