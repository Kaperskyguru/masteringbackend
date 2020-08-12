<template>
  <div>
    <banner />
    <Posts />
    <Jobs />
  </div>
</template>

<script>
export default {
  layout: 'index',
  middleware: 'loadData',
}
</script>

<style></style>
