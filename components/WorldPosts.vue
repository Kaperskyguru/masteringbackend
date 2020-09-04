<template>
  <section>
    <div class="padding-top">
      <div class="container inner-padding-top">
        <div class="row">
          <div class="col-md-12 col-sm-12-col-xs-12 text-center">
            <h1 class="lead-title text-uppercase">
              Latest Backend Dev. Articles
            </h1>
            <h2 class="article-subtitle">
              Latest Backend Dev. Articles around the internet.
            </h2>
          </div>
        </div>
        <div class="row mb-1 mt-5">
          <!-- <Post v-for="(post, i) in posts" :key="i" :post="post" /> -->
          <!-- <span v-if="apiStateLoaded"> -->
          <WorldPost
            v-for="(post, i) in shuffle(posts)"
            :key="i"
            :post="post"
          />
          <!-- </span> -->
          <!-- <span v-if="apiStateError">
            Loading Post {{ this.$store.state.post.postState }}
          </span> -->
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <Button link="/posts" class="col p-3">More Articles</Button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ENUM from '@/enums'
export default {
  computed: {
    ...mapState({
      posts: (state) => {
        // console.log(state.post.posts)
        return [...state.post.worldPosts].slice(0, 9)
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

  methods: {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5)
    },
  },
}
</script>

<style></style>
