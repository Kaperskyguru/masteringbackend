<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <div class="col-md-12 col-sm-12-col-xs-12 text-center">
              <h1 class="lead-title text-uppercase">
                Join other backend developers to write today!
              </h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="card-group">
              <div class="row">
                <div class="col-md-7">
                  <div class="card mb-3">
                    <h5 class="card-header text-white text-uppercase">
                      Write for us
                    </h5>
                    <div class="card-body">
                      <p>
                        We are Actively looking for collaborators to write some
                        cool backend development, Cloud/DevOps engineering, and
                        Blockchain posts
                      </p>

                      <p>
                        You can contribute just one article on a topic that’s
                        near and dear to you, or you can contribute multiple
                        articles over time.
                      </p>

                      <p>
                        mail us at – masteringbackend@gmail.com, we will get
                        back to you within 24 hours. we’ll send you the
                        guidelines about how to write for us.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <Newsletter />
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
  data() {
    return {
      path: '',
    }
  },
  head() {
    return {
      title: 'Write for us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Join other backend developers to write about backend development, cloud/DevOps, and Blockchain article today!',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Write for us',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Join other backend developers to write about backend development, cloud/DevOps, and Blockchain article today!',
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

<style>
.card-body p {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2;
  font-family: Merriweather, roboto;
}
</style>
