<template>
  <div class="car mb-3">
    <div>
      <adsbygoogle
        :adFullWidthResponsive="adFullWidthResponsive"
        :ad-slot="adslot"
        :ad-format="adformat"
        :style="mystyle"
        class="ads"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['adFullWidthResponsive', 'adslot', 'adformat', 'mystyle'],
}
</script>

<style >
.ads {
  min-width: 100% !important;
  max-width: 100%;
  min-height: auto;
}
</style>
