require('dotenv').config()
const BASEURL =
  process.env.DEVTO_BASE_URL || 'https://dev.to/api/articles?tag=backend'
class DevtoPost {
  async getPosts() {
    // BASEURL += `&eventType=upcoming`
    try {
      const res = await fetch(BASEURL)
      const data = await res.json()
      return data
    } catch (error) {}
  }
}

export default DevtoPost
