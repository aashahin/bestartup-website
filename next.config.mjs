import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  experimental: {
    inlineCss: true,
  },
}

const withNextIntl = createNextIntlPlugin()

const intlNextConfig = withNextIntl(nextConfig)

export default intlNextConfig
