<template>
  <div>
    <banner />
    <Posts />
    <WorldPosts />
    <Jobs />
  </div>
</template>

<script>
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
      await this.$store.dispatch('post/getWorldPosts')
    } catch (error) {
      console.log(error)
    }
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

<style></style>
