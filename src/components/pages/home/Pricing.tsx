'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Link from 'next/link'
import { dashboardUrl } from '@/utils/utils'

// --- TYPE DEFINITIONS ---
type BillingCycle = 'monthly' | 'yearly'

interface Plan {
  id: string
  nameKey: string
  descriptionKey: string
  prices: {
    monthly: number
    yearly: number
  }
  featuresKey: string[]
  popular?: boolean
  icon: React.ElementType
}

// --- DATA ---
const PRICING_PLANS: Plan[] = [
  {
    id: 'starter',
    nameKey: 'plans.starter.name',
    descriptionKey: 'plans.starter.description',
    prices: {
      monthly: 19,
      yearly: 190, // 10x monthly price
    },
    featuresKey: [
      'plans.starter.features.uses',
      'plans.starter.features.access',
      'plans.starter.features.templates',
      'plans.starter.features.support',
      'plans.starter.features.community',
    ],
    icon: Zap,
  },
  {
    id: 'professional',
    nameKey: 'plans.professional.name',
    descriptionKey: 'plans.professional.description',
    prices: {
      monthly: 24,
      yearly: 240, // 10x monthly price
    },
    featuresKey: [
      'plans.professional.features.uses',
      'plans.professional.features.access',
      'plans.professional.features.templates',
      'plans.professional.features.support',
      'plans.professional.features.export',
    ],
    popular: true,
    icon: Crown,
  },
]

// --- PRICING CARD COMPONENT ---
const PricingCard = ({ plan, cycle, index }: { plan: Plan; cycle: BillingCycle; index: number }) => {
  const t = useTranslations('PricingSection')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const price = cycle === 'monthly' ? plan.prices.monthly : plan.prices.yearly
  const monthlyPrice = cycle === 'yearly' ? plan.prices.yearly / 12 : plan.prices.monthly

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={clsx(
        'relative flex h-full flex-col rounded-2xl w-fit p-8 transition-all duration-300',
        'bg-white border shadow-lg hover:shadow-xl',
        'dark:bg-slate-800 dark:border-slate-700',
        plan.popular
          ? 'border-purple-500 ring-1 ring-purple-500 scale-105'
          : 'border-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
      )}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Star className="h-4 w-4 fill-current" />
            {t('mostPopular')}
          </motion.div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {t(plan.nameKey)}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {t(plan.descriptionKey)}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${price}-${cycle}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-bold text-slate-900 dark:text-white"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          <div className='flex flex-col'>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">USD</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {t(cycle === 'monthly' ? 'monthly' : 'yearly')}
            </span>
          </div>
        </div>

        {cycle === 'yearly' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-600 dark:text-slate-400"
          >
            ${monthlyPrice.toFixed(2)} {t('perMonth')} {t('billedYearly')}
          </motion.div>
        )}
      </div>

      {/* CTA Button */}
      <Link
        href={dashboardUrl}
        className={clsx(
          'w-full rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-200 mb-6',
          'focus:outline-none focus:ring-4 focus:ring-offset-2',
          plan.popular
            ? 'bg-purple-500 text-white hover:bg-purple-700 focus:ring-purple-500/30'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 focus:ring-slate-500/30'
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {t('subscribeNow')}
        </span>
      </Link>

      {/* Features List */}
      <div className="flex-1">
        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
          {t('featuresIncluded')}
        </h4>
        <ul className="space-y-3">
          {plan.featuresKey.map((featureKey, featureIndex) => (
            <motion.li
              key={featureKey}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                delay: 0.4 + featureIndex * 0.05,
                duration: 0.3
              }}
            >
              <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t(featureKey)}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>

    </motion.div>
  )
}

// --- BILLING TOGGLE COMPONENT ---
const BillingToggle = ({ cycle, onChange }: { cycle: BillingCycle; onChange: (cycle: BillingCycle) => void }) => {
  const t = useTranslations('PricingSection')

  return (
    <div className="flex items-center justify-center gap-4">
      <span className={clsx(
        "text-lg font-medium transition-colors",
        cycle === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
      )}>
        {t('monthly')}
      </span>

      <div className="relative">
        <div className="flex rounded-full bg-slate-200 p-1 dark:bg-slate-800">
          {(['monthly', 'yearly'] as const).map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className="relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300"
            >
              {cycle === option && (
                <motion.div
                  layoutId="billing-cycle-indicator"
                  className="absolute inset-0 rounded-full bg-purple-500 shadow-sm"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className={clsx(
                "relative transition-colors duration-200",
                cycle === option ? 'text-white' : 'text-slate-700 dark:text-slate-300'
              )}>
                {t(option)}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {cycle === 'yearly' && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -top-8 right-0 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full"
            >
              {t('save2Months')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className={clsx(
        "text-lg font-medium transition-colors",
        cycle === 'yearly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
      )}>
        {t('yearly')}
      </span>
    </div>
  )
}

// --- MAIN COMPONENT ---
export const PricingSection = () => {
  const t = useTranslations('PricingSection')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section className="bg-slate-50 py-20 sm:py-28 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BillingToggle cycle={billingCycle} onChange={setBillingCycle} />
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-12">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              cycle={billingCycle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}