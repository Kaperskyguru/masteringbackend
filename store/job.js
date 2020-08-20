import DiveJobs from '~/Services/Scrappers/dice-scrapper'
// import Worker from '../jobs.worker'
import { jobResolver } from '~/helpers/helpers'

// const SwActions = new Worker()

export const state = () => ({
  jobs: [],
})

export const mutations = {
  STORE_JOBS(state, payload) {
    payload.forEach((job) => {
      state.jobs.push(job)
    })
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
    // SwActions.postMessage('getDiveJobs')
  },
  getIndeedJobs() {},
}

// SwActions.onmessage = (e) => {
//   this.commit(e.data.type, e.data.payload)
// }
