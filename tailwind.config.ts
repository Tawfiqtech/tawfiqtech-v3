import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ─── Brand colors ──────────────────── */
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light:   '#f5d76e',
          dark:    '#a8860a',
          muted:   '#b8963e',
        },
        ink: {
          DEFAULT: '#0b0b0b',
          surface: '#0f0f0f',
          card:    '#141414',
          raised:  '#1a1a1a',
          border:  '#222222',
        },
      },

      /* ─── Typography ────────────────────── */
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },

      /* ─── Animations ────────────────────── */
      animation: {
        /* generic float used via .float utility */
        float:          'float 5s ease-in-out infinite',
        'float-slow':   'float 7s ease-in-out infinite',
        'float-fast':   'float 3.5s ease-in-out infinite',
        /* blob drift for hero bg */
        'blob-a':       'blobA 14s ease-in-out infinite',
        'blob-b':       'blobB 18s ease-in-out infinite',
        'blob-c':       'blobC 11s ease-in-out infinite',
        /* marquee for logos */
        marquee:        'marquee 28s linear infinite',
        /* number tick for dashboard */
        'count-up':     'countUp 0.4s ease-out',
        /* line draw for HowItWorks */
        'draw-line':    'drawLine 1s ease-out forwards',
        /* accordion open */
        'slide-down':   'slideDown 0.3s ease-out',
        /* glow pulse */
        'glow-pulse':   'glowPulse 2.5s ease-in-out infinite',
        /* spinner */
        'spin-slow':    'spin 3s linear infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        blobA: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
        blobB: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(-40px, 20px) scale(1.08)' },
          '66%':      { transform: 'translate(25px, -35px) scale(0.95)' },
        },
        blobC: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%':      { transform: 'translate(20px, 25px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { strokeDashoffset: '500' },
          to:   { strokeDashoffset: '0' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3), 0 0 40px rgba(212,175,55,0.1)' },
          '50%':      { boxShadow: '0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.2)' },
        },
      },

      /* ─── Shadows ───────────────────────── */
      boxShadow: {
        'gold-sm':   '0 0 12px rgba(212,175,55,0.25)',
        'gold-md':   '0 0 25px rgba(212,175,55,0.38)',
        'gold-lg':   '0 0 50px rgba(212,175,55,0.50)',
        'gold-inset':'inset 0 0 30px rgba(212,175,55,0.06)',
        card:        '0 4px 30px rgba(0,0,0,0.55)',
        'card-hover':'0 8px 50px rgba(0,0,0,0.75)',
        panel:       '0 0 80px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.06)',
      },

      /* ─── Backgrounds ───────────────────── */
      backgroundImage: {
        'gold-shine':   'linear-gradient(135deg, #d4af37 0%, #f5d76e 50%, #d4af37 100%)',
        'gold-subtle':  'linear-gradient(135deg, #d4af37 0%, #b8963e 100%)',
        'hero-radial':  'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        'section-glow': 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        'card-gradient':'linear-gradient(160deg, #161616 0%, #111111 100%)',
        'dot-pattern':  'radial-gradient(rgba(212,175,55,0.07) 1px, transparent 1px)',
      },

      backgroundSize: {
        'dots': '26px 26px',
      },
    },
  },
  plugins: [],
}

export default config
