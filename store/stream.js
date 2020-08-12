/* eslint-disable no-unused-vars */

import YoutubeLiveStreams from '~/Services/YoutubeLiveStreams'

export const state = () => ({
  streams: [],
  upcomingStream: [],
})

export const getters = {}

export const mutations = {
  setStreams(state, streams) {
    state.streams = streams
  },
  setUpcomingStreams(state, stream) {
    state.upcomingStream = stream
  },
}

export const actions = {
  async getCompletedStreams({ commit }) {
    const data = await new YoutubeLiveStreams().getCompletedStreams()
    // console.log(data)
    if (data && data.pageInfo) {
      if (data.pageInfo.totalResults !== 0) commit('setStreams', data)
    }
  },

  async getUpcomingStreams({ commit }, page = 1, perPage = 3) {
    const data = await new YoutubeLiveStreams().getUpcomingStreams()
    if (data && data.pageInfo) {
      if (data.pageInfo.totalResults !== 0) commit('setUpcomingStreams', data)
    }
  },
}
