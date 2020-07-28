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
  getDiveJobs() {},
  getIndeedJobs() {},
}

function jobResolver() {}
