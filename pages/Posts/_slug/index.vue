<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <div class="card-group">
              <div class="row">
                <div class="col-md-8">
                  <SinglePost :post="post" />
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
                  </div>-->
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
export default {
  async asyncData({ params, query, store }) {
    const getPost = store.getters['post/getPost']
    let post = getPost(query.id, params.slug)
    if (!post) {
      post = await store.dispatch('post/getPost', params.slug)
    }

    return { post }
  },
  data() {
    return {
      path: '',
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
