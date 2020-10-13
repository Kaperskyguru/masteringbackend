<template>
  <div class="card" style="overflow: hidden">
    <img class="card-img-top" :src="image" alt="Card image cap" />
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
      if (this.post) {
        for (const image of this.post.attachments) {
          urls.push(image.images.full.url)
          break
        }
      }
      return urls[0] ? urls[0] : '/img/default_banner.webp'
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
  overflow: hidden;
}

.card p {
  margin-bottom: 2rem;
}
</style>
