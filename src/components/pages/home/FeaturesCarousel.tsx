'use client'

import { useRtl } from '@/hooks/use-rtl'
import { motion, type PanInfo } from 'framer-motion'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

// --- TYPE DEFINITIONS ---
type TFunc = ReturnType<typeof useTranslations>
type Feature = { tag: string; title: string }

const ArrowIcon: FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={direction === 'left' ? 'M15 6L9 12L15 18' : 'M9 6L15 12L9 18'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const CardArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
)

// --- SUB-COMPONENTS ---

const CarouselCard: FC<{
  feature: Feature
  position: number
  onClick: () => void
}> = ({ feature, position, onClick }) => {
  const isCenter = position === 0
  const getVariant = () =>
    isCenter
      ? 'center'
      : position === -1
        ? 'left'
        : position === 1
          ? 'right'
          : 'hidden'
  const variants = {
    hidden: { opacity: 0, scale: 0.6, x: `${position * 60}%` },
    left: { opacity: 1, scale: 0.8, x: '-60%', zIndex: 20 },
    center: { opacity: 1, scale: 1, x: '0%', zIndex: 30 },
    right: { opacity: 1, scale: 0.8, x: '60%', zIndex: 20 },
  }

  return (
    <motion.div
      key={feature.tag}
      className="group absolute flex h-[280px] w-full max-w-lg cursor-pointer flex-col justify-between rounded-3xl bg-white p-8 text-slate-900 shadow-xl ring-1 ring-slate-200 dark:bg-[#202442] dark:text-white dark:ring-0"
      style={{ transformOrigin: 'center' }}
      variants={variants}
      initial="hidden"
      animate={getVariant()}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
      onClick={onClick}
    >
      <div>
        <div
          className={`inline-block rounded-full border px-3 py-1 text-sm font-medium transition-all duration-300 ${isCenter ? 'border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-400/50 dark:bg-purple-900/50 dark:text-purple-200' : 'border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400'}`}
        >
          {feature.tag}
        </div>
        <p className="mt-6 text-2xl font-semibold leading-relaxed text-slate-800 dark:text-white">
          {feature.title}
        </p>
      </div>
      <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-black/50 transition-all duration-300 group-hover:bg-black/10 group-hover:text-black ltr:right-6 rtl:left-6 dark:bg-white/5 dark:text-white/50 dark:group-hover:bg-white/10 dark:group-hover:text-white">
        <CardArrowIcon />
      </div>
    </motion.div>
  )
}

const NavigationButtons: FC<{
  t: TFunc
  onPrev: () => void
  onNext: () => void
}> = ({ t, onPrev, onNext }) => (
  <div className="mt-8 flex items-center justify-center gap-4 rtl:flex-row-reverse">
    <button
      onClick={onPrev}
      aria-label={t('prevAriaLabel')}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:scale-110 hover:border-slate-400 hover:bg-black/5 hover:text-slate-800 active:scale-100 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-white/5 dark:hover:text-white"
    >
      <ArrowIcon direction={'left'} />
    </button>
    <button
      onClick={onNext}
      aria-label={t('nextAriaLabel')}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:scale-110 hover:border-slate-400 hover:bg-black/5 hover:text-slate-800 active:scale-100 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-white/5 dark:hover:text-white"
    >
      <ArrowIcon direction={'right'} />
    </button>
  </div>
)

// --- MAIN COMPONENT ---
export const FeaturesCarousel = () => {
  const t = useTranslations('FeaturesCarousel')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isRtl = useRtl()
  const containerRef = useRef<HTMLDivElement>(null)

  const features = (t.raw('features') || []) as Feature[]

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % features.length)
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length)

  useEffect(() => {
    if (isPaused || features.length === 0) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [activeIndex, isPaused, features.length])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') isRtl ? handlePrev() : handleNext()
      if (e.key === 'ArrowLeft') isRtl ? handleNext() : handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isRtl, features.length])

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold) isRtl ? handlePrev() : handleNext()
    else if (info.offset.x > swipeThreshold) isRtl ? handleNext() : handlePrev()
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-50 py-24 sm:py-32 dark:bg-gradient-to-b dark:from-[#101635] dark:to-[#0A0D1F]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          {t('title_part1')}{' '}
          <span className="dark:[#8F5BD7] inline-block bg-gradient-to-r from-purple-600 via-[#8F5BD7] to-cyan-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
            {t('title_gradient')}
          </span>{' '}
          {t('title_part2')}
        </h2>

        <div
          ref={containerRef}
          className="relative mt-16 flex h-[350px] items-center justify-center"
        >
          <motion.div className="absolute h-[300px] w-full max-w-xl rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/40" />
          <motion.div
            className="flex h-full w-full items-center justify-center"
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.1}
            onDragEnd={onDragEnd}
          >
            {features.map((feature, index) => {
              const offset = isRtl ? activeIndex - index : index - activeIndex
              const position = (offset + features.length) % features.length
              const normalizedPosition =
                position === features.length - 1 ? -1 : position
              return (
                <CarouselCard
                  key={feature.tag}
                  feature={feature}
                  position={normalizedPosition}
                  onClick={() => setActiveIndex(index)}
                />
              )
            })}
          </motion.div>
        </div>
        <NavigationButtons t={t} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  )
}
