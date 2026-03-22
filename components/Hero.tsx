'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

/* ── Animated grid node ──────────────── */
function GridNode({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.circle
      cx={x} cy={y} r="2.5"
      fill="#d4af37"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: Math.random() * 4 + 2 }}
    />
  )
}

/* ── Network line ────────────────────── */
function NetworkLine({
  x1, y1, x2, y2, delay,
}: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#d4af37"
      strokeWidth="0.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: [0, 1, 0], opacity: [0, 0.3, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
    />
  )
}

const nodes = [
  { x: 80,  y: 120, delay: 0   },
  { x: 220, y: 60,  delay: 0.8 },
  { x: 370, y: 160, delay: 1.6 },
  { x: 160, y: 260, delay: 2.1 },
  { x: 290, y: 310, delay: 0.4 },
  { x: 440, y: 80,  delay: 1.2 },
  { x: 500, y: 240, delay: 2.5 },
  { x: 60,  y: 340, delay: 1.9 },
]

const lines = [
  { x1: 80,  y1: 120, x2: 220, y2: 60,  delay: 0.3 },
  { x1: 220, y1: 60,  x2: 370, y2: 160, delay: 1.0 },
  { x1: 370, y1: 160, x2: 440, y2: 80,  delay: 1.8 },
  { x1: 80,  y1: 120, x2: 160, y2: 260, delay: 0.6 },
  { x1: 160, y1: 260, x2: 290, y2: 310, delay: 1.3 },
  { x1: 290, y1: 310, x2: 500, y2: 240, delay: 2.0 },
  { x1: 370, y1: 160, x2: 500, y2: 240, delay: 0.9 },
  { x1: 60,  y1: 340, x2: 160, y2: 260, delay: 1.5 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1], x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Network SVG — right side decoration */}
      <div className="absolute right-0 top-0 w-[560px] h-[420px] opacity-60 pointer-events-none hidden lg:block">
        <svg width="560" height="420" viewBox="0 0 560 420">
          {lines.map((l, i) => <NetworkLine key={i} {...l} />)}
          {nodes.map((n, i) => <GridNode key={i} {...n} />)}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] font-medium text-[#d4af37] mb-6"
          >
            <Zap size={12} className="text-[#d4af37]" />
            AI-Powered Business Automation
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.06] tracking-tight mb-6"
          >
            We Automate Your{' '}
            <span className="gold-gradient">Business</span>{' '}
            with AI
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[17px] lg:text-[19px] text-[#888] leading-relaxed max-w-xl mb-10"
          >
            Reducing redundancies, saving money, and boosting productivity — with AI systems built specifically for your workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#consultation"
              className="btn-gold relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-bold"
              aria-label="Book a consultation"
            >
              <span className="relative z-10">Book a Consultation</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <a
              href="#pricing"
              className="btn-outline inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold"
              aria-label="See our packages"
            >
              See Our Packages
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 mt-14 pt-8 border-t border-[#1e1e1e]"
          >
            {[
              { value: '10×', label: 'Faster workflows' },
              { value: '40%', label: 'Average cost saved' },
              { value: '24/7', label: 'AI runs non-stop' },
            ].map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xl font-black text-[#d4af37]">{s.value}</div>
                <div className="text-[12px] text-[#555] mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent pointer-events-none" />
    </section>
  )
}
