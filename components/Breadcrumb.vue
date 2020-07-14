<template>
  <section class="bottom-header">
    <div class="container">
      <ul class="navbar">
        <li class="nav-item"><a href="/">Home</a></li>
        <li v-for="(path, i) in computedPath" :key="i" class="nav-item active">
          > <nuxt-link to="#"> {{ path }} </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumb',

  props: {
    paths: {
      type: String,
      default: '',
    },
  },

  computed: {
    computedPath() {
      return this.paths.split('/').filter((item) => item)
    },
  },
}
</script>

<style></style>
