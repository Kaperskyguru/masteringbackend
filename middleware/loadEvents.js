// import LogRocketPosts from '~/Services/LogRocketPosts'

export default async function ({ store }) {
  //   const isInitialPageLoad = !from
  //   if (isInitialPageLoad) {
  try {
    if (process.server) await store.dispatch('event/getMeetupEvents')
  } catch (error) {}
  //   }
}
