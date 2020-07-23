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
          <div class="card-deck">
            <Post v-for="post in posts" :post="post" :key="post.id" />
          </div>
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
