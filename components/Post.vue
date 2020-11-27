<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <div class="b-block">
        <nuxt-link :to="{ path: '/posts/' + post.slug }">
          <img
            v-lazy-load
            :data-src="image"
            class="card-img-top"
            :alt="post.title"
          />
        </nuxt-link>
      </div>
      <div class="card-body">
        <nuxt-link
          :to="{ path: '/authors/' + post.author.slug }"
          class="subtitle"
        >
          {{ post.author.name }}
        </nuxt-link>

        <h1 class="pt-1">
          <nuxt-link
            class="title is-size-4-mobile"
            :to="{ path: '/posts/' + post.slug }"
          >
            {{ post.title || '' }}
          </nuxt-link>
        </h1>
        <p>
          <small class="text-muted">{{
            $moment(post.date).format('MMMM Do YYYY')
          }}</small>
        </p>
        <article v-html="getPostExcerpt(post.excerpt, 100)"></article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          return this.post.thumbnail_images.full.url
        }
      }
      return '/img/default_banner.webp'
    },
  },

  methods: {
    getPostExcerpt(str, limit) {
      if (str.length > 0) {
        return str.substring(0, limit) + ' [...]'
      }
    },
  },
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 100%;
}
</style>
