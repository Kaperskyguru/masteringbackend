<template>
  <div class="related-posts mt-5">
    <h5 class="text-uppercase font-weight-bold pb-2">Top 3 Related Posts</h5>
    <div class="row">
      <RelatedPost v-for="post in newPosts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import { shuffle } from '~/helpers/helpers'
export default {
  props: {
    posts: {
      type: [Array, Object],
      default: () => [],
    },
  },

  computed: {
    newPosts() {
      shuffle(this.posts)
      return this.posts.slice(0, 3)
    },
  },
}
</script>

<style>
</style>