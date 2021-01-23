<template>
  <div class="card mb-3">
    <div>
      <adsbygoogle
        :adFullWidthResponsive="adFullWidthResponsive"
        :ad-slot="adslot"
        :ad-format="adformat"
        class="ads"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['adFullWidthResponsive', 'adslot', 'adformat'],
}
</script>

<style >
.ads {
  min-width: 100% !important;
  max-width: 100%;
  min-height: auto;
}
</style>
