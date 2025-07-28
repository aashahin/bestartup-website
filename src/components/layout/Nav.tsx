'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { setUserLocale } from '@/services/locale'
import { dashboardUrl } from '@/utils/utils'

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme } = useTheme()

  const t = useTranslations('Navbar')
  const locale = useLocale()
  const router = useRouter()

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/faqs', label: t('faqs') },
    { href: '/contact', label: t('contact') },
    { href: '/privacy', label: t('privacy') },
  ]

  const handleLocaleChange = async () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en'
    await setUserLocale(nextLocale);
    router.refresh();
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed start-1/2 top-4 z-50 mx-auto hidden w-full max-w-7xl -translate-x-1/2 transform px-4 lg:flex xl:px-6 rtl:translate-x-1/2">
        <div className="flex h-16 w-full items-center justify-between rounded-2xl border border-gray-200/80 bg-white/50 px-4 shadow-lg shadow-gray-900/5 backdrop-blur-xl xl:h-20 xl:px-6 dark:border-white/10 dark:bg-[#0B0515]/80 dark:shadow-2xl dark:shadow-black/20">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <Image
              src={'/logo-light.svg'}
              alt={t('logoAlt')}
              width={120}
              height={40}
              className="h-6 w-auto transition-transform group-hover:scale-105 xl:h-8 dark:hidden"
              priority
            />
            <Image
              src={'/logo-dark.svg'}
              alt={t('logoAlt')}
              width={120}
              height={40}
              className="hidden h-6 w-auto transition-transform group-hover:scale-105 xl:h-8 dark:block"
              priority
            />
          </Link>

          {/* Navigation Links (space-x-8 works automatically for RTL) */}
          <div className="hidden items-center space-x-6 lg:flex xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-slate-900 xl:text-base dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
                {/* start-0 works automatically for RTL */}
                <span className="absolute -bottom-1 start-0 h-0.5 w-0 bg-gradient-to-r from-[#7F1CB0] to-[#DE9BFF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side controls (space-x-3 works automatically for RTL) */}
          <div className="flex items-center space-x-3 xl:space-x-4">
            {/* Get Started Button */}
            <Link
              href={dashboardUrl}
              className="group relative transform overflow-hidden rounded-xl bg-gradient-to-r from-[#AB84E1] to-[#DE9BFF] px-4 py-2.5 text-sm font-semibold text-[#101635] shadow-[0_8px_32px_rgba(171,132,225,0.3)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(127,28,176,0.4)] xl:px-6 xl:py-3 xl:text-base">
              <span className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                <Image
                  src={'/icons/stars.svg'}
                  alt={t('starsIconAlt')}
                  width={20}
                  height={20}
                  className="h-4 w-4 xl:h-5 xl:w-5"
                />
                {t('getStarted')}
              </span>
            </Link>

            {/* Language Selector */}
            <button
              onClick={handleLocaleChange}
              aria-label={t('switchLanguageAria')}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white/50 text-xs font-medium uppercase text-slate-700 transition-all duration-200 hover:border-gray-300 hover:bg-white/70 xl:h-10 xl:w-10 xl:text-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {locale === 'en' ? 'ar' : 'en'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(
                  document.documentElement.classList.contains('dark')
                    ? 'light'
                    : 'dark',
                )
              }
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white/50 transition-all duration-200 hover:border-gray-300 hover:bg-white/70 xl:h-10 xl:w-10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              aria-label={t('toggleThemeAria')}
            >
              <Image
                src={'/icons/sun.svg'}
                alt={t('lightModeIconAlt')}
                width={20}
                height={20}
                className="h-4 w-4 text-slate-700 transition-transform group-hover:scale-110 xl:h-5 xl:w-5 dark:hidden"
              />
              <Image
                src={'/icons/moon.svg'}
                alt={t('darkModeIconAlt')}
                width={20}
                height={20}
                className="hidden h-4 w-4 text-white transition-transform group-hover:scale-110 xl:h-5 xl:w-5 dark:block"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION --- */}
      <nav className="fixed start-4 end-4 top-4 z-50 rounded-xl border border-gray-200/80 bg-white/50 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#0B0515]/95">
        <div className="sm:h-18 flex h-16 items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center active:scale-95"
            aria-label={t('toggleMenuAria')}
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center">
              {/* Added rtl:-rotate-45 to flip the hamburger icon's top bar */}
              <span
                className={`block h-0.5 w-5 bg-slate-800 transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? 'translate-y-0.5 rotate-45 rtl:-rotate-45' : ''}`}
              />
              <span
                className={`mt-1 block h-0.5 w-5 bg-slate-800 transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              {/* Added rtl:rotate-45 to flip the hamburger icon's bottom bar */}
              <span
                className={`mt-1 block h-0.5 w-5 bg-slate-800 transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45 rtl:rotate-45' : ''}`}
              />
            </div>
          </button>
          <Link
            href="/"
            className="flex-shrink-0 transition-transform active:scale-95"
          >
            <Image
              src={'/logo-icon.png'}
              alt={t('logoAlt')}
              width={60}
              height={60}
              className="h-12 w-auto sm:h-14"
            />
          </Link>
          <button
            onClick={handleLocaleChange}
            aria-label={t('switchLanguageAria')}
            className="flex h-10 w-10 items-center justify-center text-xs font-medium uppercase text-slate-700 active:scale-95 sm:text-sm dark:text-white"
          >
            {locale === 'en' ? 'ar' : 'en'}
          </button>
        </div>
        <div
          className={`absolute end-0 start-0 top-full overflow-hidden rounded-b-xl rounded-tl-xl rounded-tr-xl mt-2 border-x border-b border-gray-200/80 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#0B0515]/95 ${isMobileMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
        >
          <div className="space-y-2 px-4 py-4 sm:space-y-3 sm:px-6 sm:py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block transform rounded-lg px-4 py-3 text-base text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] sm:text-lg dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-2 opacity-0'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 sm:pt-6 dark:border-white/10">
              <Link
                href={dashboardUrl}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#AB84E1] to-[#DE9BFF] px-6 py-4 text-base font-semibold text-[#101635] shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.98] sm:text-lg">
                <Image
                  src={'/icons/stars.svg'}
                  alt={t('starsIconAlt')}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                {t('getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden dark:bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}