<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <div class="b-block">
        <div style="flex: calc(900 / 900)">
          <a :href="'/posts/' + post.slug">
            <img
              v-lazy-load
              :data-src="image"
              class="card-img-top"
              :alt="post.title"
            />
          </a>
        </div>
      </div>
      <div class="card-body">
        <a :href="'/authors/' + post.author.slug" class="subtitle">
          {{ post.author.name }}
        </a>
        <div class="pt-1">
          <h2>
            <a class="title" :href="'/posts/' + post.slug">
              {{ post.title || '' }}
            </a>
          </h2>
        </div>
        <!-- <p>
          <small class="text-muted">{{
            $moment(post.date).format('MMMM Do YYYY')
          }}</small>
        </p> -->
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
        if (this.post.thumbnail_images && !this.post.thumbnail_images.length) {
          if (this.post.thumbnail_images.medium)
            return this.post.thumbnail_images.medium.url
          else {
            return '/img/default_banner.webp'
          }
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
  color: #334c70;
}

.card .title {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: Nunito;
  line-height: 140%;
  color: #002766;
}

.subtitle {
  color: #fa4c23;
}

.content {
  margin-bottom: 25px;
  flex-grow: 1;
  font-family: Nunito;
  font-size: 1.1rem;
  line-height: 180%;
  color: #334c70;
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
