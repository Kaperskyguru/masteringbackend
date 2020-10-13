<template>
  <div class="card mt-3">
    <div class="card-header">
      <div class="card-title title">
        <h3>
          <a class="title is-size-4-mobile" :href="job.url" target="_blank">
            {{ job.title }}
          </a>
        </h3>
      </div>
    </div>
    <div class="card-body">
      <small>{{ job.company }}</small>
      <small style="float: right"
        >{{ $moment.unix(job.date).utc().fromNow() }}
      </small>
      <p class="mt-3">
        {{ job.description }}
      </p>
    </div>
    <div style="clear: both"></div>
    <div class="card-footer">
      <div class="actions">
        <a class="btn btn3" :href="job.url" target="_blank">Apply Now</a>
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
