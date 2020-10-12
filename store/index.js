import SlackInviter from '~/Services/SlackInvite'

export const state = () => ({
  isCounterEnded: true,
  slack: '',
})

export const mutations = {
  END_COUNTER(state) {
    state.isCounterEnded = true
  },

  STORE_SLACK(state, payload) {
    state.slack = payload
  },
}

export const actions = {
  async JoinSlack({ commit }, payload) {
    const res = await SlackInviter.invite(payload)
    commit('STORE_SLACK', res)
  },

  // async nuxtServerInit({ dispatch }) {
  // try {
  // await dispatch('post/getPosts')
  // await dispatch('stream/getCompletedStreams')
  // await dispatch('stream/getUpcomingStreams')
  // await dispatch('job/getDiveJobs')
  // await dispatch('event/getMeetupEvents')
  // } catch (error) {}
  // },
}
