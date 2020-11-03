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
  async asynData({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts.length) {
      await store.dispatch('post/getPosts')
      await store.dispatch('post/getWorldPosts')
    }
  },

  async fetch() {
    const getPosts = this.$store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts.length) {
      await this.$store.dispatch('post/getPosts')
      await this.$store.dispatch('post/getWorldPosts')
    }
  },
  // async created() {
  //   console.log(await this.$axios.get('/api/users'))
  // },
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
