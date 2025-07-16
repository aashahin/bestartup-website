import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

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
      }
    ]
  },
  experimental: {
    optimizeCss: true,
    inlineCss: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};

const withNextIntl = createNextIntlPlugin();

const intlNextConfig = withNextIntl(nextConfig);

export default withPayload(intlNextConfig, { devBundleServerPackages: false });