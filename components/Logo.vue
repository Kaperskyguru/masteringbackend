<template>
  <span
    ><img
      src="img/logoFavicon100.png"
      alt
      class="img-fluid"
      :class="{ size: small }"
    />
    Mastering Backend</span
  >
</template>

<script>
export default {
  props: {
    small: {
      default: true,
      type: Boolean,
    },
  },
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

.size {
  max-height: 1.75rem;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
