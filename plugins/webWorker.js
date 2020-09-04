// import PostWorker from '~/posts.worker'

// export default (context, inject) => {
//   inject('worker', {
//     createWorker() {
//       return new PostWorker()
//     },
//   })
// }

import Vue from 'vue'
import VueWorker from 'vue-worker'

Vue.use(VueWorker, '$worker')
