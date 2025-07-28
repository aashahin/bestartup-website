'use client'

import { ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Socials = () => (
  <div className="flex items-center space-x-4">
    <Link
      href="https://www.facebook.com/share/1BvJ9H311R/"
      className="text-slate-400 transition-colors hover:text-white"
      aria-label="Facebook"
    >
      <Facebook size={20} />
    </Link>
    <Link
      href="https://www.instagram.com/bestartup.ai?igsh=MXV5bGdhZGs3MndjeA=="
      className="text-slate-400 transition-colors hover:text-white"
      aria-label="Instagram"
    >
      <Instagram size={20} />
    </Link>
    <Link
      href="https://www.linkedin.com/company/bestartupai/"
      className="text-slate-400 transition-colors hover:text-white"
      aria-label="LinkedIn"
    >
      <Linkedin size={20} />
    </Link>
  </div>
)

const ScrollToTopButton = ({
  'aria-label': ariaLabel,
}: {
  'aria-label': string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <button
      onClick={scrollToTop}
      aria-label={ariaLabel}
      className={`fixed bottom-8 end-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 bg-[#120F2B] text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-[#120F2B] hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-[#0A071A]/50 dark:hover:bg-[#0A071A] ${
        isVisible
          ? 'scale-100 opacity-100'
          : 'pointer-events-none scale-90 opacity-0'
      }`}
    >
      <ArrowUp size={24} />
    </button>
  )
}

export const Footer = () => {
  const t = useTranslations('Footer')

  const footerLinks = [
    { href: '/about', label: t('about') },
    { href: '/faqs', label: t('faqs') },
    { href: '/contact', label: t('contact') },
    { href: '/privacy', label: t('privacy') },
  ]

  return (
    <footer className="relative bg-[#0A071A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main content grid: Stacks on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: About */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Back to homepage">
              <Image
                src="/logo-dark.svg"
                alt="Bestartup Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-slate-400">{t('mission')}</p>
          </div>

          {/* Column 2: Company Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-white">{t('company')}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-white">{t('followUs')}</h3>
            <div className="mt-4">
              <Socials />
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="mt-16 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Bestartup. {t('copyright')}
          </p>
        </div>
      </div>

      <ScrollToTopButton aria-label={t('scrollToTopAria')} />
    </footer>
  )
}
