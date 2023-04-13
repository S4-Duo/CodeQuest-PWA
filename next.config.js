const withPWA = require('next-pwa')({
  dest: 'public',
  eslint: {
    ignoreDuringBuilds: true
  }
})
module.exports = withPWA()