<template>
  <section>
    <span v-for="(post, i) in posts" :key="i">
      <Post :post="post" />
    </span>
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
        return [...state.post.posts].slice(0, 22)
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
}
</script>

<style></style>
