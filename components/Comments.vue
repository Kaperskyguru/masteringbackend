<template>
  <div class="comment-box">
    <div class="justify-content-start">
      <Disqus />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // metadata() {
    //   const metadata = this.$store.state.tutorials.slice()
    //   const tutorialMeta = metadata.filter((tutorial) => {
    //     return `/tutorials/${tutorial.url}` === this.$route.path
    //   })[0]
    //   return tutorialMeta
    // },
  },
}
</script>