import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { FeaturedVehicles } from '@/components/home/FeaturedVehicles'
import { WhyUs } from '@/components/home/WhyUs'
import { FinancingCTA } from '@/components/home/FinancingCTA'
import { HowToBuy } from '@/components/home/HowToBuy'
import { TradeInCTA } from '@/components/home/TradeInCTA'
import { ContactSection } from '@/components/home/ContactSection'
import { useDocumentHead } from '@/hooks/useDocumentHead'
import { organizationJsonLd } from '@/lib/seo'

export default function Home() {
  useDocumentHead({
    title: 'AbRom Auto — Mașini rulate verificate în Alba Iulia',
    description:
      'Mașini rulate verificate în Alba Iulia. Kilometraj certificat, raport CarVertical gratuit, garanție 12 luni și finanțare rapidă în 30 de minute.',
    canonicalPath: '/',
    jsonLd: organizationJsonLd(),
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedVehicles />
      <WhyUs />
      <FinancingCTA />
      <HowToBuy />
      <TradeInCTA />
      <ContactSection />
    </>
  )
}
