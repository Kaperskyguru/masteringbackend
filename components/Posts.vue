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
        <div class="row mt-5">
          <div class="card-deck">
            <Post v-for="post in posts" :key="post.id" :post="post" />
            <!-- <Post />
            <Post /> -->
          </div>

          <div class="row mt-5">
            <div class="card-deck">
              <Post v-for="post in posts" :key="post.id" :post="post" />
            </div>
          </div>
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
        return state.post.posts
      },
    }),
  },
}
</script>

<style></style>
