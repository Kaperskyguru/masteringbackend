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
          <Post v-for="(post, i) in posts" :key="i" :post="post" />
        </div>
      </div>
    </div>
    <div
      v-if="posts.length !== 0"
      class="col-md-12 col-sm-12-col-xs-12 text-center mb-5"
    >
      <!-- Load more articles here -->
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
import Loading from '~/components/Loading'
export default {
  async asyncData({ params, store, query }) {
    const getPosts = store.getters['post/getPostsByAuthor']
    let posts = getPosts(params.slug)
    if (!posts.length) {
      const data = {}
      data.page = query.page ? query.page : 1
      await store.dispatch('post/getPosts', data)
      const getPosts = store.getters['post/getPostsByAuthor']
      posts = getPosts(params.slug)
    }

    return { posts }
  },
  components: {
    Loading,
  },
  data() {
    return {
      author: '',
    }
  },
  methods: {
    async getPaginatedPosts(page) {
      this.show = true
      this.$router.push('/posts?page=' + page)
      const data = {}
      data.page = page
      data.count = 12
      await this.$store.dispatch('post/getPosts', data)
      this.show = false
    },
  },
  head() {
    return {
      title: this.posts[0].author.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'latest backend development articles curated by ' +
            this.posts[0].author.name,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'latest backend development articles curated by ' +
            this.posts[0].author.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'latest backend development articles curated by ' +
            this.posts[0].author.name,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
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
