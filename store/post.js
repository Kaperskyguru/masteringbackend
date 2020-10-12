/* eslint-disable no-unused-vars */
// const baseURl = 'https://adonis-blog.000webhostapp.com/api'

import ENUM from '@/enums'
import DevtoPost from '~/Services/DevtoPosts'
import LogRocketPosts from '~/Services/LogRocketPosts'

export const state = () => ({
  postState: ENUM.INIT,
  posts: [],
  worldPosts: [],
  post: [],
})

export const getters = {
  getPost: (state) => (id, slug) => {
    return state.posts.find((post) => {
      if (post.id === id && post.slug === slug) {
        return post
      }
    })
  },

  getPostsByAuthor: (state) => (author) => {
    return state.posts.filter((post) => post.author.slug === author)
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
    state.postState = ENUM.LOADED
  },
  setPost(state, post) {
    state.post = post
  },

  setWorldPost(state, posts) {
    const postData = []
    for (const i in posts) {
      postData.push(posts[i])
    }
    state.worldPosts = postData.map((post) => {
      const resolvedPost = {}
      resolvedPost.title = post.title
      resolvedPost.content = post.description
      resolvedPost.url = post.url
      resolvedPost.date = post.published_at || post.created
      resolvedPost.image = post.social_image || post.image
      resolvedPost.from = new URL(post.url).host
      return resolvedPost
    })
  },

  setPostState(state, postState) {
    state.postState = postState
  },
}

export const actions = {
  async getPosts({ commit }) {
    commit('setPostState', ENUM.ERROR)
    const response = await fetch(`${process.env.BASE_ENDPOINT_URL}/get_posts`)
    const data = await response.json()
    if (data.posts) {
      commit('setPosts', data.posts)
    } else {
      commit('setPostState', ENUM.ERROR)
    }
    return data.post
  },

  async getPost({ commit }, slug) {
    commit('setPostState', ENUM.ERROR)
    const response = await fetch(
      `${process.env.BASE_ENDPOINT_URL}/get_post/?slug=${slug}`
    )
    const data = await response.json()
    if (data.post) {
      commit('setPost', data.post)
    } else {
      commit('setPostState', ENUM.ERROR)
    }
    return data.post
  },

  async getLogRocketPosts({ commit }) {
    const data = await new LogRocketPosts().getPosts()
    const logRocketPosts = JSON.parse(data).items
    // for (const i in logRocketPosts) {
    //   postData.push(logRocketPosts[i])
    // }
    commit('setWorldPost', logRocketPosts)
  },
  async getWorldPosts({ commit }) {
    const posts = await new DevtoPost().getPosts()
    // for (const i in posts) {
    //   postData.push(posts[i])
    // }
    if (posts) {
      commit('setWorldPost', posts)
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) {
    // fetch(`${process.env.BASE_ENDPOINT_URL}/get_recent_posts/`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     const { posts } = res
    //     if (posts) {
    //       commit('setLatestPosts', posts)
    //     }
    //   })
    //   .catch()
  },
}

// WebActions.onmessage = (e) => {
//   state.commit(e.data.type, e.data.payload)
// }
