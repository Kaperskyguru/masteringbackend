<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container-fluid inner-padding-top pl-md-5 pr-md-5">
          <div class="row">
            <div class="col-md-8 mb-3">
              <SinglePost v-if="post" :post="post" />
              <p v-else class="text-center">Post not found</p>

              <RelatedPosts :posts="categoryPosts" />

              <div class="mt-5 card p-3">
                <h2>Comments</h2>
                <div class="card-line"></div>
                <div class="row">
                  <div class="col-md-12">
                    <Comments v-if="post" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-deck">
                <Newsletter />
              </div>
              <div class="card-deck mt-3">
                <PostWidget title="Top 6 Recent Posts" :posts="recent_posts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { sortDesc } from '~/helpers/helpers'
export default {
  async fetch() {
    try {
      const getRecentPosts = this.$store.getters['post/getRecentPosts']

      const recentPosts = getRecentPosts()

      if (!recentPosts.length) {
        await this.$store.dispatch('post/getRecentPosts')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
  async asyncData({ params, store }) {
    try {
      const getPost = store.getters['post/getPost']
      let post = getPost(params.slug)
      if (post === undefined) {
        post = await store.dispatch('post/getPost', params.slug)
      }

      const getCategoryPosts = store.getters['post/getCategoryPosts']
      let categoryPosts = getCategoryPosts()
      if (!categoryPosts.length) {
        // const _this = this
        // post.categories.forEach(async (category) => {
        categoryPosts = await store.dispatch(
          'post/getCategoryPosts',
          post.categories[0].slug || 'backend'
        )
        // })
      }

      return { post, categoryPosts }
    } catch (error) {
      console.log(error, 'error')
    }
  },

  data() {
    return {
      path: '',
    }
  },
  computed: {
    ...mapState({
      recent_posts: (state) => {
        return sortDesc([...state.post.recent_posts].slice(0, 6))
      },
    }),
  },
  async created() {},
  head() {
    if (this.post)
      return {
        title: `${this.post.title}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.post.excerpt}`,
          },

          { hid: 'og:title', property: 'og:title', content: this.post.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.post.excerpt,
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `/${this.post.slug}`,
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ],
      }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const url = to.fullPath.split('?')[0]
      vm.path = url
    })
  },
}
</script>

<style>
</style>
