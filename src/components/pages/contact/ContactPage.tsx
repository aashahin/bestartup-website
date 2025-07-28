'use client'

import { useState } from 'react'
import { Facebook, Instagram, Mail, Linkedin } from 'lucide-react'
import { useTranslations } from 'next-intl'

const FormInput = ({ ...props }) => (
  <input
    {...props}
    className="w-full rounded-lg border border-purple-200/70 bg-white/50 px-4 py-3 text-sm text-slate-800 transition-colors duration-300 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-white/10 dark:bg-slate-800/40 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:border-purple-500 dark:focus:ring-purple-500/50"
  />
)

export default function ContactPage() {
  const t = useTranslations('ContactPage')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(t('form.submitSuccess'))
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      {/* Background Effect */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="contact-gradient">
                <stop stopColor="#E9D5FF" />
                <stop offset="1" stopColor="#D946EF" />
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#contact-gradient)"
              className="opacity-40 dark:hidden"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#contact-gradient)"
              className="hidden dark:block"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent pt-32 lg:pt-36">
        <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 md:pb-32 lg:px-8">
          {/* Header Section */}
          <header className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {t('title')}
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg dark:text-slate-300">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:Support@Bestartup.Ai"
                className="inline-flex items-center gap-2 rounded-lg bg-white/50 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-inset ring-purple-200/70 transition-colors hover:bg-white/80 dark:bg-slate-800/40 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-slate-800/60"
              >
                <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                {t('emailButton')}
              </a>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/50 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-inset ring-purple-200/70 dark:bg-slate-800/40 dark:text-slate-200 dark:ring-white/10">
                <span>{t('socialsTitle')}</span>
                <div className="h-4 w-px bg-purple-200/70 dark:bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1BvJ9H311R/"
                    className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bestartupai/"
                    className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/bestartup.ai?igsh=MXV5bGdhZGs3MndjeA=="
                    className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Contact Form */}
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/40 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-lg md:p-8 dark:bg-slate-900/40 dark:ring-white/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('formTitle')}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {t('formSubtitle')}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormInput
                  type="text"
                  name="name"
                  placeholder={t('form.namePlaceholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder={t('form.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t('form.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-purple-200/70 bg-white/50 px-4 py-3 text-sm text-slate-800 transition-colors duration-300 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-white/10 dark:bg-slate-800/40 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:border-purple-500 dark:focus:ring-purple-500/50"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="shadow-glow-primary group relative transform w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#8F5BD7] to-[#AB84E1] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl"
                >
                  {t('form.submitButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
