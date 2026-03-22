'use client'

import { motion } from 'framer-motion'
import { Bot, MessageSquare, Phone, CalendarClock } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description:
      'A custom AI assistant trained on your business data — handles internal queries, drafts documents, and supports your team around the clock without adding headcount.',
    tag: 'Productivity',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description:
      'Intelligent website chatbots that qualify leads, answer FAQs, and book appointments — converting visitors into customers while you sleep.',
    tag: 'Lead Generation',
  },
  {
    icon: Phone,
    title: 'AI Receptionist',
    description:
      'A voice AI that answers inbound calls, captures lead information, routes inquiries, and schedules appointments — with zero hold time.',
    tag: 'Customer Service',
  },
  {
    icon: CalendarClock,
    title: 'Calendar & Scheduling',
    description:
      'End-to-end scheduling automation — syncs with your calendar, sends reminders, handles reschedules, and eliminates back-and-forth booking entirely.',
    tag: 'Automation',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #d4af37 0%, transparent 70%)' }} />

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
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            AI Services Built for{' '}
            <span className="gold-gradient">Real Business</span>
          </h2>
          <p className="text-[16px] text-[#666] max-w-xl mx-auto">
            Each service is fully customised to your operations — not off-the-shelf software.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="card-base rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-5 group-hover:border-[#d4af37] group-hover:bg-[#1e1a0a] transition-all duration-300">
                  <Icon size={20} className="text-[#d4af37]" />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-semibold tracking-[2px] text-[#555] uppercase mb-2 block">
                  {s.tag}
                </span>

                <h3 className="text-[17px] font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{s.description}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
