/**
 * Qpid illustration library — soft, rounded, pastel storybook SVG objects.
 * Every decorative shape on the site comes from here so the style stays consistent.
 * Colors use the Qpid brand palette. Each accepts a className for sizing/positioning.
 */

type IllProps = {
  className?: string;
  title?: string;
};

const C = {
  yellow: "#F8C84E",
  yellowDeep: "#F2B637",
  green: "#7DBE68",
  greenDeep: "#5EA24A",
  pink: "#F7A9B8",
  pinkDeep: "#EF8AA0",
  blue: "#83CDEE",
  blueDeep: "#5FB8E0",
  cream: "#FFF7E8",
  coral: "#F28C7A",
  cocoa: "#6B4E3D",
  cocoaSoft: "#9A7B67",
  white: "#FFFFFF",
  leaf: "#8FD08A",
};

/* ---------------- Sky objects ---------------- */

export function Sun({ className, title = "Sun" }: IllProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title}>
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const x1 = 60 + Math.cos(a) * 44;
          const y1 = 60 + Math.sin(a) * 44;
          const x2 = 60 + Math.cos(a) * 56;
          const y2 = 60 + Math.sin(a) * 56;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={C.yellowDeep}
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <circle cx="60" cy="60" r="38" fill={C.yellow} />
      <circle cx="48" cy="56" r="4.5" fill={C.cocoa} />
      <circle cx="72" cy="56" r="4.5" fill={C.cocoa} />
      <circle cx="42" cy="66" r="5" fill={C.coral} opacity="0.5" />
      <circle cx="78" cy="66" r="5" fill={C.coral} opacity="0.5" />
      <path
        d="M50 68 Q60 78 70 68"
        stroke={C.cocoa}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cloud({ className, title = "Cloud" }: IllProps) {
  return (
    <svg viewBox="0 0 160 90" className={className} role="img" aria-label={title}>
      <g fill={C.white}>
        <circle cx="45" cy="52" r="30" />
        <circle cx="80" cy="40" r="36" />
        <circle cx="118" cy="54" r="28" />
        <rect x="40" y="52" width="82" height="30" rx="15" />
      </g>
      <ellipse cx="80" cy="80" rx="60" ry="8" fill={C.blue} opacity="0.12" />
    </svg>
  );
}

export function Rainbow({ className, title = "Rainbow" }: IllProps) {
  const bands = [C.coral, C.yellow, C.green, C.blue, C.pink];
  return (
    <svg viewBox="0 0 200 110" className={className} role="img" aria-label={title}>
      {bands.map((c, i) => (
        <path
          key={c}
          d={`M ${18 + i * 14} 100 A ${82 - i * 14} ${82 - i * 14} 0 0 1 ${182 - i * 14} 100`}
          fill="none"
          stroke={c}
          strokeWidth="12"
          strokeLinecap="round"
        />
      ))}
      <g fill={C.white}>
        <circle cx="26" cy="100" r="16" />
        <circle cx="40" cy="100" r="13" />
        <circle cx="174" cy="100" r="16" />
        <circle cx="160" cy="100" r="13" />
      </g>
    </svg>
  );
}

export function Star({ className, title = "Star", color = C.yellow }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={title}>
      <path
        d="M24 3 L29.5 17 L44 18.5 L33 28.5 L36.5 43 L24 35 L11.5 43 L15 28.5 L4 18.5 L18.5 17 Z"
        fill={color}
        stroke={C.white}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className, title = "Sparkle", color = C.yellow }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label={title}>
      <path
        d="M20 2 C22 14 26 18 38 20 C26 22 22 26 20 38 C18 26 14 22 2 20 C14 18 18 14 20 2 Z"
        fill={color}
      />
    </svg>
  );
}

export function Heart({ className, title = "Heart", color = C.pink }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={className} role="img" aria-label={title}>
      <path
        d="M24 40 C10 30 3 22 3 14 C3 7 8 3 14 3 C18 3 22 5.5 24 9 C26 5.5 30 3 34 3 C40 3 45 7 45 14 C45 22 38 30 24 40 Z"
        fill={color}
        stroke={C.white}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Moon({ className, title = "Moon" }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <path
        d="M70 12 A44 44 0 1 0 88 62 A34 34 0 0 1 70 12 Z"
        fill={C.yellow}
      />
      <circle cx="58" cy="52" r="3" fill={C.cocoa} />
      <circle cx="70" cy="60" r="3" fill={C.cocoa} />
      <path d="M56 66 Q64 72 72 66" stroke={C.cocoa} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="52" cy="62" r="4" fill={C.coral} opacity="0.4" />
      <circle cx="76" cy="70" r="4" fill={C.coral} opacity="0.4" />
    </svg>
  );
}

/* ---------------- Nature ---------------- */

export function Flower({ className, title = "Flower", color = C.pink }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 80 110" className={className} role="img" aria-label={title}>
      <path d="M40 55 C40 75 40 90 40 105" stroke={C.greenDeep} strokeWidth="5" strokeLinecap="round" />
      <path d="M40 78 Q26 70 20 80" stroke={C.green} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M40 88 Q54 82 60 92" stroke={C.green} strokeWidth="5" fill="none" strokeLinecap="round" />
      <g fill={color}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 * Math.PI) / 180;
          return <ellipse key={i} cx={40 + Math.cos(a) * 16} cy={32 + Math.sin(a) * 16} rx="11" ry="14" transform={`rotate(${i * 60} ${40 + Math.cos(a) * 16} ${32 + Math.sin(a) * 16})`} />;
        })}
      </g>
      <circle cx="40" cy="32" r="10" fill={C.yellow} />
    </svg>
  );
}

export function Tree({ className, title = "Tree" }: IllProps) {
  return (
    <svg viewBox="0 0 130 150" className={className} role="img" aria-label={title}>
      <rect x="57" y="95" width="16" height="50" rx="7" fill={C.cocoa} />
      <circle cx="65" cy="55" r="42" fill={C.green} />
      <circle cx="38" cy="70" r="28" fill={C.greenDeep} />
      <circle cx="92" cy="70" r="28" fill={C.leaf} />
      <circle cx="65" cy="45" r="30" fill={C.leaf} />
      <circle cx="50" cy="50" r="5" fill={C.pink} />
      <circle cx="82" cy="58" r="5" fill={C.coral} />
      <circle cx="66" cy="75" r="5" fill={C.yellow} />
    </svg>
  );
}

export function Butterfly({ className, title = "Butterfly", color = C.blue }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} role="img" aria-label={title}>
      <ellipse cx="50" cy="45" rx="4" ry="22" fill={C.cocoa} />
      <g fill={color}>
        <ellipse cx="30" cy="30" rx="20" ry="16" />
        <ellipse cx="70" cy="30" rx="20" ry="16" />
        <ellipse cx="32" cy="58" rx="15" ry="13" />
        <ellipse cx="68" cy="58" rx="15" ry="13" />
      </g>
      <g fill={C.white} opacity="0.7">
        <circle cx="28" cy="30" r="5" />
        <circle cx="72" cy="30" r="5" />
      </g>
      <path d="M50 24 Q44 12 40 10" stroke={C.cocoa} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 24 Q56 12 60 10" stroke={C.cocoa} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- Toys & play ---------------- */

export function TeddyBear({ className, title = "Teddy bear" }: IllProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} role="img" aria-label={title}>
      <circle cx="30" cy="26" r="16" fill="#C99A6A" />
      <circle cx="90" cy="26" r="16" fill="#C99A6A" />
      <circle cx="30" cy="26" r="8" fill="#E4C29A" />
      <circle cx="90" cy="26" r="8" fill="#E4C29A" />
      <circle cx="60" cy="48" r="34" fill="#C99A6A" />
      <ellipse cx="60" cy="98" rx="30" ry="28" fill="#C99A6A" />
      <ellipse cx="60" cy="60" rx="18" ry="15" fill="#E4C29A" />
      <ellipse cx="60" cy="102" rx="16" ry="14" fill="#E4C29A" />
      <circle cx="49" cy="44" r="4" fill={C.cocoa} />
      <circle cx="71" cy="44" r="4" fill={C.cocoa} />
      <ellipse cx="60" cy="54" rx="5" ry="4" fill={C.cocoa} />
      <path d="M54 60 Q60 65 66 60" stroke={C.cocoa} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="52" r="5" fill={C.coral} opacity="0.5" />
      <circle cx="78" cy="52" r="5" fill={C.coral} opacity="0.5" />
      <path d="M52 118 L52 128 M60 120 L60 128 M68 118 L68 128" stroke="#E4C29A" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function BuildingBlocks({ className, title = "Building blocks" }: IllProps) {
  return (
    <svg viewBox="0 0 130 90" className={className} role="img" aria-label={title}>
      <rect x="10" y="45" width="42" height="42" rx="8" fill={C.blue} />
      <rect x="56" y="45" width="42" height="42" rx="8" fill={C.green} />
      <rect x="33" y="3" width="42" height="42" rx="8" fill={C.coral} />
      <text x="31" y="74" fontFamily="Baloo 2, sans-serif" fontSize="26" fontWeight="700" fill={C.white}>A</text>
      <text x="77" y="74" fontFamily="Baloo 2, sans-serif" fontSize="26" fontWeight="700" fill={C.white}>B</text>
      <path d="M46 30 L52 36 L64 20" stroke={C.white} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Crayon({ className, title = "Crayon", color = C.coral }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 120" className={className} role="img" aria-label={title}>
      <rect x="9" y="24" width="22" height="90" rx="8" fill={color} />
      <rect x="9" y="40" width="22" height="10" fill={C.white} opacity="0.7" />
      <rect x="9" y="92" width="22" height="10" fill={C.white} opacity="0.7" />
      <path d="M20 2 L31 26 L9 26 Z" fill={color} />
      <path d="M20 2 L26 15 L14 15 Z" fill={C.cocoa} opacity="0.35" />
    </svg>
  );
}

export function Storybook({ className, title = "Storybook" }: IllProps) {
  return (
    <svg viewBox="0 0 130 100" className={className} role="img" aria-label={title}>
      <path d="M65 20 C50 10 25 10 12 16 L12 84 C25 78 50 78 65 88 Z" fill={C.blue} />
      <path d="M65 20 C80 10 105 10 118 16 L118 84 C105 78 80 78 65 88 Z" fill={C.pink} />
      <path d="M65 20 L65 88" stroke={C.cocoa} strokeWidth="3" />
      <g stroke={C.white} strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <line x1="22" y1="30" x2="55" y2="26" />
        <line x1="22" y1="42" x2="55" y2="38" />
        <line x1="22" y1="54" x2="55" y2="50" />
        <line x1="75" y1="26" x2="108" y2="30" />
        <line x1="75" y1="38" x2="108" y2="42" />
        <line x1="75" y1="50" x2="108" y2="54" />
      </g>
      <path d="M60 6 C62 12 66 14 72 15 C66 17 62 20 60 26 C58 20 54 17 48 15 C54 14 58 12 60 6 Z" fill={C.yellow} />
    </svg>
  );
}

export function PuzzlePiece({ className, title = "Puzzle piece", color = C.green }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <path
        d="M20 20 H42 A9 9 0 0 1 58 20 H80 V42 A9 9 0 0 1 80 58 V80 H58 A9 9 0 0 0 42 80 H20 V58 A9 9 0 0 0 20 42 Z"
        fill={color}
        stroke={C.white}
        strokeWidth="3"
      />
    </svg>
  );
}

export function Balloon({ className, title = "Balloon", color = C.pink }: IllProps & { color?: string }) {
  return (
    <svg viewBox="0 0 70 120" className={className} role="img" aria-label={title}>
      <ellipse cx="35" cy="42" rx="30" ry="36" fill={color} />
      <path d="M35 78 L30 86 L40 86 Z" fill={color} />
      <path d="M35 86 C35 100 42 106 35 118" stroke={C.cocoaSoft} strokeWidth="2.5" fill="none" />
      <ellipse cx="26" cy="30" rx="7" ry="10" fill={C.white} opacity="0.5" />
    </svg>
  );
}

/* ---------------- House / environment ---------------- */

export function House({ className, title = "Qpid home" }: IllProps) {
  return (
    <svg viewBox="0 0 260 230" className={className} role="img" aria-label={title}>
      {/* body */}
      <rect x="45" y="105" width="170" height="110" rx="14" fill={C.cream} stroke="#EFD8B8" strokeWidth="3" />
      {/* roof */}
      <path d="M30 112 L130 40 L230 112 Z" fill={C.coral} />
      <path d="M30 112 L130 40 L230 112 Z" fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      {/* chimney */}
      <rect x="180" y="58" width="20" height="34" rx="4" fill={C.cocoa} />
      {/* door */}
      <rect x="112" y="150" width="42" height="65" rx="18" fill={C.green} />
      <circle cx="146" cy="185" r="3.5" fill={C.yellow} />
      <path d="M124 150 L124 138 A9 9 0 0 1 142 138 L142 150" fill={C.white} opacity="0.35" />
      {/* windows */}
      <g>
        <rect x="64" y="128" width="38" height="38" rx="8" fill={C.blue} />
        <rect x="164" y="128" width="38" height="38" rx="8" fill={C.blue} />
        <path d="M83 128 L83 166 M64 147 L102 147" stroke={C.white} strokeWidth="3" />
        <path d="M183 128 L183 166 M164 147 L202 147" stroke={C.white} strokeWidth="3" />
      </g>
      {/* heart over door */}
      <path d="M133 92 C127 87 123 84 123 80 C123 77 125 75 128 75 C130 75 132 76 133 78 C134 76 136 75 138 75 C141 75 143 77 143 80 C143 84 139 87 133 92 Z" fill={C.pink} />
      {/* grass */}
      <path d="M30 215 Q130 205 230 215 L230 222 L30 222 Z" fill={C.green} />
    </svg>
  );
}

export function Fence({ className, title = "Fence" }: IllProps) {
  return (
    <svg viewBox="0 0 240 60" className={className} role="img" aria-label={title}>
      <g fill={C.white} stroke="#D7BFAE" strokeWidth="2">
        {[10, 55, 100, 145, 190].map((x) => (
          <path key={x} d={`M${x} 20 L${x + 26} 20 L${x + 26} 58 L${x} 58 Z M${x + 13} 10 L${x + 26} 20 L${x} 20 Z`} />
        ))}
        <rect x="4" y="28" width="232" height="8" rx="3" />
        <rect x="4" y="44" width="232" height="8" rx="3" />
      </g>
    </svg>
  );
}

/* ---------------- Communication ---------------- */

export function SpeechBubble({
  className,
  title = "Speech bubble",
  color = C.blue,
  label,
}: IllProps & { color?: string; label?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} role="img" aria-label={title}>
      <rect x="8" y="8" width="124" height="80" rx="26" fill={color} />
      <path d="M40 86 L34 106 L62 86 Z" fill={color} />
      {label ? (
        <text
          x="70"
          y="54"
          textAnchor="middle"
          fontFamily="Baloo 2, sans-serif"
          fontSize="26"
          fontWeight="700"
          fill={C.white}
        >
          {label}
        </text>
      ) : (
        <g fill={C.white}>
          <circle cx="48" cy="48" r="7" />
          <circle cx="70" cy="48" r="7" />
          <circle cx="92" cy="48" r="7" />
        </g>
      )}
    </svg>
  );
}

export function Globe({ className, title = "Globe" }: IllProps) {
  return (
    <svg viewBox="0 0 110 110" className={className} role="img" aria-label={title}>
      <circle cx="55" cy="55" r="48" fill={C.blue} />
      <path d="M30 40 Q45 32 62 38 Q52 48 60 58 Q72 54 80 64 Q66 72 70 84" fill={C.green} opacity="0.9" />
      <path d="M28 66 Q40 62 46 72 Q38 80 44 88" fill={C.green} opacity="0.9" />
      <ellipse cx="55" cy="55" rx="48" ry="20" fill="none" stroke={C.white} strokeWidth="2" opacity="0.5" />
      <line x1="55" y1="7" x2="55" y2="103" stroke={C.white} strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

/* Handy re-export list for background scatter */
export const brandColors = C;
