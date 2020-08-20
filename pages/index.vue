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

  // async fetch() {
  //   // if () {
  //   console.log('asdas', process.browser)
  //   // Remember workers just work in client?
  //   const worker = this.$worker.createWorker() // Instruction assigned in plugin
  //   worker.addEventListener('message', (event) => console.log(event.data))
  //   worker.postMessage('Message sent to worker')
  //   await this.$store.dispatch('event/getMeetupEvents')
  //   // }
  // },
}
</script>

<style></style>
