'use client'

import {
  PlusGrid,
  PlusGridItem,
  PlusGridRow,
} from '@/components/core/plus-grid'
import { useTranslations } from 'next-intl'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Subheading } from './text'

function CallToAction() {
  const t = useTranslations('footer.cta')

  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>{t('heading')}</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          {t('title')}
          <br />
          {t('subtitle')}
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        {t('description')}
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="https://bestartup.ai/register">
          {t('button')}
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  const t = useTranslations('footer.sitemap')

  return (
    <>
      <div>
        <SitemapHeading>{t('product.title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing">{t('product.pricing')}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('company.title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">{t('company.blog')}</SitemapLink>
          <SitemapLink href="/company">{t('company.about')}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('support.title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">{t('support.help_center')}</SitemapLink>
          <SitemapLink href="#">{t('support.community')}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('legal.title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/terms">{t('legal.terms')}</SitemapLink>
          <SitemapLink href="/privacy">{t('legal.privacy')}</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="currentColor" {...props}>
        <g fill="none">
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"
          />
          <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.facebook.com/share/1BvJ9H311R/"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://www.instagram.com/bestartup.ai?igsh=MXV5bGdhZGs3MndjeA=="
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/bestartupai/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  const t = useTranslations('footer')

  return <div className="text-sm/6 text-gray-950">{t('copyright')}</div>
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Link href="/" title="Home">
                      <span className="hidden px-4 font-bold md:inline-block">
                        Be Startup
                      </span>
                    </Link>
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
