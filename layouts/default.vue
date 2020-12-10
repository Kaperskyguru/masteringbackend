<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
require('dotenv').config()
export default {
  // beforeRouteEnter(to, from, next) {
  //   console.log(from, to)
  // },
  data() {
    return {
      baseURL: process.env.BASE_URL || 'https://masteringbackend.com',
    }
  },
  head() {
    console.log(`${process.env.BASE_URL}${this.$route.path}`)
    return {
      link: [
        {
          rel: 'canonical',
          href: `${this.baseURL}${this.$route.path}`,
        },
      ],
    }
  },
}
</script>