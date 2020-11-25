<template>
  <div class="card">
    <img
      v-lazy-load
      class="card-img-top"
      :data-src="stream.snippet.thumbnails.high.url"
      alt="Card image cap"
    />
    <div class="card-body">
      <p class="subtitle is-6">{{ stream.snippet.title }}</p>

      <a class="title is-size-4-mobile" href="#">
        {{ stream.title }}
      </a>
      <p class="card-text">
        <small class="text-muted"
          >{{
            $moment(stream.snippet.publishedAt).format(
              'MMMM Do YYYY, h:mm:ss a'
            )
          }}
        </small>
      </p>
      <p class="card-text">
        {{ stream.snippet.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stream',
  props: {
    stream: {
      type: [Object, Array],
      default: () => {},
    },
  },
}
</script>

<style></style>
