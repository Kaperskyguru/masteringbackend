/* eslint-disable no-unused-vars */
// const baseURl = 'https://adonis-blog.000webhostapp.com/api'

export const state = () => ({
  posts: [],
})

export const getters = {
  getPost: (state) => (id, slug) => {
    return state.posts.find((post) => {
      if (post.id === id && post.slug === slug) {
        return post
      }
    })
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.post = post
  },
}

export const actions = {
  async getPosts({ commit }) {
    const response = await fetch(`${process.env.BASE_ENDPOINT_URL}/get_posts`)
    const data = await response.json()
    // console.log(data)
    if (data.posts) {
      commit('setPosts', data.posts)
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) {
    fetch(`${process.env.BASE_ENDPOINT_URL}/get_recent_posts/`)
      .then((res) => res.json())
      .then((res) => {
        const { posts } = res
        if (posts) {
          commit('setLatestPosts', posts)
        }
      })
      .catch()
  },
}
