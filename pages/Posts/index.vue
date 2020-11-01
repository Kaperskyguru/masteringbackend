<template>
  <section class="main">
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Latest Backend Dev. Articles</template>
            <template slot="subtitle">
              Latest Backend Dev. Articles curated daily by the community.
            </template>
          </Title>
        </div>
        <!-- first card -->
        <div class="row mt-5">
          <!-- <span v-if="apiStateLoaded"> -->
          <Post v-for="(post, i) in posts" :key="i" :post="post" />
          <!-- </span> -->
          <!-- <span v-if="apiStateError"> -->
          <!-- Loading Post -->
          <!-- </span> -->
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <!-- Load more articles here -->
      <Button link="/posts">More Articles</Button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ENUM from '@/enums'
export default {
  async asyncData({ store }) {
    const getPosts = store.getters['post/getPosts']
    const posts = getPosts()
    if (!posts.length) await store.dispatch('post/getPosts')
  },
  computed: {
    ...mapState({
      posts: (state) => {
        return [...state.post.posts].slice(0, 18)
      },
      apiStateLoaded: (state) => {
        return state.post.postState === ENUM.LOADED
      },
      apiStateLoading: (state) => {
        return (
          state.post.postState === ENUM.LOADING ||
          state.post.postState === ENUM.INIT
        )
      },
      apiStateError: (state) => {
        return state.post.postState === ENUM.ERROR
      },
    }),
  },
  head() {
    return {
      title: 'Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'weekly backend development articles curated by backend developers',
        },
      ],
    }
  },
}
</script>

<style></style>
