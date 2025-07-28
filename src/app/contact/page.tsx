// app/[locale]/contact/layout.tsx

import ContactPage from '@/components/pages/contact/ContactPage'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

// This is a Server Component, so generateMetadata is allowed here.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

// This layout simply passes through the page component as its child.
export default function ContactLayout() {
  return <ContactPage />
}
