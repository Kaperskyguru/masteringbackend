import Utils from './helpers/utils'

require('dotenv').config()
export default {
  env: {
    SLACK_TOKEN: process.env.SLACK_TOKEN,
    SLACK_INVITE_LINK_CODE: process.env.SLACK_INVITE_LINK_CODE,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    BASE_ENDPOINT_URL: process.env.BASE_ENDPOINT_URL,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    MAILCHIMP_KEY: process.env.MAILCHIMP_KEY,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },

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
    titleTemplate: '%s - Mastering Backend Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'The ultimate backend development blog for backend developers and engineers.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'The ultimate backend development blog for backend developers and engineers.',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The ultimate backend development blog for backend developers and engineers.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/logo300.png',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'backend,web development,backend development,laravel,backend developer,software development',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        hid: 'http-equiv',
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=utf-8',
      },
      { hid: 'language', name: 'language', content: 'English' },
      { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },
      { hid: 'author', name: 'author', content: 'Solomon Eseme' },

      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/ms-icon-144x144.png',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      {
        rel: 'stylesheet',
        // rel: 'preload',
        href:
          'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
      },
    ],

    script: [{ src: 'https://use.fontawesome.com/3889c7d65e.js', defer: true }],
  },
  router: {
    middleware: 'maintenance',
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.css',
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '~/plugins/vue-full-loading', ssr: false },
    { src: '~/plugins/vue-pagination', ssr: false },
    { src: '~/plugins/disqus', ssr: false },
    // { src: '~/plugins/localStorage', ssr: false },
    { src: '~/plugins/countDown', ssr: false },
    // { src: '~/plugins/webWorker.js', ssr: false },
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
    '@nuxtjs/dotenv',
    'nuxt-goodshare',
    // '@nuxtjs/google-analytics',
  ],

  // googleAnalytics: {
  //   id: 'UA-83271368-6',
  //   // checkDuplicatedScript: true,
  //   // dev: true,
  //   debug: {
  //     sendHitTask: process.env.NODE_ENV === 'development',
  //   },
  // },
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/feed',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    '@nuxtjs/redirect-module',

    [
      'nuxt-highlightjs',
      {
        // Module Options
        style: 'dracula',
      },
    ],
    'vue-social-sharing/nuxt',
  ],
  gtm: {
    id: 'GTM-W6VP4LG', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  redirect: [
    // Redirect options here
    {
      from: '^/posts/introduction-to-backend-development?id=36',
      to: '/posts/getting-started-with-backend-development',
      statusCode: 301,
    },
  ],
  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'Mastering Backend Development',
          link: 'https://masteringbackend.com/feed.xml',
          description: 'This is Mastering Backend Development feeds!',
        }

        const posts = await Utils.getPosts()
        posts.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: `https://masteringbackend.com/posts/${post.slug}`,
            link: `https://masteringbackend.com/posts/${post.slug}`,
            description: post.excerpt,
            content: post.content,
            date: new Date(post.date),
            updated: new Date(post.modified),
            author: {
              name: post.author.name,
              link: 'https://masteringbackend.com/authors/' + post.author.slug,
            },
          })

          post.categories.forEach((category) => {
            feed.addCategory(category.title)
          })

          feed.addContributor({
            name: post.author.name,
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
    },
  ],

  sitemap: {
    // hostname: 'https://masteringbackend.com',
    exclude: ['/maintenance'],
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    async routes() {
      const posts = await Utils.getPosts()
      return posts.map((post) => {
        return `posts/${post.slug}`
      })
    },
  },

  serverMiddleware: {
    '/api': '~/api',
  },

  loading: { color: '#f29d12', height: '5px' },
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
    extend(config, { isServer, isClient }) {
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

      if (isClient) {
        config.module.rules.push({
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
          exclude: /(node_modules)/,
        })
      }
      config.output.globalObject = 'this'
      return config
    },
  },
}
