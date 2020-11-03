<template>
  <img
    src="/img/logo300.png"
    alt="masteringbackend Logo"
    class="img-fluid NuxtLogo"
    :class="{ size: small }"
  />
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
