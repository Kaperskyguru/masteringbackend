<template>
  <NuxtLink :to="link" class="theme-btn btn-style-one"><slot /></NuxtLink>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style></style>
