<template>
  <div class="col-md-4 col-sm-12 mb-4">
    <div class="card">
      <img
        class="card-img-top"
        :src="event.eventImage || 'img/default_banner.webp'"
        :alt="event.eventText"
      />
      <div class="card-body">
        <p class="subtitle is-6">{{ event.eventGroup }}</p>

        <a class="title is-size-4-mobile" :href="event.eventURL">
          {{ event.eventText }}
        </a>
        <p class="card-text">
          <small>{{ event.date }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPost',
  props: {
    event: {
      type: [Array, Object],
      default: () => [],
    },
  },
}
</script>

<style></style>
