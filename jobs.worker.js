// import DiveJobs from '~/Services/Scrappers/dice-scrapper'
// import { jobResolver } from '~/helpers/helpers'

// self.onmessage = async (e) => {
//   if (e.data === 'job/getDiveJobs') {
//     const diveJobs = await DiveJobs.getDiveJobs()
//     const jobs = jobResolver(diveJobs)

//     self.postMessage({ type: 'STORE_JOBS', payload: jobs })
//   }
// }

self.addEventListener('message', (event) => {
  console.log('[WORKER] worker con data: ', event.data)
})
