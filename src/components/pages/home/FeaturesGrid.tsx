'use client'

import React, { useState } from 'react'
import {
  Copy, Check, LineChart, Mic, Type, Bold, Italic, Underline,
  Strikethrough, Link, MousePointer2, Image,
  Sparkles, Bot, Zap, ShieldOff, Target, Briefcase, FileText, Wand2,
  LayoutTemplate, Search, BrainCircuit, Play
} from 'lucide-react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

type TabName = 'business' | 'content' | 'media' | 'technical';

interface Feature {
  id: string
  titleKey: string
  descriptionKey: string
  category: TabName
  content: React.ReactNode
  className?: string
}


// --- REFINED FEATURE COMPONENTS ---

// Generic icon with a more appealing background
const FeatureIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative flex h-full min-h-[150px] items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900/50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200/80 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50" />
    <Icon className="relative h-16 w-16 md:h-20 md:w-20 text-slate-400 dark:text-slate-500" strokeWidth={1} />
  </div>
);

// Business & Planning Components
function SWOTAnalysis() {
  const items = [
    { textKey: 'swot.s', labelKey: 'swot.strengths', Icon: Zap, color: 'text-green-500 dark:text-green-400' },
    { textKey: 'swot.w', labelKey: 'swot.weaknesses', Icon: ShieldOff, color: 'text-red-500 dark:text-red-400' },
    { textKey: 'swot.o', labelKey: 'swot.opportunities', Icon: Target, color: 'text-blue-500 dark:text-blue-400' },
    { textKey: 'swot.t', labelKey: 'swot.threats', Icon: Briefcase, color: 'text-yellow-500 dark:text-yellow-400' },
  ];
  const t = useTranslations('Features.cards');
  return (
    <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 dark:bg-[#0A0E1A]">
      <div className="w-full">
        <h4 className="mb-4 text-center text-lg font-semibold text-slate-800 dark:text-slate-200">{t('swot.title')}</h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
          {items.map(item => (
            <div key={item.textKey} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-slate-100 text-2xl font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                {t(item.textKey)}
              </div>
              <p className={`mt-2 text-sm font-semibold ${item.color}`}>{t(item.labelKey)}</p>
              <item.Icon className={`mt-1 h-5 w-5 ${item.color}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MentorChat() {
  return (
    <div className="relative flex h-full min-h-[150px] w-full flex-col items-start justify-center gap-2 rounded-lg bg-slate-100 p-4 dark:bg-slate-900/50">
      <div className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">Business</div>
      <div className="relative rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white">
        <BrainCircuit className="absolute -top-2 h-5 w-5 -rotate-12 start-[-0.5rem] rtl:-scale-x-100" />
        Development
      </div>
      <div className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">Marketing</div>
    </div>
  )
}

// Content & Communication Components
function LandingPageMock() {
  return (
    <div className="h-full w-full rounded-lg bg-white p-2 shadow-2xl dark:bg-slate-800">
      <div className="h-full w-full rounded-md border border-slate-200 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="h-4 w-full rounded-sm bg-slate-200 dark:bg-slate-700" />
        <div className="mt-2 h-2 w-3/4 rounded-sm bg-slate-200 dark:bg-slate-700" />
        <div className="mt-1 h-2 w-1/2 rounded-sm bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}

// Media & Design Components
function VoiceOver() {
  const bars = Array.from({ length: 25 }, () => Math.floor(Math.random() * 16) + 4);
  return (
    <div className="flex h-full min-h-[150px] items-center justify-between gap-4 rounded-lg bg-slate-100 p-6 dark:bg-slate-900/50">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 dark:bg-white">
        <Play className="h-5 w-5 text-white dark:text-slate-900" fill="currentColor"/>
      </div>
      <div className="flex flex-grow items-center gap-1 overflow-hidden">
        {bars.slice(0, 10).map((h, i) => <div key={i} className="w-1 rounded-full bg-slate-300 dark:bg-slate-500" style={{ height: `${h}px` }} />)}
        {bars.slice(10).map((h, i) => <div key={i + 15} className="w-1 rounded-full bg-violet-500" style={{ height: `${h}px` }} />)}
      </div>
      <button className="flex flex-shrink-0 items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700">
        <Sparkles className="h-4 w-4" />
        <span>Generate</span>
      </button>
    </div>
  );
}

// Technical & Automation Components
function WebsiteAnalyzer() {
  return (
    <div className="relative flex h-full min-h-[200px] w-full items-center justify-center rounded-lg bg-slate-100 p-4 dark:bg-slate-900/50">
      <div className="absolute top-4 start-4 flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-green-600 dark:bg-slate-800 dark:text-green-400">
        <div className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
        14.12%
      </div>
      <LineChart className="h-24 w-24 text-green-500/80 dark:text-green-400/80" strokeWidth={1.5} />
    </div>
  )
}

function CodeBlock() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('function updateGutters(cm) { ... }');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className="relative h-full min-h-[200px] w-full rounded-lg bg-slate-100 p-4 font-mono text-sm text-slate-500 dark:bg-[#0d1117] dark:text-slate-300">
      <div className="absolute top-2 end-2 flex gap-2">
        <button onClick={handleCopy} className="rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-300 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre><code>{`function updateGutters(cm) {
  const gutters = cm.display.gutters;
  const specs = cm.options.gutters;
  // Implementation...
}`}</code></pre>
    </div>
  )
}

function SpeechToText() {
  return (
    <div className="relative flex h-full min-h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900/50">
      <div className="absolute h-48 w-48 rounded-full bg-teal-500/5 dark:bg-teal-500/10" />
      <div className="absolute h-32 w-32 rounded-full bg-teal-500/10 dark:bg-teal-500/20" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-teal-500">
        <Mic className="h-10 w-10 text-white" />
      </div>
    </div>
  )
}

function PresentationMaker() {
  return (
    <div className="relative flex h-full min-h-[200px] w-full flex-col justify-end overflow-hidden rounded-lg bg-slate-100 p-4 dark:bg-slate-900/50">
      <div className="flex w-fit items-center gap-1 rounded-lg border border-slate-200 bg-white p-1.5 dark:border-slate-700 dark:bg-slate-800">
        {[Bold, Italic, Underline, Strikethrough, Type, Link].map((Icon, i) =>
          <button key={i} className="rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
            <Icon className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="absolute bottom-8 end-12">
        <div className="relative rounded-md bg-white px-4 py-2 text-sm text-slate-700 shadow-lg ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
          Analysis...
          <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white ring-1 ring-slate-200 end-[-0.375rem] dark:bg-slate-900 dark:ring-slate-700" />
        </div>
        <MousePointer2 className="absolute -bottom-4 -end-4 h-8 w-8 text-sky-500 dark:text-sky-400 rtl:-scale-x-100" />
      </div>
    </div>
  )
}

// --- DATA CONFIGURATION (WITH IMPROVED LAYOUTS) ---
const TABS: TabName[] = ['business', 'content', 'media', 'technical']

// ⭐ UPDATED: The classNames are now designed for a 4-column large grid
const FEATURES_DATA: Feature[] = [
  // Business & Planning (5 items) -> Hero (2x2) + 4 small (1x1)
  {
    id: 'biz-planner',
    titleKey: 'biz-planner.title',
    descriptionKey: 'biz-planner.description',
    category: 'business',
    className: 'lg:col-span-2 lg:row-span-2',
    content: <SWOTAnalysis />
  },
  { id: 'bestartup-gpt', titleKey: 'bestartup-gpt.title', descriptionKey: 'bestartup-gpt.description', category: 'business', content: <FeatureIcon Icon={Bot} /> },
  { id: 'ai-templates', titleKey: 'ai-templates.title', descriptionKey: 'ai-templates.description', category: 'business', content: <FeatureIcon Icon={LayoutTemplate} /> },
  { id: 'ai-mentors', titleKey: 'ai-mentors.title', descriptionKey: 'ai-mentors.description', category: 'business', content: <MentorChat /> },
  { id: 'image-analyzer-content', titleKey: 'image-analyzer-content.title', descriptionKey: 'image-analyzer-content.description', category: 'business', content: <FeatureIcon Icon={Search} /> },

  // Content & Communication (4 items) -> 2 large (1x2) + 2 small (1x1)
  {
    id: 'landing-page',
    titleKey: 'landing-page.title',
    descriptionKey: 'landing-page.description',
    category: 'content',
    className: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    content: <LandingPageMock />
  },
  {
    id: 'doc-analyzer',
    titleKey: 'doc-analyzer.title',
    descriptionKey: 'doc-analyzer.description',
    category: 'content',
    className: 'lg:col-span-2',
    content: <FeatureIcon Icon={FileText} />
  },
  { id: 'article-wizard', titleKey: 'article-wizard.title', descriptionKey: 'article-wizard.description', category: 'content', content: <FeatureIcon Icon={Wand2} /> },
  { id: 'content-editor', titleKey: 'content-editor.title', descriptionKey: 'content-editor.description', category: 'content', content: <FeatureIcon Icon={Type} /> },

  // Media & Design (3 items) -> 1 full-width + 2 half-width
  {
    id: 'voice-over',
    titleKey: 'voice-over.title',
    descriptionKey: 'voice-over.description',
    category: 'media',
    className: 'sm:col-span-2 lg:col-span-4',
    content: <VoiceOver />
  },
  {
    id: 'image-generator',
    titleKey: 'image-generator.title',
    descriptionKey: 'image-generator.description',
    category: 'media',
    className: 'lg:col-span-2',
    content: <FeatureIcon Icon={Image} />
  },
  {
    id: 'presentation',
    titleKey: 'presentation.title',
    descriptionKey: 'presentation.description',
    category: 'media',
    className: 'lg:col-span-2',
    content: <PresentationMaker />
  },

  // Technical & Automation (4 items) -> Balanced 2x2 grid
  {
    id: 'analyzer',
    titleKey: 'analyzer.title',
    descriptionKey: 'analyzer.description',
    category: 'technical',
    className: 'lg:col-span-2',
    content: <WebsiteAnalyzer />
  },
  {
    id: 'code-gen',
    titleKey: 'code-gen.title',
    descriptionKey: 'code-gen.description',
    category: 'technical',
    className: 'lg:col-span-2',
    content: <CodeBlock />
  },
  {
    id: 'speech-to-text',
    titleKey: 'speech-to-text.title',
    descriptionKey: 'speech-to-text.description',
    category: 'technical',
    className: 'lg:col-span-2',
    content: <SpeechToText />
  },
  // Re-added this for a 4-item grid
  {
    id: 'ai-mentors-tech', // Duplicating for layout, use a real feature here
    titleKey: 'ai-mentors.title',
    descriptionKey: 'ai-mentors.description',
    category: 'technical',
    className: 'lg:col-span-2',
    content: <MentorChat />
  },
]

// ⭐ NEW: Animation variants for staggered grid items
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


// --- MAIN COMPONENT ---
export const FeaturesTabs = () => {
  const t = useTranslations('Features')
  const [activeTab, setActiveTab] = useState<TabName>('business')
  const filteredFeatures = FEATURES_DATA.filter(f => f.category === activeTab);

  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-32 dark:bg-[#0A0E1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('title')}
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto mt-10 md:mt-16 flex w-full max-w-fit overflow-x-auto">
          <div className="flex w-full min-w-fit items-center justify-center gap-2 md:gap-4 rounded-full bg-slate-200/80 p-2 dark:bg-white/10 mx-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className='relative whitespace-nowrap rounded-full px-4 md:px-6 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 rounded-full bg-white shadow-lg dark:bg-slate-800"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={clsx(
                  "relative z-10",
                  activeTab === tab ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                )}>
                  {t(`tabs.${tab}`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Features Grid */}
        <div className="relative mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              // ⭐ UPDATED: New grid structure
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  // ⭐ UPDATED: Card styling and classNames
                  className={clsx(
                    'rounded-2xl bg-white p-6 backdrop-blur-sm transition-all duration-300 dark:bg-slate-900/50',
                    'border border-slate-200/80 dark:border-slate-800',
                    'hover:shadow-xl hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700',
                    feature.className,
                  )}
                >
                  <div className="flex h-full flex-col">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {t(`cards.${feature.titleKey}`)}
                    </h3>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(`cards.${feature.descriptionKey}`)}
                    </p>
                    <div className="mt-4 flex-grow">{feature.content}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}