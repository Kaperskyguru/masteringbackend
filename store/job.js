// import DiveJobs from '~/Services/Scrappers/dice-scrapper'
// import { jobResolver } from '~/helpers/helpers'

export const state = () => ({
  jobs: [],
})

export const getters = {
  getJobs: (state) => () => {
    return state.jobs
  },
}

export const mutations = {
  STORE_JOBS(state, payload) {
    payload.forEach((job) => {
      state.jobs.push(job)
    })
  },
}

export const actions = {
  async getGithubJobs() {},
  async getLinkedinJobs() {},
  async getStackoverflowJobs() {},
  async getIndeedJobs() {},
  async getDiveJobs() {
    // const diveJobs = await DiveJobs.getDiveJobs()
    // const jobs = jobResolver(diveJobs)
    // commit('STORE_JOBS', jobs)
  },
}
