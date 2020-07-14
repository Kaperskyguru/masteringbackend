<template>
  <nuxt-link :to="link" class="theme-btn btn-style-one"><slot /></nuxt-link>
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
