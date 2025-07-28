import { FeatureCard } from '@/components/pages/about/FeatureCard'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'AboutPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage')

  const featureKeys = Object.keys(t.raw('features')) as Array<
    keyof ReturnType<typeof t.raw>['features']
  >

  return (
    <>
      {/* Improved Background Ambiance */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="about-gradient">
                <stop stopColor="#E9D5FF" />
                <stop offset="1" stopColor="#D946EF" />
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#about-gradient)"
              className="opacity-40 dark:hidden"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#about-gradient)"
              className="hidden dark:block"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent pt-32 text-slate-800 lg:pt-36 dark:text-white">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-32 lg:px-8">
          {/* Section 1: Hero Section */}
          <section className="mb-20 text-center md:mb-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              {t('whatIsTitle')}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              {t('kickStartDescription')}
            </p>
          </section>

          {/* Section 2: The Feature Grid */}
          <section>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {t('featuresSectionTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featureKeys.map((key) => (
                <FeatureCard
                  key={key as string}
                  title={t(`features.${key as string}.title`)}
                  description={t(`features.${key as string}.description`)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
