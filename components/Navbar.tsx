'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services',    label: 'Services' },
  { href: '#how-it-works',label: 'How We Work' },
  { href: '#pricing',     label: 'Pricing' },
  { href: '#faq',         label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#222]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded bg-[#d4af37] flex items-center justify-center text-[#0b0b0b] font-black text-sm">
            T
          </span>
          <span className="font-bold text-[15px] tracking-tight">
            Tawfiq<span className="text-[#d4af37]">Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-[#aaa] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#consultation"
          className="hidden md:block btn-gold relative px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-wide"
          aria-label="Book a consultation"
        >
          <span className="relative z-10">Book Consultation</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0f0f0f] border-b border-[#222] px-6 pb-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-medium text-[#ccc] hover:text-[#d4af37] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#consultation"
                  onClick={() => setOpen(false)}
                  className="btn-gold relative inline-block px-5 py-2.5 rounded-lg text-[13px] font-bold"
                >
                  <span className="relative z-10">Book Consultation</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
