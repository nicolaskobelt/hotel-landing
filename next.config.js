const { i18n } = require('./next-i18next.config');

module.exports = {
  typescript: {
    // !! WARN !!
    // Only for testing. Disable in production.
    ignoreBuildErrors: true,
  },
  i18n,
  reactStrictMode: true,
}
