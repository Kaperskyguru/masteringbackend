<template>
  <div class="col-md-4 mb-3 col-sm-12">
    <div class="card similar-post">
      <div class="b-block">
        <a :to="'/posts/' + post.slug">
          <img v-lazy-load :data-src="image" class="image" :alt="post.title" />
        </a>
      </div>
      <div class="card-body">
        <h6>
          <a class="post-title font-weight-bold" :href="'/posts/' + post.slug">
            {{ post.title || '' }}
          </a>
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
        if (this.post.thumbnail_images) {
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

.similar-post .post-title {
  font-size: 1.3rem;
}
</style>