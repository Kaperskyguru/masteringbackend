<template>
  <div>
    <banner />
    <PillarPosts :posts="sticky_posts" />
    <Posts />
    <WorldPosts />
    <Jobs />
  </div>
</template>

<script>
import { mapState } from 'vuex'
require('dotenv').config()
export default {
  // jsonld() {
  //   const items = this.breadcrumbs.map((item, index) => ({
  //     '@type': 'ListItem',
  //     position: index + 1,
  //     item: {
  //       '@id': item.url,
  //       name: item.text,
  //     },
  //   }))
  //   return {
  //     '@context': 'https://schema.org',
  //     '@type': 'BreadcrumbList',
  //     itemListElement: items,
  //   }
  // },

  async fetch() {
    try {
      await this.dispatchPostsAction()
    } catch (error) {
      // console.log(error)
    }
  },
  // layout: 'index',
  async asyncData({ store }) {
    try {
      const getPosts = store.getters['post/getStickyPosts']
      const stickyPosts = getPosts()
      if (!stickyPosts.length) {
        await store.dispatch('post/getStickyPosts')
      }
    } catch (error) {
      // console.log(error, 'error')
    }
  },

  data() {
    return {
      breadcrumbs: [
        {
          url: '/',
          text: 'Homepage',
        },
        {
          url: '/posts',
          text: 'post',
        },
        {
          url: '/jobs',
          text: 'jobs',
        },
        {
          url: '/slack',
          text: 'slack',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      sticky_posts: (state) => {
        return [...state.post.sticky_posts]
      },
    }),
  },
  mounted() {
    this.$store.dispatch('post/getWorldPosts')
    this.dispatchJobsAction()
  },
  methods: {
    async dispatchJobsAction() {
      const getJobs = this.$store.getters['job/getJobs']
      const jobs = getJobs()
      if (!jobs.length) await this.$store.dispatch('job/getJobs')
    },
    async dispatchPostsAction() {
      try {
        const getPosts = this.$store.getters['post/getPosts']
        const posts = getPosts()
        if (!posts.length) {
          try {
            const query = {}
            query.count = 9
            query.page = 1
            await this.$store.dispatch('post/getPosts', query)
          } catch (error) {
            // console.log(error)
          }
        }
      } catch (error) {
        // console.log(error, 'error')
      }
    },
  },

  head() {
    return {
      title: 'Mastering Backend Development',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Latest backend development articles, videos, jobs and events curated by the community',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Latest backend development articles, videos, jobs and events curated by the community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Latest backend development articles, videos, jobs and events curated by the community',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style>
.nuxtLinkStyle {
  text-decoration: none;
  color: inherit !important;
  cursor: pointer !important;
}
</style>
