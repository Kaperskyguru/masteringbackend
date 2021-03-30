<template>
  <div class="card text-white mb-3 mt-3">
    <h5 class="card-header text-uppercase border-success">
      {{ title || 'Start Learning Now' }}
    </h5>

    <div class="card-body text-success">
      <a href="http://masteringbackend.solomoneseme.com/2021webdev" target="new"
        ><img
          border="0"
          alt="The Complete 2021 Web Development Bootcamp. Now for as low as $10.99"
          src="https://merchant.linksynergy.com/fs/banners/39197/39197_16262.png"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style>
.card-body img {
  width: 100%;
  height: 100%;
}
</style>