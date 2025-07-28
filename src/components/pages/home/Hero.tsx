'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  HeroBackground,
  HeroCta,
  HeroHeadline,
  HeroImagePreview,
} from './hero-elements'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
} as const

export const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#101635]">
      <HeroBackground />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-12 sm:px-6 sm:pb-16 sm:pt-40 lg:px-8">
        <motion.div
          className="mx-auto w-full max-w-7xl space-y-8 text-center md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <HeroHeadline t={t} />
          </motion.div>

          <motion.div
            className="mx-auto max-w-3xl px-2 sm:px-4"
            variants={itemVariants}
          >
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl dark:text-slate-300">
              {t('description')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroCta t={t} />
          </motion.div>

          <motion.div className="relative pt-8" variants={itemVariants}>
            <HeroImagePreview t={t} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}