import SlackInviter from '~/Services/SlackInvite'

export const state = () => ({
  isCounterEnded: process.env.MAINTENANCE_MODE,
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
}
