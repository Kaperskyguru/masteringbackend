<template>
  <div class="card">
    <div class="b-block">
      <nuxt-link to="#">
        <img class="card-img-top" :src="image" :alt="post.title" />
      </nuxt-link>
    </div>
    <div class="card-body">
      <p class="subtitle is-6">{{ post.author.name }}</p>

      <a class="title is-size-4-mobile" href="#">{{ post.title || '' }}</a>
      <p class="p-1">
        <small class="text-muted">17 hours ago</small>
      </p>
      <p class="p-1" v-html="post.excerpt"></p>
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
      return urls[0]
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
