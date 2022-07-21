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
        <div v-if="posts.length !== 0" class="row mt-5">
          <!-- <span v-if="apiStateLoaded"> -->
          <Post v-for="(post, i) in posts" :key="i" :post="post" />
          <!-- </span> -->
          <!-- <span v-if="apiStateError"> -->
          <!-- Loading Post -->
          <!-- </span> -->
        </div>
        <div v-else class="row mt-5">
          <p class="text-center">No post found</p>
        </div>
      </div>
    </div>
    <div
      v-if="posts.length !== 0"
      class="col-md-12 col-sm-12-col-xs-12 text-center mb-5"
    >
      <!-- Load more articles here -->
      <!-- <Button link="/posts">More Articles</Button> -->
      <div class="text-center">
        <vue-paginate
          :page-count="post_count"
          :page-range="5"
          :margin-pages="2"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination pagination-lg justify-content-center'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-link-class="'page-link'"
          :next-link-class="'page-link'"
          :click-handler="getPaginatedPosts"
          :value="$route.query.page ? Number($route.query.page) : 1"
        >
        </vue-paginate>
      </div>
    </div>
    <Loading :show="show" :overlay="true" :label="'Page loading...'"></Loading>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '~/components/Loading'
export default {
  components: {
    Loading,
  },
  async asyncData({ store, query }) {
    try {
      const getPosts = store.getters['post/getPosts']
      const posts = getPosts()
      if (!posts.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        await store.dispatch('post/getPosts', data)
      }
    } catch (error) {}
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState({
      posts: (state) => {
        console.log([...state.post.posts], 'ALL_POSTS')
        return [...state.post.posts]
      },
      post_count: (state) => {
        return state.post.total_post_pages
      },
    }),
  },
  methods: {
    async getPaginatedPosts(page) {
      this.show = true
      this.$router.push('/posts?page=' + page)
      const data = {}
      data.page = page
      data.count = 22
      await this.$store.dispatch('post/getPosts', data)
      this.show = false
    },
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
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'weekly backend development articles curated by the community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'weekly backend development articles curated by the community',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style></style>
