'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$997',
    period: 'one-time setup',
    tagline: 'Perfect for solo operators and small teams.',
    features: [
      '1 AI automation (chatbot, assistant, or scheduling)',
      'Integration with 1 existing tool',
      'Basic onboarding & training',
      '30-day post-launch support',
      'Email support',
    ],
    cta: 'Book Consultation',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$2,497',
    period: 'one-time setup',
    tagline: 'For businesses ready to scale with AI.',
    features: [
      'Up to 3 AI automations',
      'Multi-tool integration (CRM, calendar, comms)',
      'Custom AI chatbot or receptionist',
      'Calendar & scheduling automation',
      '90-day post-launch support',
      'Priority email & call support',
    ],
    cta: 'Book Consultation',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored quote',
    tagline: 'Full-stack AI transformation for your business.',
    features: [
      'Unlimited automations',
      'Full workflow audit & redesign',
      'Dedicated AI project manager',
      'Custom model fine-tuning',
      'Ongoing maintenance retainer',
      'SLA-backed uptime guarantee',
    ],
    cta: 'Book Consultation',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative overflow-hidden">
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
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Simple,{' '}
            <span className="gold-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-[16px] text-[#666] max-w-lg mx-auto">
            No monthly subscriptions. No hidden fees. You pay for implementation — we deliver results.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-[#111008] border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.2)]'
                  : 'bg-[#141414] border border-[#222]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#d4af37] text-[#0b0b0b] text-[11px] font-black tracking-wider px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`text-[12px] font-semibold tracking-[3px] uppercase mb-2 ${plan.highlight ? 'text-[#d4af37]' : 'text-[#555]'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-[13px] text-[#555] mb-1.5">{plan.period}</span>
                  )}
                </div>
                <p className="text-[13px] text-[#555] mt-2">{plan.tagline}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] text-[#888]">
                    <Check size={15} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#d4af37]' : 'text-[#444]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#consultation"
                aria-label={`Book consultation for ${plan.name} plan`}
                className={`block text-center py-3.5 rounded-xl text-[14px] font-bold transition-all duration-200 relative ${
                  plan.highlight
                    ? 'btn-gold'
                    : 'btn-outline'
                }`}
              >
                <span className="relative z-10">{plan.cta}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
