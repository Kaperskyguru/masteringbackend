<template>
  <NuxtLink
    v-if="!link.includes('http')"
    :to="link"
    class="btn-style-one text-center qbtn"
    ><slot
  /></NuxtLink>

  <a v-else :href="link" target="_blank" class="btn-style-one text-center qbtn"
    ><slot
  /></a>
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
