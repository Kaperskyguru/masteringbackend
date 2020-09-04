import Feed from 'rss-to-json'

class LogRocketPosts {
  async getPosts() {
    const rss = await Feed.load(
      'https://blog.logrocket.com/author/solomoneseme/feed'
    )
    return JSON.stringify(rss, null, 3)
  }
}

export default LogRocketPosts
