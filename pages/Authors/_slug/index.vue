<template>
  <section class="main">
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Author: {{ posts[0].author.name }}</template>
            <template slot="subtitle">
              Latest Backend Dev. Articles curated daily by
              {{ posts[0].author.name }}.
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
// import { mapGetters } from 'vuex'
// import ENUM from '@/enums'
export default {
  asyncData({ params, store }) {
    const getPosts = store.getters['post/getPostsByAuthor']
    const posts = getPosts(params.slug)
    return { posts }
  },
  data() {
    return {
      author: '',
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.author = to.params.slug
  //   })
  // },
}
</script>

<style></style>