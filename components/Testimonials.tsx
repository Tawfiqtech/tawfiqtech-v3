'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    company: 'Apex Realty Group',
    role: 'Operations Manager',
    text: "TawfiqTech built us an AI receptionist that handles all our inbound calls and books viewings directly into our calendar. We haven't missed a lead in 3 months. It paid for itself in the first week.",
    result: '3× more leads captured',
  },
  {
    name: 'Daniel K.',
    company: 'NorthFlow HVAC',
    role: 'Owner',
    text: "The AI chatbot and scheduling automation they set up eliminated an entire part-time position. Customers get instant responses at 2 AM and my team wakes up with a full appointment calendar.",
    result: '$1,800/mo in labour savings',
  },
  {
    name: 'Priya S.',
    company: 'Lumina Legal Services',
    role: 'Director of Operations',
    text: "We needed a custom AI assistant trained on our legal templates and intake process. The TawfiqTech team understood our compliance requirements and delivered something we actually trust and use daily.",
    result: '60% faster client intake',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[4px] text-[#d4af37] uppercase mb-3">
            Client Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            What Businesses{' '}
            <span className="gold-gradient">Actually Say</span>
          </h2>
          <p className="text-[16px] text-[#666] max-w-lg mx-auto">
            Real outcomes from real clients. We measure success in dollars saved and hours reclaimed.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base rounded-2xl p-7 group relative overflow-hidden flex flex-col"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 65%)' }} />

              {/* Quote icon */}
              <Quote size={22} className="text-[#d4af37]/40 mb-5 flex-shrink-0" />

              {/* Text */}
              <p className="text-[14px] text-[#999] leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a0a] border border-[#d4af37]/20 text-[11px] font-semibold text-[#d4af37] mb-5 self-start">
                ✦ {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#1e1e1e]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] to-[#a8860a] flex items-center justify-center text-[#0b0b0b] font-black text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-[#555]">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
    </section>
  )
}
