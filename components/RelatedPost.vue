<template>
  <div class="col-4 mb-3">
    <div class="card similar-post">
      <div class="b-block">
        <nuxt-link :to="{ path: '/posts/' + post.slug }">
          <img v-lazy-load :data-src="image" class="image" :alt="post.title" />
        </nuxt-link>
      </div>
      <div class="card-body">
        <h6>
          <nuxt-link
            class="title is-size-4-mobile"
            :to="{ path: '/posts/' + post.slug }"
          >
            {{ post.title || '' }}
          </nuxt-link>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: [Array, Object],
      default: () => [],
    },
  },
  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images && this.post.thumbnail) {
          return this.post.thumbnail_images.full.url
        }
      }
      return '/img/default_banner.webp'
    },
  },
}
</script>

<style>
.similar-post .image {
  width: 100%;
  height: auto;
  max-height: 160px !important;
}
</style>