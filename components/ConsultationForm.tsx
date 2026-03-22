'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const packages = [
  'AI Assistant',
  'AI Chatbot',
  'AI Receptionist',
  'Calendar & Scheduling Automation',
  'Not Sure Yet — I Need Guidance',
]

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', package: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with your actual API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-[#0f0f0f] border border-[#222] rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-[#444] outline-none focus:border-[#d4af37]/60 focus:ring-1 focus:ring-[#d4af37]/20 transition-all duration-200'

  return (
    <section id="consultation" className="section-pad relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #d4af37 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[12px] font-semibold tracking-[4px] text-[#d4af37] uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Book Your Free{' '}
            <span className="gold-gradient">Consultation</span>
          </h2>
          <p className="text-[15px] text-[#666]">
            Tell us about your business and we&apos;ll map out exactly which AI automations will have the biggest impact.
          </p>
        </motion.div>

        {/* Form or Success */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111008] border border-[#d4af37]/30 rounded-2xl p-10 text-center"
          >
            <CheckCircle size={44} className="text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">You&apos;re booked in!</h3>
            <p className="text-[14px] text-[#666]">
              We&apos;ll reach out within 24 hours to confirm your consultation time. Check your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-[#141414] border border-[#222] rounded-2xl p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                  Business Name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Acme Corp"
                  value={form.business}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="Your business name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="Your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (604) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="Your phone number"
                />
              </div>
            </div>

            <div className="mb-7">
              <label htmlFor="package" className="block text-[12px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                AI Package of Interest
              </label>
              <select
                id="package"
                name="package"
                value={form.package}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
                aria-label="Select a package"
              >
                <option value="" disabled>Select a package…</option>
                {packages.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email}
              className="btn-gold relative w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[15px] font-bold disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Submit consultation request"
            >
              <span className="relative z-10">{loading ? 'Sending…' : 'Book My Free Consultation'}</span>
              {!loading && <Send size={15} className="relative z-10" />}
            </button>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
    </section>
  )
}
