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
              Latest Backend Dev. Articles curated daily by the community.
            </h2>
          </div>
        </div>
        <!-- first card -->
        <div class="row mb-1 mr-1 ml-1 mt-5">
          <!-- <div class="card-deck"> -->
          <Post v-for="post in posts" :key="post.id" :post="post" />
          <!-- <Post />
            <Post /> -->
        </div>

        <div class="row">
          <div class="col-md-12 col-sm-12-col-xs-12 text-center">
            <h1 class="lead-title text-uppercase">
              Latest Backend Dev. Jobs
            </h1>
            <h2 class="article-subtitle">
              Latest Backend Dev. Jobs curated daily by the community.
            </h2>
          </div>
        </div>

        <div class="row mb-1 mr-1 ml-1 mt-5">
          <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: (state) => {
        return [...state.post.posts, ...state.post.posts]
      },
    }),
  },
}
</script>

<style></style>
