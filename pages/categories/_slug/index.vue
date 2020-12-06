<template>
  <section class="main">
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title"
              >{{ 'Latest ' + $route.params.slug + ' Articles' }}
            </template>
            <template slot="subtitle">
              Latest {{ $route.params.slug }} Articles curated daily by the
              community.
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
import ENUM from '@/enums'
import Loading from '~/components/Loading'
export default {
  async asyncData({ store, query, params }) {
    try {
      const getPosts = store.getters['post/getCategoryPosts']
      const posts = getPosts()
      if (!posts.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.slug = params.slug || 'backend'
        await store.dispatch('post/getCategoryPosts', data)
      }
    } catch (error) {}
  },
  components: {
    Loading,
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState({
      posts: (state) => {
        return [...state.post.category_posts]
      },
      post_count: (state) => {
        return state.post.total_post_pages
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
    async getPaginatedPosts(page) {
      this.show = true
      this.$router.push('/categories/backend?page=' + page)
      const data = {}
      data.page = page
      data.count = 12
      data.slug = this.$route.params.slug || 'backend'
      await this.$store.dispatch('post/getCategoryPosts', data)
      this.show = false
    },
  },
  head() {
    return {
      title: this.$route.params.slug,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `weekly ${this.$route.params.slug} articles curated by backend developers`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `weekly ${this.$route.params.slug} articles curated by the community`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `weekly ${this.$route.params.slug} articles curated by the community`,
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
