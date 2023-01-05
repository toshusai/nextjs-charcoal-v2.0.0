/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true
  },
  compiler: {
    styledComponents: true,
  },
  /** @param {import('webpack').Configuration} [config] */
  webpack(config) {
    return config
  },
}

module.exports = nextConfig
