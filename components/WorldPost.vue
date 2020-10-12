<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <div class="b-block">
        <a :href="post.url">
          <img class="card-img-top" :src="image" :alt="post.title" />
        </a>
      </div>
      <div class="card-body">
        <a :href="`https://${post.from}`" class="subtitle is-6">
          {{ post.from }}
        </a>

        <a class="title is-size-4-mobile" :href="post.url">
          {{ post.title || '' }}
        </a>

        <p class="p-1">
          <small class="text-muted">
            {{ $moment(post.date).format('MMMM Do YYYY') }}
          </small>
        </p>
        <p v-html="getPostExcerpt(post.content, 100)"></p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Post title
 * Post content
 * Post Image
 * Post Website
 * Post Time
 * Post Link
 */
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
      if (this.post.image) {
        return this.post.image
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
