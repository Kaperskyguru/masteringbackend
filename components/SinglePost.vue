<template>
  <div class="card">
    <img class="card-img-top" :src="image" alt="Card image cap" />
    <div class="card-body">
      <p class="title subtitle is-6">{{ post.title || '' }}</p>

      <p class="card-text">
        <small class="text-muted">
          <time datetime="2020-07-05">{{
            $moment(post.date).format('MMMM Do YYYY, h:mm:ss a')
          }}</time>
        </small>
      </p>
      <p class="card-text" v-html="post.content"></p>
    </div>
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
      const urls = []
      for (const image of this.post.attachments) {
        urls.push(image.images.full.url)
        break
      }
      return urls[0]
    },
  },
}
</script>

<style></style>
