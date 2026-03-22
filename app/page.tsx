import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import Services         from '@/components/Services'
import HowItWorks       from '@/components/HowItWorks'
import Benefits         from '@/components/Benefits'
import Testimonials     from '@/components/Testimonials'
import Pricing          from '@/components/Pricing'
import ConsultationForm from '@/components/ConsultationForm'
import FAQ              from '@/components/FAQ'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <ConsultationForm />
      <FAQ />
      <Footer />
    </main>
  )
}
