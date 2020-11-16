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
    const jobs = jobResolver(payload.jobs)
    state.jobs = jobs
    state.total_jobs = payload.total_jobs
    // payload.forEach((job) => {
    //   state.jobs.push(job)
    // })
  },
}

export const actions = {
  async getGithubJobs() {},
  async getLinkedinJobs() {},
  async getStackoverflowJobs() {},
  async getIndeedJobs() {},
  async getDiveJobs({ commit }) {
    const diveJobs = await this.$axios.get('/api/jobs')
    // console.log(diveJobs.data)
    if (diveJobs.data.total_jobs) commit('STORE_JOBS', diveJobs.data)
  },
}
