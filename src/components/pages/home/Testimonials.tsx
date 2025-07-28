'use client'

import { dashboardUrl } from '@/utils/utils'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Quote,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

// --- Types ---
interface Testimonial {
  id: string
  quoteKey: string
  nameKey: string
  positionKey: string
  companyKey: string
  avatar: string
  rating: number
}

// --- Data for Testimonials ---
const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quoteKey: 'testimonial1.quote',
    nameKey: 'testimonial1.name',
    positionKey: 'testimonial1.position',
    companyKey: 'testimonial1.company',
    avatar: '/avatars/avatar-1.png',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quoteKey: 'testimonial2.quote',
    nameKey: 'testimonial2.name',
    positionKey: 'testimonial2.position',
    companyKey: 'testimonial2.company',
    avatar: '/avatars/avatar-2.png',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quoteKey: 'testimonial3.quote',
    nameKey: 'testimonial3.name',
    positionKey: 'testimonial3.position',
    companyKey: 'testimonial3.company',
    avatar: '/avatars/avatar-3.png',
    rating: 5,
  },
]

// --- Helper Components ---
const StarRating = ({
  rating = 5,
  animated = false,
}: {
  rating?: number
  animated?: boolean
}) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        initial={animated ? { scale: 0, rotate: -180 } : false}
        animate={animated ? { scale: 1, rotate: 0 } : false}
        transition={
          animated
            ? { delay: i * 0.1, type: 'spring', stiffness: 200 }
            : undefined
        }
      >
        <Star
          className={`h-5 w-5 transition-colors ${
            i < rating
              ? 'fill-current text-amber-400'
              : 'text-slate-300 dark:text-slate-600'
          }`}
        />
      </motion.div>
    ))}
  </div>
)

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) => {
  const t = useTranslations('TestimonialsAndCta.testimonials')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="group relative flex flex-col rounded-2xl border border-slate-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-slate-300/50 hover:shadow-xl sm:p-8 dark:border-slate-700/50 dark:bg-slate-800/40 dark:hover:border-slate-600/50 dark:hover:bg-slate-800/60"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#AB84E1] to-purple-600 shadow-lg">
          <Quote className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4 mt-4">
        <StarRating rating={testimonial.rating} animated={isInView} />
      </div>

      {/* Quote */}
      <blockquote className="flex-grow">
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          "{t(testimonial.quoteKey)}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex-grow">
          <div className="text-base font-semibold text-slate-900 dark:text-white">
            {t(testimonial.nameKey)}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {t(testimonial.positionKey)} • {t(testimonial.companyKey)}
          </div>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#AB84E1]/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
    </motion.div>
  )
}

// --- Main Component ---
export const TestimonialsAndCta = () => {
  const t = useTranslations('TestimonialsAndCta')
  const [businessDescription, setBusinessDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ctaRef = useRef(null)
  const testimonialsRef = useRef(null)
  const isInView = useInView(ctaRef, { once: true, margin: '-50px' })
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: '-100px',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Handle success (show toast, redirect, etc.)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-20 sm:py-28 dark:from-slate-900 dark:via-[#0F172A] dark:to-indigo-950/20">
      {/* Background decorations */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#AB84E1]/10 to-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-20 sm:space-y-36">
          {/* CTA Section */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="mb-12 text-center">
              <motion.h2
                className="mb-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-indigo-100 dark:to-white"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('cta.title')}
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('cta.subtitle')}
              </motion.p>
            </div>

            <motion.div
              className="relative rounded-3xl border border-slate-200/50 bg-white/70 p-8 shadow-2xl backdrop-blur-sm sm:p-12 dark:border-slate-700/50 dark:bg-slate-800/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <textarea
                    rows={5}
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                    placeholder={t('cta.placeholder')}
                    className="w-full resize-none rounded-2xl border-2 border-slate-200 bg-white/80 p-6 text-slate-800 backdrop-blur-sm transition-all placeholder:text-slate-500 focus:border-[#AB84E1] focus:ring-4 focus:ring-[#AB84E1]/20 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                    aria-label={t('cta.ariaLabel')}
                  />
                  <div className="absolute bottom-4 right-4 text-sm text-slate-400">
                    {businessDescription.length}/500
                  </div>
                </div>

                <Link
                  href={dashboardUrl}
                  className="group relative mx-auto flex w-fit items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#AB84E1] to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-[#AB84E1]/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {t('cta.submitting')}
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      {t('cta.button')}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Link>
              </form>

              {/* Floating elements */}
              <div className="absolute -right-6 -top-6 h-12 w-12 animate-pulse rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20" />
              <div className="absolute -bottom-4 -left-4 h-8 w-8 animate-bounce rounded-full bg-gradient-to-br from-green-400 to-[#AB84E1] opacity-30" />
            </motion.div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0 }}
            animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isTestimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:to-slate-300">
                {t('testimonials.title')}
              </h2>
              <div className="flex items-center justify-center gap-4 text-lg text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-[#AB84E1]" />
                  <span className="font-semibold text-[#AB84E1] dark:text-[#AB84E1]">
                    {t('testimonials.userCount')}
                  </span>
                </div>
                <span>{t('testimonials.subtitle')}</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>

            {/* Trust indicators */}
            <motion.div
              className="mt-16 border-t border-slate-200/50 pt-12 dark:border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTestimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>{t('testimonials.trustIndicators.verified')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-amber-400" />
                  <span>{t('testimonials.trustIndicators.rating')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#AB84E1]" />
                  <span>{t('testimonials.trustIndicators.activeUsers')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
