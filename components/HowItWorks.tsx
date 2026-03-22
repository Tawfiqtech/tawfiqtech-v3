'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Consultation & Needs Assessment',
    description:
      "We start with a deep-dive call to understand your workflows, pain points, and goals. No templates — we map exactly where AI can create the most leverage in your specific business.",
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Tailored AI Workflow Design',
    description:
      "Our team architects a custom AI solution around your tech stack. Every automation, integration, and decision point is designed specifically for how your business actually operates.",
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementation & Ongoing Support',
    description:
      "We deploy, test, and hand over your AI systems with full documentation and training. Then we stay on — monitoring performance, handling updates, and scaling as you grow.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad relative overflow-hidden bg-[#0d0d0d]">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="text-[12px] font-semibold tracking-[4px] text-[#d4af37] uppercase mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            How It <span className="gold-gradient">Works</span>
          </h2>
          <p className="text-[16px] text-[#666] max-w-lg mx-auto">
            Three focused steps from your first call to a fully deployed AI system.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center lg:items-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#222] flex items-center justify-center relative z-10 group-hover:border-[#d4af37] transition-all">
                      <Icon size={26} className="text-[#d4af37]" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d4af37] flex items-center justify-center text-[10px] font-black text-[#0b0b0b] z-20">
                      {i + 1}
                    </div>
                  </div>

                  <div className="text-[11px] font-bold tracking-[3px] text-[#333] uppercase mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-[14px] text-[#666] leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
    </section>
  )
}
