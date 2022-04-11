<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <Title>
              <template slot="title"
                >Join over a thousand Backend Dev. on Slack today!</template
              >
              <template slot="subtitle">
                Chat and share with over
                <a href="/slack" style="text-decoration: underline">
                  <b>a thousand</b>
                </a>
                backend engineers worldwide. We have live discussions. We're
                building the biggest Backend Development virtual user group in
                the world. Come join the fun.
              </template>
            </Title>
          </div>
          <div class="row mt-5">
            <div class="card-group">
              <div class="row">
                <div class="col-md-7">
                  <div class="card text-white mb-3">
                    <h5 class="card-header text-uppercase">
                      Join our Slack Community
                    </h5>
                    <div class="card-body">
                      <SlackForm />
                    </div>
                  </div>

                  <!-- <div class="mt-3 card-deck"> -->
                  <Advert
                    adslot="8446445971"
                    :ad-full-width-responsive="true"
                  />
                  <!-- </div> -->
                </div>
                <div class="col-md-5">
                  <div class="card-deck">
                    <Advert
                      adslot="8446445971"
                      :ad-full-width-responsive="true"
                    />
                  </div>

                  <div class="card-deck mt-3">
                    <PostWidget
                      title="Top 3 Must Reads"
                      :show_date="false"
                      :posts="sticky_posts"
                    />
                  </div>

                  <div class="card-deck">
                    <UdemyAd2
                      img="http://masteringbackend.solomoneseme.com/h30y"
                      link="https://masteringbackend.solomoneseme.com/coding-is-not-enough"
                    />
                  </div>
                </div>
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
export default {
  data() {
    return {
      path: '',
    }
  },
  computed: {
    ...mapState({
      sticky_posts: (state) => {
        return [...state.post.sticky_posts]
          .slice(0, 3)
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
      },
    }),
  },
  mounted() {
    this.dispatchStickyPostsAction()
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
        // console.log(error, 'error')
      }
    },
  },

  head() {
    return {
      title: 'Join our Community',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Join the backend development community',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Join our Community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Join the backend development community',
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
      vm.path = to.fullPath
    })
  },
}
</script>

<style></style>
