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
export default {
  layout: 'index',
  async asyncData({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts.length) {
      try {
        const query = {}
        query.count = 9
        query.page = 1
        await store.dispatch('post/getPosts', query)
      } catch (error) {
        console.log(error)
      }
    }
  },

  async fetch() {
    try {
      await this.dispatchStickyPostsAction()
      await this.$store.dispatch('post/getWorldPosts')
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    async dispatchStickyPostsAction() {
      try {
        const getPosts = this.$store.getters['post/getStickyPosts']

        const stickyPosts = getPosts()

        if (!stickyPosts.length) {
          await this.$store.dispatch('post/getStickyPosts')
        }
      } catch (error) {
        console.log(error, 'error')
      }
    },
  },

  computed: {
    ...mapState({
      sticky_posts: (state) => {
        return [...state.post.sticky_posts]
      },
    }),
  },
  async created() {
    // console.log(await this.$axios.get('/api/jobs'))
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
