<template>
  <div class="card mb-3">
    <div>
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
</style>
