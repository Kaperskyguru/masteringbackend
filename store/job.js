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
  },
}

export const actions = {
  async getGithubJobs() {},
  async getLinkedinJobs() {},
  async getStackoverflowJobs() {},
  async getIndeedJobs() {},
  async getJobs({ commit }) {
    try {
      const response = await fetch(
        `${process.env.BASE_ENDPOINT_URL}/get_jobs?page=20&count=9`
      )

      const data = await response.json()
      if (data.jobs) {
        commit('STORE_JOBS', data)
      }
      return data.jobs
    } catch (error) {
      // commit('setPostState', ENUM.ERROR)
    }
  },
}
