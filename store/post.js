/* eslint-disable no-unused-vars */
// const baseURl = 'http://masteringbackend.solomoneseme.com/api'

import https from 'https'
import ENUM from '@/enums'
import DevtoPost from '~/Services/DevtoPosts'
import LogRocketPosts from '~/Services/LogRocketPosts'

// At request level
const agent = new https.Agent({
  rejectUnauthorized: false,
})

export const state = () => ({
  postState: ENUM.INIT,
  posts: [],
  worldPosts: [],
  post: [],
  total_post_pages: 0,
  recent_posts: [],
  category_posts: [],
  sticky_posts: [],
  related_posts: [],
})

export const getters = {
  getPost: (state) => (slug) => {
    return state.posts.find((post) => {
      if (post.slug === slug) {
        return post
      }
    })
  },

  getPosts: (state) => () => {
    return state.posts
  },

  getRecentPosts: (state) => () => {
    return state.recent_posts
  },

  getCategoryPosts: (state) => () => {
    return state.category_posts
  },

  getRelatedPosts: (state) => () => {
    return state.related_posts
  },

  getPostsByAuthor: (state) => (author) => {
    return state.posts.filter((post) => post.author.slug === author)
  },
  getStickyPosts: (state) => () => {
    return state.sticky_posts
  },
}

export const mutations = {
  setPosts(state, data) {
    state.posts = data.posts
    state.total_post_pages = data.pages
    state.postState = ENUM.LOADED
  },
  setRecentPosts(state, data) {
    state.recent_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = ENUM.LOADED
  },
  setStickyPosts(state, data) {
    state.sticky_posts = data.posts
    state.postState = ENUM.LOADED
  },
  setPost(state, post) {
    state.post = post
  },

  setCategoryPosts(state, data) {
    state.category_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = ENUM.LOADED
  },

  setRelatedPosts(state, data) {
    state.related_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = ENUM.LOADED
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
  async getPosts({ commit }, { page, count = 22 }) {
    try {
      const res = await this.$axios.get(
        `/get_posts?page=${page}&count=${count}`,
        { httpsAgent: agent }
      )

      const { data } = res
      if (data?.posts) {
        commit('setPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getRecentPosts({ commit }) {
    try {
      const res = await this.$axios.get(`/get_posts?count=6`, {
        httpsAgent: agent,
      })

      const { data } = res

      if (data.posts) {
        commit('setRecentPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getStickyPosts({ commit }) {
    try {
      const res = await this.$axios.get(`/get_sticky_posts`, {
        httpsAgent: agent,
      })

      const { data } = res
      if (data.posts) {
        commit('setStickyPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getRelatedPosts({ commit }, postId) {
    try {
      const res = await this.$axios.get(
        `/get_related_posts?post_id=${postId}&count=3`,
        { httpsAgent: agent }
      )

      const { data } = res

      if (data.posts) {
        commit('setRelatedPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getCategoryPosts({ commit }, { page, slug }) {
    try {
      const res = await this.$axios.get(
        `/get_category_posts?slug=${slug}&page=${page}`,
        { httpsAgent: agent }
      )

      const { data } = res

      if (data.posts) {
        commit('setCategoryPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getPost({ commit }, slug) {
    try {
      const res = await this.$axios.get(`/get_post/?slug=${slug}`, {
        httpsAgent: agent,
      })

      const { data } = res

      if (data.post) {
        commit('setPost', data.post)
      }
      return data.post
    } catch (error) {
      commit('setPostState', ENUM.ERROR)
    }
  },

  async getLogRocketPosts({ commit }) {
    const data = await new LogRocketPosts().getPosts()
    const logRocketPosts = JSON.parse(data).items
    commit('setWorldPost', logRocketPosts)
  },
  async getWorldPosts({ commit }) {
    const posts = await new DevtoPost().getPosts()
    if (posts) {
      commit('setWorldPost', posts)
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) {},
}

// http://172.19.78.154:35430/
