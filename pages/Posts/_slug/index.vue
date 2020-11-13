<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container-fluid inner-padding-top pl-md-5 pr-md-5">
          <!-- <div class="row"> -->

          <div class="row">
            <div class="col-md-8 mb-3">
              <SinglePost :post="post" v-if="post" />
              <p class="text-center" v-else>Post not found</p>

              <div class="mt-5 card p-3">
                <h2>Comments</h2>
                <div class="card-line"></div>
                <div class="row">
                  <div class="col-md-12">
                    <Comments />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <Newsletter />
              <!-- <div class="card-deck">
                    <div class="card text-white mb-3">
                      <h5 class="card-header text-uppercase">
                        Community Partners
                      </h5>
                      <div class="card-body">
                        <div class="img-div">
                          <figure class="aside-img">
                            <img
                              class="img-fluid"
                              src="/img/autonomous.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div class="img-div text-success">
                          <figure class="aside-img">
                            <a href="#" target="_blank" title="Koho">
                              <img
                                class="lazyload has-text-centered"
                                src="#"
                                data-src="#"
                                alt="Koho"
                              />
                            </a>
                          </figure>
                        </div>
                        <div class="img-div">
                          <figure class="aside-img">
                            <img
                              class="img-fluid"
                              src="/img/digitalocean-logo.png"
                              alt=""
                            />
                          </figure>
                        </div>

                        <div class="img-div">
                          <figure class="aside-img">
                            <img
                              class="img-fluid"
                              src="/img/imgaside.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <form method="post" action="#">
                          <div class="field">
                            <div class="control text-center mt-4">
                              <button class="button btn2" type="submit">
                                Become a partner
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>-->
              <!-- <div class="card text-white mb-3">
                    <h5 class="card-header text-uppercase border-success">
                      Laravel/PHP Careers
                    </h5>

                    <div class="card-body text-success">
                      <h4 class="card-a text-center card-title">
                        <a href="#">
                          Want your job here? Contact Us.
                        </a>
                      </h4>
                    </div>
                    <div class="card-footer border-success">
                      <form method="post" action="#">
                        <div class="field">
                          <div class="control text-center mt-4">
                            <button class="button btn2" type="submit">
                              Add a job?
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ params, store }) {
    try {
      const getPost = store.getters['post/getPost']
      let post = getPost(params.slug)
      if (!post) {
        post = await store.dispatch('post/getPost', params.slug)
      }

      return { post }
    } catch (error) {}
  },
  data() {
    return {
      path: '',
    }
  },
  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images && this.post.thumbnail) {
          return this.post.thumbnail_images.full.url
        }
      }
      return '/img/default_banner.webp'
    },
  },
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

<style></style>
