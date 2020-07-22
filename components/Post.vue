<template>
  <div class="card">
    <img class="card-img-top" :src="image" alt="Card image cap" />
    <div class="card-body">
      <p class="subtitle is-6">{{ post.author.name }}</p>

      <a class="title is-size-4-mobile" href="#">{{ post.title || '' }}</a>
      <p class="card-text">
        <small class="text-muted">17 hours ago</small>
      </p>
      <p class="card-text" v-html="post.excerpt"></p>
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
        urls.push(image.images.medium.url)
        break
      }
      return urls[0]
    },
  },
}
</script>

<style></style>
