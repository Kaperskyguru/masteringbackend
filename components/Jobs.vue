<template>
  <section>
    <div class="padding-top">
      <div class="container inner-padding-top">
        <div class="row">
          <div class="col-md-12 col-sm-12-col-xs-12 text-center">
            <h1 class="lead-title text-uppercase">
              Latest Backend Dev. Jobs
            </h1>
            <h2 class="article-subtitle">
              Latest Backend Dev. Jobs curated daily by the community.
            </h2>
          </div>
        </div>

        <div class="row mb-1 mt-5">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="col-md-6 col-sm-12 mb-4"
          >
            <Job :job="job" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <!-- Load more articles here -->
      <Button link="/jobs" class="col p-3">More Jobs</Button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { sortDesc } from '~/helpers/helpers'

export default {
  computed: {
    ...mapState({
      jobs: (state) => {
        return sortDesc([...state.job.jobs]).slice(0, 4)
      },
    }),
  },
}
</script>

<style></style>
