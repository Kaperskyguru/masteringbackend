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

  async nuxtServerInit({ dispatch }) {
    // const Pool = require('worker-threads-pool')
    // console.log(Pool)
    // const pool = new Pool({ max: 5 })

    // for (let i = 0; i < 100; i++) {
    //   pool.acquire('~/jobs.worker.js', function (err, worker) {
    //     if (err) throw err
    //     console.log(`started worker ${i} (pool size: ${pool.size})`)
    //     worker.on('exit', function () {
    //       console.log(`worker ${i} exited (pool size: ${pool.size})`)
    //     })
    //   })
    // }
    try {
      await dispatch('post/getPosts')
      await dispatch('stream/getCompletedStreams')
      await dispatch('stream/getUpcomingStreams')
      await dispatch('job/getDiveJobs')
    } catch (error) {}

    // await Promise.all([
    //   await dispatch('post/getPosts'),
    //   // await dispatch('stream/getCompletedStreams'),
    //   // await dispatch('stream/getUpcomingStreams'),
    //   // await dispatch('job/getDiveJobs'),
    //   // await dispatch('event/getMeetupEvents'),
    // ])
  },
}
