<template>
  <div
    class="d-flex justify-content-start align-items-center align-self-center mt-1"
  >
    <div class="recent-img mr-3">
      <a :href="'/posts/' + post.slug">
        <img
          v-lazy-load
          width="50"
          height="50px"
          :data-src="image"
          class="card-img-top"
          :alt="post.title"
        />
      </a>
    </div>
    <div class="recent-post-title">
      <time
        v-if="show_date"
        class="text-muted font-italic"
        :datetime="$moment(post.date).format('MMMM Do YYYY')"
        >{{ $moment(post.date).format('MMMM Do YYYY') }}</time
      >
      <h4>
        <a :href="'/posts/' + post.slug">
          {{ post.title || '' }}
        </a>
      </h4>
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
    show_date: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          return this.post.thumbnail_images.thumbnail.url
        }
      }
      return '/img/default_banner.webp'
    },
  },
}
</script>

<style>
.recent-post-title h4 {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.45;
  font-family: Nunito, Roboto;
}

.recent-post-title {
  height: 50%;
  /* max-height: 60px; */
  color: #002766;
}

.recent-post-title time {
  font-size: 13px;
}

.recent-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: none;
}
.recent-img img {
  background-size: cover;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 1;
}
</style>