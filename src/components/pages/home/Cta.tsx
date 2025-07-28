'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { dashboardUrl } from '@/utils/utils'

// Renders the appropriate background effect for the current theme
const BackgroundEffects = ({ gridAriaLabel }: { gridAriaLabel: string }) => (
  <>
    {/* Light mode: Subtle grid pattern */}
    <div
      aria-label={gridAriaLabel}
      className="absolute inset-0 opacity-50 dark:hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '3rem 3rem',
        maskImage:
          'radial-gradient(ellipse at center, black 0%, transparent 80%)',
      }}
    />
    {/* Dark mode: Radial glow */}
    <div
      className="absolute inset-0 hidden dark:block"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(127, 28, 176, 0.1), transparent)',
      }}
    />
  </>
)

// Renders the correct wavy pattern SVG based on the theme
const WavyPattern = () => (
  <div className="pointer-events-none absolute bottom-0 end-0 h-full w-2/3" aria-hidden="true">
    {/* Light Mode SVG */}
    <svg className="absolute bottom-0 end-0 h-auto w-full dark:hidden" width="1000" height="500" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M-50,500 Q250,350 1050,400" stroke="#D1D5DB" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M-50,500 Q350,250 1050,300" stroke="#E5E7EB" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M-50,500 Q450,150 1050,200" stroke="#D1D5DB" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
    {/* Dark Mode SVG */}
    <svg className="absolute bottom-0 end-0 hidden h-auto w-full dark:block" width="1000" height="500" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M-50,500 Q250,350 1050,400" stroke="#7F1CB0" strokeWidth="1.5" strokeOpacity="0.1" />
      <path d="M-50,500 Q300,300 1050,350" stroke="#7F1CB0" strokeWidth="1.5" strokeOpacity="0.15" />
      <path d="M-50,500 Q350,250 1050,300" stroke="#DE9BFF" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M-50,500 Q400,200 1050,250" stroke="#DE9BFF" strokeWidth="1.5" strokeOpacity="0.15" />
      <path d="M-50,500 Q450,150 1050,200" stroke="#7F1CB0" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M-50,500 Q500,100 1050,150" stroke="#DE9BFF" strokeWidth="1.5" strokeOpacity="0.1" />
    </svg>
  </div>
);


export const CtaSection = () => {
  const t = useTranslations('Cta')

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 dark:bg-[#0A071A]">
      <BackgroundEffects gridAriaLabel={t('backgroundGridAria')} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Top Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            {t('question')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t('checkOut')}{' '}
            <Link href="/faqs" className="font-semibold text-purple-600 underline-offset-4 hover:underline dark:text-purple-400">
              {t('faqsLink')}
            </Link>{' '}
            {t('or')}{' '}
            <Link href="/contact" className="font-semibold text-purple-600 underline-offset-4 hover:underline dark:text-purple-400">
              {t('contactLink')}
            </Link>
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 text-start shadow-lg md:p-12 dark:border-transparent dark:bg-[#120F2B] dark:shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WavyPattern />
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('cardTitle')}</h3>
            <p className="mt-2 max-w-lg text-slate-600 dark:text-slate-400">
              {t('cardSubtitle')}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href={dashboardUrl}
                className="shadow-glow-primary group relative transform overflow-hidden rounded-2xl bg-gradient-to-r from-[#8F5BD7] to-[#AB84E1] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl">
                {t('joinButton')}
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('noCreditCard')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}