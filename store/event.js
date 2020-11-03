// import MeetupEvents from '~/Services/Scrappers/event-scrapper'

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

export const getters = {
  getEvents: (state) => () => {
    return state.events
  },
}

export const actions = {
  async getMeetupEvents() {
    // const events = await MeetupEvents.getEvents()
    // commit('STORE_EVENTS', events)
  },
}
