<template>
  <div class="card mt-3">
    <div class="card-header">
      <div class="card-title title">
        <h3>
          <nuxt-link
            class="title is-size-4-mobile"
            :to="{ path: '/jobs/' + job.slug }"
          >
            {{ job.title }}
          </nuxt-link>
        </h3>
      </div>
    </div>
    <div class="card-body">
      <small>{{ job.company }}</small>
      <small style="float: right"
        >{{ $moment(job.created_at).utc().fromNow() }}
      </small>
      <p class="mt-3">
        {{ job.description }}
      </p>
    </div>
    <div style="clear: both"></div>
    <div class="card-footer">
      <div class="actions">
        <nuxt-link class="btn btn3" :to="{ path: '/jobs/' + job.slug }"
          >Read More</nuxt-link
        >
        <small style="float: right">Source: {{ job.website }}</small>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
      type: [Array, Object],
      default: () => {},
    },
  },
}
</script>

<style></style>
