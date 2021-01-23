<template>
  <div class="car mb-3">
    <div>
      <adsbygoogle
        :adFullWidthResponsive="adFullWidthResponsive"
        :ad-slot="adslot"
        :ad-format="adformat"
        :ad-style="mystyle"
        :ad-layout-key="addLayoutKey"
        :ad-layout="adLayout"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'adFullWidthResponsive',
    'adslot',
    'adformat',
    'mystyle',
    'adLayoutKey',
  ],
}
</script>

<style >
</style>
