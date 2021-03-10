<template>
  <div class="card mb-3">
    <div class="ad card-body">
      <adsbygoogle
        class="ad"
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
  height: 100%;
  width: 100%;
}
</style>
