import axios from 'axios'
export const getPosts = async () => {
  const response = await axios.get(
    'https://adonis-blog.000webhostapp.com/api/get_posts/'
  )
  if (response.data) {
    return response.data.posts
  }
  return []
}

export default { getPosts }
