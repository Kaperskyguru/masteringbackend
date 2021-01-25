<template>
  <section class="main">
    <!-- <Breadcrumb :paths="path" /> -->
    <section>
      <div class="padding-top grey-color">
        <div class="container-fluid inner-padding-top pl-md-5 pr-md-5">
          <div class="row">
            <div class="col-md-8 mb-3">
              <SingleJob v-if="job" :job="job" />
              <p v-else class="text-center">Job not found</p>

              <UdemyAd2
                img="http://masteringbackend.solomoneseme.com/h30y"
                link="http://masteringbackend.solomoneseme.com/udemyad"
              />
            </div>
            <div class="col-md-4">
              <div class="card-deck">
                <Newsletter />
              </div>
              <div class="mt-3 card-deck">
                <Advert adslot="8446445971" :adFullWidthResponsive="true" />
              </div>
              <div class="card-deck mt-3">
                <PostWidget
                  title="Top 3 Must Reads"
                  :show_date="false"
                  :posts="sticky_posts"
                />
              </div>
              <div class="card-deck">
                <UdemyAd />
              </div>
              <div class="card-deck mt-3">
                <PostWidget title="Top 6 Recent Posts" :posts="recent_posts" />
              </div>
              <div class="card-deck">
                <UdemyAd2
                  img="http://masteringbackend.solomoneseme.com/h30y"
                  link="http://masteringbackend.solomoneseme.com/udemyad"
                />
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
  async asyncData({ params, store }) {
    try {
      const getJob = store.getters['job/getJob']
      let job = getJob(params.slug)

      if (job === undefined) {
        job = await store.dispatch('job/getJob', params.slug)
      }
      return { job }
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
      sticky_posts: (state) => {
        return [...state.post.sticky_posts]
          .slice(0, 3)
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
      },
      related_posts: (state) => {
        return [...state.post.related_posts].slice(0, 3)
      },
    }),
  },
  mounted() {
    this.dispatchStickyPostsAction()
    this.dispatchRecentPostsAction()
  },
  methods: {
    async dispatchStickyPostsAction() {
      try {
        const getPosts = this.$store.getters['post/getStickyPosts']
        const stickyPosts = getPosts()
        if (!stickyPosts.length) {
          await this.$store.dispatch('post/getStickyPosts')
        }
      } catch (error) {
        console.log(error, 'error')
      }
    },

    async dispatchRecentPostsAction() {
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
  },
  head() {
    if (this.job)
      return {
        title: `${this.job.title}`,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '',
          },
          {
            hid: 'description',
            name: 'description',
            content: `${this.job.description}`,
          },

          { hid: 'og:title', property: 'og:title', content: this.job.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.job.description,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${process.env.BASE_URL}/jobs/${this.job.slug}`,
          },
          {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: '800',
          },
          {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: '800',
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

  // eslint-disable-next-line
  beforeRouteUpdate(to, from, next) {
    const url = to.fullPath.split('?')[0]
    // console.log(url, to, from)
    this.path = url
  },
}
</script>

<style></style>
