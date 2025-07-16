'use client'

import { BentoSection, DarkBentoSection } from '@/components/core/bento-sections'
import { Button } from '@/components/core/button'
import { Container } from '@/components/core/container'
import { Footer } from '@/components/core/footer'
import { Gradient } from '@/components/core/gradient'
import { LogoCloud } from '@/components/core/logo-cloud'
import { Navbar } from '@/components/core/navbar'
// import { Testimonials } from '@/components/core/testimonials'
import { Heading } from '@/components/core/text'
import { useTranslations } from 'next-intl'

function Hero() {
  const t = useTranslations('hero')

  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('subtitle')}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://bestartup.ai/register">{t('cta_primary')}</Button>
            <Button variant="secondary" href="#">
              {t('cta_secondary')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const t = useTranslations('features')
  const platformT = useTranslations('platform')

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          {t('title')}
        </Heading>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          {t('subtitle')}
        </p>

        {/* Main Platform Showcase */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl -rotate-1" />
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="text-sm text-gray-500 font-medium">{platformT('name')}</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side - Process Steps */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('steps.step1.title')}</h3>
                      <p className="text-gray-600">{t('steps.step1.description')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('steps.step2.title')}</h3>
                      <p className="text-gray-600">{t('steps.step2.description')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('steps.step3.title')}</h3>
                      <p className="text-gray-600">{t('steps.step3.description')}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-80">

                    {/* Floating Cards */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 transform rotate-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full" />
                          <div className="text-sm font-medium text-gray-900">{platformT('progress.business_plan')}</div>
                        </div>
                        <div className="mt-2 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full w-full" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 transform -rotate-1 ml-8">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full" />
                          <div className="text-sm font-medium text-gray-900">{platformT('progress.code_ready')}</div>
                        </div>
                        <div className="mt-2 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-purple-500 rounded-full w-4/5" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 transform rotate-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full" />
                          <div className="text-sm font-medium text-gray-900">{platformT('progress.marketing')}</div>
                        </div>
                        <div className="mt-2 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-pink-500 rounded-full w-3/4" />
                        </div>
                      </div>
                    </div>

                    {/* Central AI Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="https://bestartup.ai/register" className="mr-4">
            {t('cta_primary')}
          </Button>
          <Button variant="secondary" href="#">
            {t('cta_secondary')}
          </Button>
        </div>

      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {/*<Testimonials />*/}
      <Footer />
    </div>
  )
}
