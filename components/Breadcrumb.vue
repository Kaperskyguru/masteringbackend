<template>
  <section class="bottom-header">
    <div class="container-fluid pl-md-5 pr-md-5">
      <ul class="navbar">
        <li class="nav-item">
          <i class="fas fa-play"></i><a href="/">Home</a>
        </li>
        <li v-for="(path, i) in computedPath" :key="i" class="nav-item active">
          > <a :href="path"> {{ path }} </a>
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

  methods: {
    computeRoutePaths(path) {
      if (path) {
        const paths = path.split('/').slice(1, this.paths.length - 1)
        const pp = []
        let real = '/'

        for (const path1 of paths) {
          const p = {}
          p.url = real += path1 + '/'
          p.path = path1
          pp.push(p)
        }
        return pp
      }
    },
  },
}
</script>

<style></style>
