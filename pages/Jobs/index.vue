<template>
  <section class="main">
    <div class="padding-top grey-color">
      <div class="container-fluid pl-md-5 pr-md-5 inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Latest Backend Dev. Careers</template>
            <template slot="subtitle"
              >Want your job listed here? Why not submit a post to the job
              board?</template
            >
          </Title>
        </div>
        <div class="row mt-5">
          <div class="card-group">
            <div class="row">
              <div class="col-md-8">
                <Job v-for="(job, i) in jobs" :key="i" :job="job" />
              </div>

              <div class="col-md-4 mt-3">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <div class="text-center">
        <vue-paginate
          :page-count="job_count"
          :page-range="5"
          :margin-pages="2"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination pagination-lg justify-content-center'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-link-class="'page-link'"
          :next-link-class="'page-link'"
          :click-handler="getPaginatedJobs"
          :value="$route.query.page ? Number($route.query.page) : 1"
        >
        </vue-paginate>
      </div>
    </div>
    <loading :show="show" />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { sortDesc } from '~/helpers/helpers'
export default {
  async asyncData({ store }) {
    const getJobs = store.getters['job/getJobs']
    const jobs = getJobs()
    if (!jobs.length) await store.dispatch('job/getDiveJobs')
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState({
      jobs: (state) => {
        return sortDesc([...state.job.jobs])
      },
      job_count: (state) => {
        return state.job.total_jobs
      },
    }),
  },
  methods: {
    async getPaginatedJobs(page) {
      this.show = true
      this.$router.push('/posts?page=' + page)
      const data = {}
      data.page = page
      data.count = 12
      await this.$store.dispatch('post/getPosts', data)
      this.show = false
    },
  },
  head() {
    return {
      title: 'Jobs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Weekly backend development jobs curated by the community',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Weekly backend development jobs curated by the community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Weekly backend development jobs curated by the community',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style></style>
