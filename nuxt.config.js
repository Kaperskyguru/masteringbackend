export default {
  vue: {
    config: {
      productionTip: process.env.NODE_ENV !== 'production',
      devtools: process.env.NODE_ENV !== 'production',
    },
  },
  devtools: process.env.NODE_ENV !== 'production',
  dev: process.env.NODE_ENV !== 'production',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [{ src: 'https://use.fontawesome.com/3889c7d65e.js' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '~/plugins/localStorage', ssr: false },
    { src: '~/plugins/vue-full-loading', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isServer }) {
      config.externals = config.externals || {}
      if (!isServer) {
        config.node = {
          fs: 'empty',
        }

        if (Array.isArray(config.externals)) {
          config.externals.push({
            puppeteer: require('puppeteer'),
          })
        } else {
          config.externals.puppeteer = require('puppeteer')
        }
      }

      return config
    },
  },
}
