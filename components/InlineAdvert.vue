<template>
  <div class="car">
    <div class="mt-1 mb-1">
      <adsbygoogle
        :ad-full-width-responsive="adFullWidthResponsive"
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
    'adLayout',
  ],
}
</script>

<style>
</style>
