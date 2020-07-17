<template>
  <div>
    <banner />
    <Posts />
  </div>
</template>

<script>
export default {
  layout: 'index',

  async fetch({ store }) {
    await store.dispatch('post/getPosts')
  },

  // async asyncData({ store }) {
  //   await store.dispatch('post/getPosts')
  // },
}
</script>

<style></style>
