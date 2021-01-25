<template>
  <div class="card mb-3">
    <div class="ad">
      <adsbygoogle
        :adFullWidthResponsive="adFullWidthResponsive"
        :ad-slot="adslot"
        :ad-format="adformat"
        :ad-style="mystyle"
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
.ad {
  widows: 100%;
  height: 100%;
}
</style>
