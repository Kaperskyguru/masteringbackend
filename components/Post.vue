<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <div class="b-block">
        <div style="flex: calc(900 / 900)">
          <nuxt-link :to="{ path: '/posts/' + post.slug }">
            <img
              v-lazy-load
              :data-src="image"
              class="card-img-top"
              :alt="post.title"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="card-body">
        <nuxt-link
          :to="{ path: '/authors/' + post.author.slug }"
          class="subtitle"
        >
          {{ post.author.name }}
        </nuxt-link>
        <div class="pt-1">
          <h2>
            <nuxt-link class="title" :to="{ path: '/posts/' + post.slug }">
              {{ post.title || '' }}
            </nuxt-link>
          </h2>
        </div>
        <p>
          <small class="text-muted">{{
            $moment(post.date).format('MMMM Do YYYY')
          }}</small>
        </p>
        <article
          class="content"
          v-html="getPostExcerpt(stripTags(post.excerpt), 150)"
        ></article>
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
        return str.substring(0, limit) + '...'
      }
    },

    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },
  },
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 220px;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-size: cover;
  background-position: center;
}

.card {
  height: 600px;
  min-height: 300px;
}

.card .title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 140%;
}

.content {
  margin-bottom: 25px;
  flex-grow: 1;
  font-size: 1.1rem;
  line-height: 180%;
}

.b-block {
  /* padding: 5%; */
  width: 100%;
  height: auto;
  display: flex;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
  .card {
    height: 800px;
    min-height: 300px;
  }
}
</style>
