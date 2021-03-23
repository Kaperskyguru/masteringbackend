import { jobResolver } from '~/helpers/helpers'

export const state = () => ({
  jobs: [],
  total_jobs: 0,
  job: [],
})

export const getters = {
  getJobs: (state) => () => {
    return state.jobs
  },

  getJob: (state) => (slug) => {
    return state.jobs.find((job) => {
      if (job.slug === slug) {
        // console.log(job, slug)
        return job
      }
    })
  },
}

export const mutations = {
  STORE_JOBS(state, payload) {
    state.jobs = jobResolver(payload.jobs)
    state.total_jobs = payload.total_jobs
  },

  STORE_JOB(state, payload) {
    state.job = jobResolver(payload)
  },
}

export const actions = {
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
      // console.log(error)
      // commit('setPostState', ENUM.ERROR)
    }
  },

  async getJob({ commit }, slug) {
    try {
      const response = await fetch(
        `${process.env.BASE_ENDPOINT_URL}/get_job/?slug=${slug}`
      )
      const data = await response.json()
      if (data.jobs) {
        commit('STORE_JOB', [data.jobs])
      }

      return data.jobs
    } catch (error) {
      // console.log(error)
      // commit('setPostState', ENUM.ERROR)
    }
  },
}
