import { Hero } from '@/components/pages/home/Hero'
import { FeaturesCarousel } from '@/components/pages/home/FeaturesCarousel'
import { HowItWorks } from '@/components/pages/home/HowItWorks'
import {  FeaturesTabs } from '@/components/pages/home/FeaturesGrid'
import { TestimonialsAndCta } from '@/components/pages/home/Testimonials'
import { PricingSection } from '@/components/pages/home/Pricing'
import { CtaSection } from '@/components/pages/home/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesCarousel/>
      <HowItWorks/>
      <FeaturesTabs/>
      <TestimonialsAndCta/>
      <PricingSection/>
      <CtaSection />
    </>
  )
}