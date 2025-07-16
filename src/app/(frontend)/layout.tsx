import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Raleway } from 'next/font/google'
import React from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Bestartup',
    default: 'Bestartup',
  },
}

const fontEn = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-sans',
  preload: true,
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${fontEn.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
