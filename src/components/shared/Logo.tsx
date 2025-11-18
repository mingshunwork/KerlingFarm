'use client';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: 'text-lg' },
    md: { width: 40, height: 40, text: 'text-xl' },
    lg: { width: 48, height: 48, text: 'text-2xl' },
  };

  const colors = {
    default: {
      primary: '#d4af37',
      secondary: '#b8860b',
      accent: '#facc15',
      leaf: '#22c55e',
    },
    white: {
      primary: '#d4af37',
      secondary: '#b8860b',
      accent: '#facc15',
      leaf: '#4ade80',
    },
  };

  const { width, height, text } = sizes[size];
  const colorScheme = colors[variant];

  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-110"
      >
        {/* Circular background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={`url(#gradient-${variant})`}
          className="drop-shadow-lg"
        />

        {/* Farm field lines */}
        <path
          d="M20 65 Q35 60 50 65 T80 65"
          stroke={colorScheme.secondary}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M20 75 Q35 70 50 75 T80 75"
          stroke={colorScheme.secondary}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Barn/House shape */}
        <path
          d="M35 55 L35 70 L65 70 L65 55 L50 40 Z"
          fill={variant === 'white' ? 'rgba(255,255,255,0.9)' : colorScheme.secondary}
          className="drop-shadow-md"
        />

        {/* Roof */}
        <path
          d="M30 55 L50 35 L70 55 Z"
          fill={variant === 'white' ? 'rgba(255,255,255,1)' : colorScheme.primary}
          className="drop-shadow-md"
        />

        {/* Door */}
        <rect
          x="45"
          y="60"
          width="10"
          height="10"
          fill={variant === 'white' ? colorScheme.secondary : '#ffffff'}
          opacity="0.8"
        />

        {/* Leaves/Plants */}
        <g className="animate-float">
          {/* Left leaf */}
          <ellipse
            cx="25"
            cy="45"
            rx="6"
            ry="10"
            fill={colorScheme.leaf}
            transform="rotate(-30 25 45)"
            opacity="0.9"
          />
          {/* Center leaf */}
          <ellipse
            cx="30"
            cy="40"
            rx="6"
            ry="10"
            fill={colorScheme.accent}
            transform="rotate(-15 30 40)"
            opacity="0.9"
          />
          {/* Right leaf */}
          <ellipse
            cx="75"
            cy="45"
            rx="6"
            ry="10"
            fill={colorScheme.leaf}
            transform="rotate(30 75 45)"
            opacity="0.9"
          />
        </g>

        {/* Sun/Circle accent */}
        <circle
          cx="75"
          cy="25"
          r="8"
          fill={colorScheme.accent}
          opacity="0.6"
          className="animate-pulse-soft"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorScheme.primary} />
            <stop offset="100%" stopColor={colorScheme.secondary} />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-tight ${text} text-golden-600`}
        >
          Kerling Farm
        </span>
        <span
          className="text-xs font-medium text-farm-green-500"
        >
          Since 1952
        </span>
      </div>
    </div>
  );
}
