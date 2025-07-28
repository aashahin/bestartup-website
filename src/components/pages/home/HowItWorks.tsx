'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// --- TYPE DEFINITIONS ---
export interface Step {
  title: string
  description: string
  image: string
}

// --- CONSTANTS ---
const AUTO_TOGGLE_INTERVAL = 3000 // 3 seconds

/**
 * A declarative setInterval hook that automatically handles cleanup.
 * @param callback The function to be called on each interval.
 * @param delay The interval delay in milliseconds. Set to `null` to pause.
 */
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(null)

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

// --- SUB-COMPONENTS ---

const StepItem = ({
  step,
  index,
  isActive,
  onClick,
}: {
  step: Step
  index: number
  isActive: boolean
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    className="group relative cursor-pointer rounded-2xl p-4 transition-colors duration-300 hover:bg-slate-100/75 dark:hover:bg-slate-800/50"
  >
    {isActive && (
      <motion.div
        layoutId="active-background"
        className="absolute inset-0 rounded-2xl bg-violet-500/10"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}
    <div className="relative flex items-start">
      <motion.div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold transition-colors duration-300"
        animate={{
          backgroundColor: isActive ? '#7C3AED' : '#FFFFFF',
          color: isActive ? '#FFFFFF' : '#0F172A',
          border: isActive ? '2px solid #7C3AED' : '2px solid #E2E8F0',
        }}
      >
        {index + 1}
      </motion.div>
      <div className="ltr:ml-6 rtl:mr-6">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          {step.title}
        </h3>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              className="overflow-hidden text-slate-600 dark:text-slate-300"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: '0.5rem' }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {step.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  </div>
)

const StepImage = ({ activeStep }: { activeStep: Step | undefined }) => (
  <div className="sticky top-28 aspect-square h-auto w-full lg:aspect-[4/3]">
    <AnimatePresence mode="wait">
      {activeStep && (
        <motion.div
          key={activeStep.title}
          className="relative h-full w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Image
            src={activeStep.image}
            alt={activeStep.title}
            fill
            className="rounded-2xl object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

// --- MAIN COMPONENT (Using the custom hook for reliable auto-toggle) ---
export const HowItWorks = () => {
  const t = useTranslations('HowItWorks')
  const steps = (t.raw('steps') || []) as Step[]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const userHasInteracted = useRef(false)

  // The auto-toggle is now controlled declaratively
  const isAutoToggleActive =
    !isHovered && !userHasInteracted.current && steps.length > 1

  useInterval(
    () => {
      // This callback has access to the latest `activeIndex`
      // because the hook handles the stale closure problem.
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length)
    },
    // The delay is dynamic. Pass `null` to pause the interval.
    isAutoToggleActive ? AUTO_TOGGLE_INTERVAL : null,
  )

  const handleStepClick = (index: number) => {
    if (!userHasInteracted.current) {
      userHasInteracted.current = true // Stop auto-toggle permanently on first click
    }
    setActiveIndex(index)
  }

  return (
    <section className="bg-slate-50 py-24 sm:py-32 dark:bg-[#101635]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="mt-20 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Column: Steps */}
          <div className="relative">
            <div
              className="absolute bottom-5 top-5 w-px bg-slate-200 ltr:left-5 rtl:right-5 dark:bg-slate-700"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-y-2">
              {steps.map((step, index) => (
                <StepItem
                  key={step.title}
                  step={step}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => handleStepClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Images */}
          <StepImage activeStep={steps[activeIndex]} />
        </div>
      </div>
    </section>
  )
}
