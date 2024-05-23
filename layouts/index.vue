<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: process.env.BASE_URL || 'https://masteringbackend.com',
    }
  },
  head() {
    return {
      link: [
        // {
        //   rel: 'canonical',
        //   href: this.baseURL + this.$route.path,
        // },
      ],
    }
  },
}
</script>

<style></style>
