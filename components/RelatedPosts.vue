<template>
  <div class="related-posts mt-5">
    <h5 class="text-uppercase font-weight-bold pb-2">Top 3 Related Posts</h5>
    <div class="row">
      <RelatedPost v-for="post in newPosts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: [Array, Object],
      default: () => [],
    },
  },

  computed: {
    newPosts() {
      this.shuffle(this.posts)
      return this.posts.slice(0, 3)
    },
  },

  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    },
  },
}
</script>

<style>
</style>