import DiveJobs from '~/Services/Scrappers/dice-scrapper'
import { jobResolver } from '~/helpers/helpers'

export const state = () => ({
  jobs: [],
})

export const mutations = {
  STORE_JOBS(state, payload) {
    state.jobs.push(payload)
  },
}

export const actions = {
  getGithubJobs() {
    jobResolver()
  },
  getLinkedinJobs() {},
  getStackoverflowJobs() {},
  async getDiveJobs({ commit }) {
    const diveJobs = await DiveJobs.getDiveJobs()
    const jobs = jobResolver(diveJobs)
    commit('STORE_JOBS', jobs)
  },
  getIndeedJobs() {},
}
