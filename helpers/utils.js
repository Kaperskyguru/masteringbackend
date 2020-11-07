import axios from 'axios'
export const getPosts = async () => {
  try {
    const response = await axios.get(
      process.env.BASE_ENDPOINT_URL + '/get_posts/'
    )
    if (response.data) {
      return response.data.posts
    }
    return []
  } catch (error) {
    return []
  }
}

export default { getPosts }
