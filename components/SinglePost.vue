<template>
  <div class="card">
    <figure class="wp-block-image is-resized">
      <img
        v-lazy-load
        :data-src="image"
        class="card-img-top"
        :alt="post.title"
      />
    </figure>
    <div class="card-body">
      <p class="title subtitle is-6">{{ post.title || '' }}</p>

      <p class="card-text">
        <small class="text-muted">
          <time
            :datetime="$moment(post.date).format('MMMM Do YYYY, h:mm:ss a')"
            >{{ $moment(post.date).format('MMMM Do YYYY, h:mm:ss a') }}</time
          >
        </small>
      </p>
      <div v-highlight class="card-text" v-html="post.content"></div>

      <div class="social-share mb-4">
        <vue-goodshare />
      </div>
    </div>
    <Comments />
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: {
      type: [Object, Array],
      default: () => {},
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
.card-text {
  font-family: Merriweather;
  font-weight: 400;
  line-height: 1.8;
  color: #222222;
  /* overflow-x: hidden; */
}

.card p {
  margin-bottom: 2rem;
}
</style>
