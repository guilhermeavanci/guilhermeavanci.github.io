const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/guilhermeavanci.github.io/' : '',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
