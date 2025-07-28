import { FaqItem } from '@/components/pages/faqs/FaqItem'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'FaqsPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function FaqsPage() {
  const t = await getTranslations('FaqsPage')
  const faqs: { q: string; a: string }[] = t.raw('questions')

  return (
    <>
      {/* Background copied from the About page for consistency */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              {/* Using a unique ID for this page's gradient */}
              <radialGradient id="faq-gradient">
                <stop stopColor="#E9D5FF" />
                <stop offset="1" stopColor="#D946EF" />
              </radialGradient>
            </defs>
            {/* Light mode gradient with reduced opacity */}
            <rect
              width="100%"
              height="100%"
              fill="url(#faq-gradient)"
              className="opacity-40 dark:hidden"
            />
            {/* Dark mode gradient */}
            <rect
              width="100%"
              height="100%"
              fill="url(#faq-gradient)"
              className="hidden dark:block"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent pt-32 text-slate-900 lg:pt-36 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 md:pb-32 lg:px-8">
          {/* Header */}
          <header className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {t('title')}
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg dark:text-slate-300">
              {t('subtitle')}
            </p>
          </header>

          {/* FAQ Accordion List */}
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
