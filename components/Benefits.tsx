'use client'

import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, BarChart3, Layers } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: 'Reduce Redundancies',
    description:
      'Eliminate repetitive manual tasks that drain your team\'s time. AI handles the repeat work so your people focus on high-value decisions.',
    stat: '80%',
    statLabel: 'of repetitive tasks automated',
  },
  {
    icon: DollarSign,
    title: 'Save Money',
    description:
      'Replace expensive manual processes and reduce the overhead of growing headcount just to keep up with volume.',
    stat: '40%',
    statLabel: 'average operational cost reduction',
  },
  {
    icon: BarChart3,
    title: 'Increase Productivity',
    description:
      'Your team moves faster when AI handles triage, scheduling, and communication — without the bottlenecks.',
    stat: '3×',
    statLabel: 'output increase on average',
  },
  {
    icon: Layers,
    title: 'Seamless Integration',
    description:
      'Every system we build plugs into your existing tools — CRM, calendar, communication platforms — with zero disruption.',
    stat: '100%',
    statLabel: 'custom to your stack',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[4px] text-[#d4af37] uppercase mb-3">
            Why TawfiqTech
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 max-w-xl">
            Built for{' '}
            <span className="gold-gradient">Business Impact</span>,<br />
            Not Just Tech.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-base rounded-2xl p-7 group relative overflow-hidden flex gap-6"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(212,175,55,0.06) 0%, transparent 65%)' }} />

                {/* Left: stat */}
                <div className="flex-shrink-0 w-24 flex flex-col items-center justify-center text-center border-r border-[#1e1e1e] pr-6">
                  <div className="text-2xl font-black text-[#d4af37] leading-none mb-1">{b.stat}</div>
                  <div className="text-[10px] text-[#444] leading-tight">{b.statLabel}</div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center group-hover:border-[#d4af37]/50 transition-all">
                      <Icon size={16} className="text-[#d4af37]" />
                    </div>
                    <h3 className="text-[16px] font-bold text-white">{b.title}</h3>
                  </div>
                  <p className="text-[13px] text-[#666] leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
