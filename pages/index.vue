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
  async fetch({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts.length) {
      await store.dispatch('post/getPosts')
      await store.dispatch('post/getWorldPosts')
    }
  },
}
</script>

<style></style>
