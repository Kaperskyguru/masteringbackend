<template>
  <span>
    <img
      data-not-lazy
      src="/img/logo.png"
      alt="Logo"
      class="img-fluid"
      :class="{ size: small }"
    />
    <!-- Mastering Backend -->
  </span>
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
  max-height: 2.5rem;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
