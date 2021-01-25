<template>
  <div class="card text-white mb-3 mt-3">
    <h5 class="card-header text-uppercase border-success">
      {{ title || 'Start Learning Now' }}
    </h5>

    <div class="card-body text-success">
      <a :href="link" target="new"
        ><img
          border="0"
          alt="Learning for all. Savings for you. Courses from $11.99"
          :src="img"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'link', 'title'],
}
</script>

<style>
.card-body img {
  width: 100%;
  height: 100%;
}
</style>