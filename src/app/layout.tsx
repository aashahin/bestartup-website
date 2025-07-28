import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/pages/home/Footer'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Bestartup',
    default: 'Bestartup',
  },
}

export const dynamic = 'force-dynamic'

const fontEn = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  preload: true,
})
const fontAr = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  preload: true,
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const font = locale === 'ar' ? fontAr : fontEn

  return (
    <html
      lang={locale === 'ar' ? 'rtl' : 'ltr'}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body
        className={`${font.variable} bg-white text-slate-800 antialiased dark:bg-[#101635] dark:text-slate-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale}>
            <main className="relative min-h-screen">
              <Nav />
              <div className="mt-20 sm:mt-18">
                {children}
              </div>
              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
