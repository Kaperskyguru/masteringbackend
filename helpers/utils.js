import axios from 'axios'
export default async function getPosts() {
  const response = await axios.get(
    'https://adonis-blog.000webhostapp.com/api/get_posts/'
  )
  if (response.data) {
    return response.data.posts
  }
  return []
}
