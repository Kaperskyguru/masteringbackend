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
      ],
    }
  },
}
</script>

<style></style>
