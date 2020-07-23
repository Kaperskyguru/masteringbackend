<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe
      :src="`https://www.youtube.com/embed/${video_id}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['video_id'],
}
</script>

<style></style>
