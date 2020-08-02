<template>
  <NuxtLink :to="link" class="btn-style-one text-center"><slot /></NuxtLink>
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
