import axios from 'axios'
export const getPosts = async () => {
  try {
    const response = await axios.get(
      process.env.BASE_ENDPOINT_URL + '/get_posts/?count=1000'
    )
    if (response.data) {
      return response.data.posts
    }
    return []
  } catch (error) {
    return []
  }
}

export const getJobs = async () => {
  try {
    const response = await axios.get(
      process.env.BASE_ENDPOINT_URL + '/get_jobs?page=20&count=9'
    )
    if (response.data) {
      return response.data.jobs
    }
    return []
  } catch (error) {
    return []
  }
}

export default { getPosts, getJobs }
