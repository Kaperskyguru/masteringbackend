<template lang="html">
  <div class="content">
    <div class="maintenance">
      <countdown
        :time="7 * 24 * 60 * 60 * 1000"
        :emit-events="true"
        @end="endCounter()"
      >
        <template slot-scope="props"
          >Time Remaining：{{ props.days }} days, {{ props.hours }} hours,
          {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template
        >
      </countdown>
      <h1>Maintenance Mode</h1>
      <h1>Twitter: @officialbackend</h1>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'maintenance',

  methods: {
    endCounter() {
      this.$store.commit('END_COUNTER')
      // process.env.MAINTENANCE_MODE = false
      this.$router.push({ path: '/' })
    },
  },
}
</script>
<style lang="css" scoped>
body,
html {
  height: 100%;
  width: 100%;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1em;
}
.maintenance h1 {
  font-size: 190%;
  color: #fff;
  text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.5);
  color: #d6336c;
  text-align: center;
}
.maintenance {
  height: 200px;
  position: absolute;
  left: 10%;
  top: 40%;
  bottom: 50%;
  right: 10%;
  fill: #d6336c;
  text-align: center;
}
.content {
  height: 100%;
  width: 100%;
  background-color: #5471b9;
}
</style>
