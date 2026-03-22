'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need technical knowledge to use the AI systems you build?',
    a: "No. We handle all the technical setup, integration, and training. You'll interact with a clean, user-friendly interface — the same way you use any other tool in your business. We also provide full documentation and a walkthrough before handover.",
  },
  {
    q: 'How long does implementation take?',
    a: 'Most Starter projects are live within 5–7 business days. Growth packages typically take 2–3 weeks depending on integration complexity. Enterprise projects are scoped individually during your consultation.',
  },
  {
    q: 'Will the AI work with the tools I already use?',
    a: 'Yes — we design specifically around your existing stack. Whether you use Google Workspace, Microsoft 365, HubSpot, Calendly, Slack, or a custom CRM, we build the AI to plug directly into your workflow.',
  },
  {
    q: 'What happens after the system is live?',
    a: "All packages include post-launch support. For Starter that's 30 days; Growth includes 90 days. Enterprise clients receive an ongoing retainer with SLA-backed uptime. We also offer monthly monitoring add-ons for any package.",
  },
  {
    q: 'Can the AI handle sensitive or confidential business information?',
    a: "Yes. We take data privacy seriously and build with industry-standard security practices. All AI systems are configured with appropriate access controls, and we never use your business data to train external models.",
  },
  {
    q: "What if I'm not sure which package or service I need?",
    a: "That's exactly what the free consultation is for. Book a call, tell us about your workflows and pain points, and we'll recommend the highest-impact starting point — with no pressure to commit.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold tracking-[4px] text-[#d4af37] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Common <span className="gold-gradient">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? 'bg-[#111008] border-[#d4af37]/30'
                  : 'bg-[#141414] border-[#1e1e1e] hover:border-[#2a2a2a]'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span className={`text-[14px] font-semibold pr-4 ${open === i ? 'text-white' : 'text-[#ccc]'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  open === i
                    ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]'
                    : 'border-[#333] text-[#555]'
                }`}>
                  {open === i ? <Minus size={12} /> : <Plus size={12} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[13px] text-[#777] leading-relaxed border-t border-[#1e1e1e] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
