import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

// This is a Server Component, so we can generate metadata directly.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'PrivacyPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function PrivacyPage() {
  const t = await getTranslations('PrivacyPage')
  // Use .raw to get the array of sections and type it for TypeScript
  const sections: { title: string; content: string }[] = t.raw('sections')

  return (
    <>
      {/* Consistent background effect from other pages */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="privacy-gradient">
                <stop stopColor="#E9D5FF" />
                <stop offset="1" stopColor="#D946EF" />
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#privacy-gradient)"
              className="opacity-40 dark:hidden"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#privacy-gradient)"
              className="hidden dark:block"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-32 lg:px-8">
          {/* Main content container with optimal width for reading */}
          <div className="mx-auto max-w-4xl">
            {/* Page Header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                {t('title')}
              </h1>
              <p className="mt-4 font-mono text-sm text-slate-500 dark:text-slate-400">
                {t('lastUpdated')}{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </p>
            </header>

            {/* Privacy Policy Content */}
            <div className="prose prose-slate dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline dark:prose-headings:text-white dark:prose-a:text-purple-400 mx-auto max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
