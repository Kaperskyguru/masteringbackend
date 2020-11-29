<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style></style>
