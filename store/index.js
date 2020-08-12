export const state = () => ({
  isCounterEnded: false,
})

export const mutations = {
  END_COUNTER(state) {
    state.isCounterEnded = true
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('post/getPosts')
    await dispatch('stream/getCompletedStreams')
    await dispatch('stream/getUpcomingStreams')
    await dispatch('job/getDiveJobs')
  },
}
