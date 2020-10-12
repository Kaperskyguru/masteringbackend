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

  async asyncData({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts) await store.dispatch('post/getPosts')
  },
}
</script>

<style></style>
