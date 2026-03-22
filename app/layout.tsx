import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TawfiqTech — AI Automation for Business',
  description:
    'TawfiqTech provides premium AI automation services — AI Assistants, Chatbots, Receptionists, and Calendar Automations — to help businesses reduce redundancies, save money, and scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
