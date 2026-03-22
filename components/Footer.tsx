'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  Company:  ['About', 'How We Work', 'Careers', 'Privacy Policy'],
  Services: ['AI Assistant', 'AI Chatbot', 'AI Receptionist', 'Calendar Automation'],
  Contact:  ['Book Consultation', 'hello@tawfiqtech.ca', 'Vancouver, BC'],
}

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter,  label: 'Twitter',  href: '#' },
  { Icon: Instagram,label: 'Instagram',href: '#' },
]

export default function Footer() {
  const [email, setEmail]       = useState('')
  const [subDone, setSubDone]   = useState(false)

  return (
    <footer className="bg-[#090909] border-t border-[#181818] relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded bg-[#d4af37] flex items-center justify-center text-[#0b0b0b] font-black text-sm">
                T
              </span>
              <span className="font-bold text-[16px] tracking-tight">
                Tawfiq<span className="text-[#d4af37]">Tech</span>
              </span>
            </a>
            <p className="text-[13px] text-[#555] leading-relaxed max-w-xs mb-6">
              Premium AI automation services for businesses ready to stop doing things manually and start scaling with intelligence.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#141414] border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:border-[#d4af37]/50 hover:text-[#d4af37] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-[11px] font-bold tracking-[3px] text-[#444] uppercase mb-4">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href={link === 'Book Consultation' ? '#consultation' : '#'}
                      className="text-[13px] text-[#555] hover:text-[#d4af37] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-[#111008] border border-[#d4af37]/15 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h4 className="text-[16px] font-bold text-white mb-1">Stay in the loop</h4>
            <p className="text-[13px] text-[#555]">AI insights, automation tips, and TawfiqTech updates — monthly.</p>
          </div>
          {subDone ? (
            <div className="text-[13px] text-[#d4af37] font-semibold flex-shrink-0">
              ✦ You&apos;re subscribed!
            </div>
          ) : (
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-[#0b0b0b] border border-[#222] rounded-xl px-4 py-2.5 text-[13px] text-white placeholder-[#333] outline-none focus:border-[#d4af37]/50 transition-all flex-1 sm:w-52"
                aria-label="Newsletter email"
              />
              <button
                onClick={() => email && setSubDone(true)}
                className="btn-gold relative flex-shrink-0 px-4 py-2.5 rounded-xl text-[13px] font-bold"
                aria-label="Subscribe to newsletter"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Subscribe <ArrowRight size={13} />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#141414]">
          <p className="text-[12px] text-[#333]">
            © {new Date().getFullYear()} TawfiqTech. All rights reserved.
          </p>
          <p className="text-[12px] text-[#333]">
            Built in Vancouver, BC 🇨🇦
          </p>
        </div>
      </div>
    </footer>
  )
}
