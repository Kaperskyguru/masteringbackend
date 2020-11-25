// import DiveJobs from '~/Services/Scrappers/dice-scrapper'
import { jobResolver } from '~/helpers/helpers'

export const state = () => ({
  jobs: [],
  total_jobs: 0,
})

export const getters = {
  getJobs: (state) => () => {
    return state.jobs
  },
}

export const mutations = {
  STORE_JOBS(state, payload) {
    state.jobs = jobResolver(payload.jobs)
    state.total_jobs = payload.total_jobs
    // payload.jobs.forEach((job) => {
    //   console.log(job.date)
    // })
  },
}

export const actions = {
  async getGithubJobs() {},
  async getLinkedinJobs() {},
  async getStackoverflowJobs() {},
  async getIndeedJobs() {},
  async getDiveJobs({ commit }) {
    try {
      const diveJobs = await this.$axios.get('/api/jobs')
      if (diveJobs.data.total_jobs) commit('STORE_JOBS', diveJobs.data)
    } catch (error) {
      console.log(error)
    }
  },
}
