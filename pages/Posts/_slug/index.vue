<template>
  <section class="main">
    <!-- <Breadcrumb :paths="path" /> -->
    <!-- <section> -->
    <div class="padding-top grey-color">
      <div class="container-fluid inner-padding-top pl-md-5 pr-md-5">
        <div class="row">
          <div class="col-md-8 mb-0">
            <SinglePost v-if="post" :post="post" />
            <p v-else class="text-center">
              We are currently experiencing server issues after migration and
              upgrading. We are working on it. Please refresh the page or check
              again later. Thanks
            </p>

            <RelatedPosts :posts="related_posts" />

            <UdemyAd2
              img="https://res.cloudinary.com/kaperskydisk/image/upload/v1649681177/masteringbackend/books/3.jpg"
              title="Coding is not enough"
              link="https://masteringbackend.solomoneseme.com/coding-is-not-enough"
            />

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
          <div class="col-md-4 mt-3 mt-md-0">
            <div class="sidebar-item">
              <div class="card-deck">
                <Newsletter />
              </div>

              <div class="card-deck">
                <UdemyAd />
              </div>
              <div class="card-deck mt-3">
                <PostWidget
                  title="Top 3 Must Reads"
                  :show_date="false"
                  :posts="sticky_posts"
                />
              </div>

              <div class="card-deck mt-3">
                <Advert
                  mystyle="display:block"
                  adslot="1697743756"
                  :ad-full-width-responsive="true"
                />
              </div>

              <div class="card-deck mt-3">
                <div class="card mb-3">
                  <h5 class="card-header text-uppercase">
                    Grow your tech writing career
                  </h5>
                  <div class="card-body">
                    <header>
                      <div style="margin-bottom: 1rem">
                        <img
                          src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656683600/contentre/assets/full-contentre.gif"
                          alt=""
                        />
                      </div>
                      <h6
                        style="
                          text-align: left;
                          -webkit-font-smoothing: antialiased;
                          font-size: 1.125rem;
                          line-height: 2rem;
                          font-weight: 550;
                          color: rgb(16 42 39 / 1);
                        "
                      >
                        Jumping from coding to finding, managing, and completing
                        technical writing gigs is hard. Not anymore. Organize
                        all your content, manage clients, share samples, and
                        publish your work to various places, all on Contentre.
                      </h6>
                    </header>

                    <div class="form-group">
                      <div class="text-center">
                        <Button
                          link="https://masteringbackend.solomoneseme.com/contentre_"
                          class="btn-block mt-4 text-uppercase add-btn"
                          style="background-color: #286963; color: #ffffff"
                          >Get Started. It's free</Button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="card card-2 p-md-5 p-2 mb-3">
                <header class="text-center">
                  <h2 class="text-uppercase">
                    START LEARNING BACKEND DEVELOPMENT NOW
                  </h2>
                  <h6 class="w-100">
                    Starting Backend Development is a journey into a career that
                    can open many great opportunities from working on complex
                    projects to landing your dream job and the best way to get
                    the most out of it is to start now.
                  </h6>
                </header>

                <div class="card-body">
                  <div class="form-group">
                    <div class="text-center">
                      <Button
                        link="https://academy.masteringbackend.com"
                        class="btn-block mt-4 text-uppercase"
                        >Join the Academy</Button
                      >
                    </div>
                  </div>
                </div>
              </div> -->

              <div class="card-deck mt-3">
                <UdemyAd2
                  title="Coding is not enough"
                  img="https://res.cloudinary.com/kaperskydisk/image/upload/v1649681197/masteringbackend/books/1.jpg"
                  link="https://masteringbackend.solomoneseme.com/coding-is-not-enough"
                />
              </div>
              <div class="card-deck mt-3">
                <Advert
                  mystyle="display:block"
                  adslot="3127209644"
                  :ad-full-width-responsive="true"
                />
              </div>

              <div class="card-deck mt-3">
                <PostWidget title="Top 6 Recent Posts" :posts="recent_posts" />
              </div>
              <div class="mt-3 card-deck">
                <Advert
                  mystyle="display:block"
                  adslot="4146182810"
                  :ad-full-width-responsive="true"
                />
              </div>

              <div class="card-deck">
                <UdemyAd2
                  img="https://res.cloudinary.com/kaperskydisk/image/upload/v1649681189/masteringbackend/books/2.jpg"
                  link="https://masteringbackend.solomoneseme.com/coding-is-not-enough"
                />
              </div>

              <div class="mt-3">
                <Advert
                  mystyle="display:block"
                  adslot="2066814385"
                  :ad-full-width-responsive="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </section> -->
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { sortDesc } from '~/helpers/helpers'
require('dotenv').config()
export default {
  async asyncData({ params, store }) {
    try {
      const getPost = await store.getters['post/getPost']
      let post = await getPost(params.slug)
      if (post === undefined || !post || post === null) {
        post = await store.dispatch('post/getPost', params.slug)
      }

      const getPosts = await store.getters['post/getStickyPosts']
      const stickyPosts = await getPosts()
      if (!stickyPosts.length) {
        await await store.dispatch('post/getStickyPosts')
      }

      return { post }
    } catch (error) {
      console.log(error, 'error')
    }
  },

  data() {
    return {
      path: '',
      BASE_URL: this.BASE_URL || 'https://masteringbackend.com',
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
    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          if (this.post.thumbnail_images.full)
            return this.post.thumbnail_images.full.url
          return '/img/default_banner.webp'
        }
      }
      return '/img/default_banner.webp'
    },
  },
  async mounted() {
    await this.dispatchRecentPostsAction()
    if (this.post) await this.dispatchRelatedPostsAction(this.post.id)
  },
  methods: {
    splitTags(tags) {
      if (Array.isArray(tags)) {
        return tags.map((tag) => tag.title).join(', ')
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
        // console.log(error, 'error')
      }
    },

    async dispatchRelatedPostsAction(id) {
      try {
        await this.$store.dispatch('post/getRelatedPosts', id)
      } catch (error) {
        // console.log(error, 'error')
      }
    },
    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },
  },

  jsonld() {
    if (this.post !== undefined) {
      return {
        '@context': 'http://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': this.BASE_URL + '/posts' + this.$route.path,
                  name: this.$route.path,
                },
              },
            ],
          },
          {
            '@type': 'NewsArticle',
            headline: this.post.title,
            image: [this.image],
            datePublished: this.post.date,
            dateModified: this.post.modified,
            description: this.stripTags(this.post.excerpt),
          },
        ],
      }
    } else return {}
  },
  head() {
    if (this.post !== undefined) {
      return {
        title: `${this.post.title}`,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: `${this.splitTags(this.post.tags)}`,
          },
          {
            hid: 'description',
            name: 'description',
            content: `${this.stripTags(this.post.excerpt)}`,
          },

          { hid: 'og:title', property: 'og:title', content: this.post.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.stripTags(this.post.excerpt),
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${this.BASE_URL}/posts/${this.post.slug}`,
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
            hid: 'og:type',
            property: 'og:type',
            content: 'article',
          },
          {
            hid: 'article:published_time',
            property: 'article:published_time',
            content: this.post.date,
          },
          {
            hid: 'article:modified_time',
            property: 'article:modified_time',
            content: this.post.modified,
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ],
      }
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

<style scoped >
.sidebar-item {
  position: sticky;
  top: -100%;
  left: 0;
  /* bottom: 10%; */
  width: 100%;
  height: 100%;
}
.card-2 {
  background-color: #fdf7f4;
  border: none;
}

.add-btn:hover {
  background-color: #3c9a92 !important;
}

.card-2 h2 {
  color: #fa4c23;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
  .card-2 {
    height: auto;
    min-height: 300px;
  }
}
</style>
