import MeetupEvents from '~/Services/Scrappers/event-scrapper'
import { jobResolver } from '~/helpers/helpers'

export const state = () => ({
  events: [],
})

export const mutations = {
  STORE_EVENTS(state, payload) {
    payload.forEach((event) => {
      state.events.push(event)
    })
  },
}

export const actions = {
  getGithubJobs() {
    jobResolver()
  },
  getLinkedinJobs() {},
  getStackoverflowJobs() {},
  async getMeetupEvents({ commit }) {
    const events = await MeetupEvents.getEvents()
    commit('STORE_EVENTS', events)
  },
  getIndeedJobs() {},
}
