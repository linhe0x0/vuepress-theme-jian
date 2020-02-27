const alert = require('./plugins/alert')

module.exports = {
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    '@vuepress/active-header-links',
    [
      '@vuepress/medium-zoom',
      {
        selector: '.markdown-body :not(a) > img',
      },
    ],
    alert,
  ],
}
