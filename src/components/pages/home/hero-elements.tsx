'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import type { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { dashboardUrl } from '@/utils/utils'

// Correctly infer the type of the `t` function from the library
type TFunc = ReturnType<typeof useTranslations>

// Define a type for the component props using the inferred type
type WithTranslation = {
  t: TFunc
}

export const HeroBackground = () => (
  <>
    {/* Light Mode: Subtle grid and gradient */}
    <div className="absolute inset-0 hidden [background:radial-gradient(at_top_left,_#f3f4f6,_white)] dark:hidden" />
    <div
      className="absolute inset-0 hidden opacity-50 dark:hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '3rem 3rem',
        maskImage:
          'radial-gradient(ellipse at center, black 0%, transparent 70%)',
      }}
    />

    {/* Dark Mode: "Nebula" background effects */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#101635] via-[#1a1f4a] to-[#101635] opacity-0 dark:opacity-70" />
    <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform opacity-0 [background:radial-gradient(circle,rgba(147,51,234,0.3)_0%,rgba(147,51,234,0.1)_40%,transparent_70%)] dark:opacity-40" />
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 transform opacity-0 [background:radial-gradient(circle,rgba(59,130,246,0.25)_0%,rgba(59,130,246,0.08)_50%,transparent_70%)] dark:opacity-50" />
  </>
)

export const HeroHeadline = ({ t }: WithTranslation) => {
  // CORRECT: Call t.raw with the key *relative* to the 'Hero' namespace.
  const features = t.raw('headline_part4_gradient') as string[]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <div className="space-y-3 md:space-y-4">
      <h1 className="text-2xl font-bold leading-tight tracking-tighter text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
        {/* CORRECT: Use relative keys */}
        {t('headline_part1')} {t('headline_part2')}
      </h1>
      <p className="flex min-h-[1.2em] flex-wrap items-baseline justify-center gap-x-3 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="text-slate-800 dark:text-white">
          {t('headline_part3')}{' '}
        </span>
        <span className="relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-[#7F1CB0] via-[#B967E8] to-[#DE9BFF] bg-clip-text text-transparent"
            >
              {features[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </div>
  )
}

export const HeroCta = ({ t }: WithTranslation) => (
  <div className="flex flex-col items-center space-y-4">
    <Link
      href={dashboardUrl}
      className="shadow-glow-primary group relative transform overflow-hidden rounded-2xl bg-gradient-to-r from-[#8F5BD7] to-[#AB84E1] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl">
      <span className="relative z-10 flex items-center gap-2">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        {t('ctaButton')}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400">
      <svg
        className="h-4 w-4 text-green-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {t('ctaSubtext')}
    </div>
  </div>
)

export const HeroImagePreview = ({ t }: WithTranslation) => (
  <div className="relative mx-auto max-w-6xl">
    {/* Dark mode only glow effects */}
    <div className="absolute -inset-8 hidden rounded-3xl opacity-60 blur-3xl [background:radial-gradient(circle,rgba(147,51,234,0.4)_0%,rgba(147,51,234,0.15)_50%,transparent_70%)] dark:block" />
    <div className="absolute -inset-4 hidden rounded-3xl opacity-70 blur-2xl [background:radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.05)_40%,transparent_60%)] dark:block" />

    <Image
      src={'/hero/preview-light.png'}
      alt={t('imageAlt')}
      width={1312}
      height={505}
      className="h-auto w-full scale-[1.02] transition-transform duration-500 hover:scale-[1.04] dark:hidden"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1312px"
    />
    <Image
      src={'/hero/preview-dark.png'}
      alt={t('imageAlt')}
      width={1312}
      height={505}
      className="hidden h-auto w-full scale-[1.02] transition-transform duration-500 hover:scale-[1.04] dark:block"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1312px"
    />
  </div>
)