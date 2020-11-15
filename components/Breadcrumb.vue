<template>
  <section class="bottom-header">
    <div class="container-fluid pl-md-5 pr-md-5">
      <ul class="navbar">
        <li class="nav-item"><a href="/">Home</a></li>
        <li v-for="(path, i) in computedPath" :key="i" class="nav-item active">
          > <nuxt-link :to="path"> {{ path }} </nuxt-link>
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
