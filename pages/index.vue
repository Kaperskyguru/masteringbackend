<template>
  <div>
    <banner />
    <Posts />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import DiveJobs from '~/Services/Scrappers/dice-scrapper'

// import DiveJobs from '~/Services/Scrappers/dice-scrapper'
export default {
  layout: 'index',

  middleware: 'loadData',

  created() {
    this.$store.dispatch('job/getDiveJobs')
  },

  // async fetch({ store }) {
  //   await store.dispatch('post/getPosts')
  // },

  // async asyncData({ store }) {
  //   await store.dispatch('post/getPosts')
  // },
}
</script>

<style></style>
