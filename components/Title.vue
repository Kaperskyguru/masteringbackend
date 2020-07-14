<template>
  <div class="col-md-12 col-sm-12-col-xs-12 text-center">
    <h1 class="lead-title text-uppercase">
      <slot name="title" />
    </h1>
    <h2 class="article-subtitle mt-2">
      <a
        href="#"
        class="text-center"
        style="color: #6f7d8c; font-size: 13px; font-weight: bold;"
      >
        <!-- Want your job listed here? Why not submit a post to the job board? -->
        <slot name="subtitle" />
      </a>
    </h2>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
