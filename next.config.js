const withPWA = require('next-pwa')({
  dest: 'public',
  // eslint: {
  //   ignoreDuringBuilds: true,
  //   dirs: [""]
  // }
})
module.exports = withPWA()