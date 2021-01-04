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
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              author: { '@id': '#identity' },
              copyrightHolder: { '@id': '#identity' },
              copyrightYear: new Date(),
              creator: { '@id': '#creator' },
              dateModified: new Date(),
              datePublished: '2019-06-06T10:10:00-07:00',
              description:
                'The ultimate backend development blog for backend developers and engineers.',
              headline: 'Mastering Backend Development',
              image: {
                '@type': 'ImageObject',
                url: '/img/logo.png',
              },
              inLanguage: 'en-us',
              mainEntityOfPage: 'https://masteringbackend.com/',
              name: 'Mastering Backend development',
              publisher: { '@id': '#creator' },
              url: 'https://masteringbackend.com',
            },
            { '@id': '#identity', '@type': 'LocalBusiness', priceRange: '$' },
            { '@id': '#creator', '@type': 'Organization' },
            {
              '@type': 'BreadcrumbList',
              description: 'Breadcrumbs list',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  item: 'https://masteringbackend.com/',
                  name: 'Homepage',
                  position: 1,
                },
              ],
              name: 'Breadcrumbs',
            },
          ],
        },
      },
    ],
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
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Mastering Backend',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/logo300.png',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@officialbackend',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@officialbackend',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'backend,backend development,backend developer,backend web development, backend developers',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      // {
      //   hid: 'http-equiv',
      //   'http-equiv': 'Content-Type',
      //   content: 'text/html; charset=utf-8',
      // },
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
      // {
      //   rel: 'stylesheet',
      //   // rel: 'preload',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
      // },
    ],

    script: [
      // {
      //   src: 'https://use.fontawesome.com/3889c7d65e.js',
      //   async: true,
      //   defer: true,
      // },
    ],
  },
  router: {
    middleware: 'maintenance',
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.css',
    // { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/jsonld',
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
    '@nuxtjs/imagemin',
    'nuxt-goodshare',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
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
  redirect: [
    // Redirect options here
    {
      from: '^/posts/introduction-to-backend-development(.*)$',
      to: '/posts/getting-started-with-backend-development',
      statusCode: 301,
    },
    {
      from: '^posts/laravel-framework-the-ultimate-guide-2021(.*)$',
      to: 'posts/laravel-framework-the-ultimate-guide$1',
      statusCode: 301,
    },
    {
      from: '^/category/(.*)$',
      to: '/categories/$1',
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
    {
      path: '/jobs.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'Mastering Backend Development',
          link: 'https://masteringbackend.com/jobs.xml',
          description: 'This is Mastering Backend Development Job feeds!',
        }

        const jobs = await Utils.getJobs()
        jobs.forEach((job) => {
          feed.addItem({
            title: job.title,
            id: `https://masteringbackend.com/jobs/${job.slug}`,
            link: `https://masteringbackend.com/jobs/${job.slug}`,
            description: job.location,
            content: job.description,
            date: new Date(job.created_at),
            updated: new Date(job.created_at),
            // author: {
            //   name: post.author.name,
            //   link: 'https://masteringbackend.com/authors/' + post.author.slug,
            // },
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
    },
  ],

  sitemap: {
    hostname: 'https://masteringbackend.com',
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

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },
}
