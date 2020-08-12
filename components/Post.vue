<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <div class="b-block">
        <nuxt-link
          :to="{ path: '/posts/' + post.slug, query: { id: post.id } }"
        >
          <img class="card-img-top" :src="image" :alt="post.title" />
        </nuxt-link>
      </div>
      <div class="card-body">
        <p class="subtitle is-6">{{ post.author.name }}</p>

        <nuxt-link
          class="title is-size-4-mobile"
          :to="{ path: '/posts/' + post.slug, query: { id: post.id } }"
          >{{ post.title || '' }}</nuxt-link
        >
        <p class="p-1">
          <small class="text-muted">17 hours ago</small>
        </p>
        <p class="p-1" :html="post.excerpt"></p>
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
      const urls = []
      for (const image of this.post.attachments) {
        urls.push(image.images.thumbnail.url)
        break
      }
      return urls[0] ? urls[0] : '/img/default_banner.webp'
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
