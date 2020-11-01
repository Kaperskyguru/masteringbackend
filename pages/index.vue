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
  middleware: 'loadData',
  async asynData({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (posts.length === 0) {
      await store.dispatch('post/getPosts')
      await store.dispatch('post/getWorldPosts')
    }
  },
  head() {
    return {
      title: 'Index',
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
