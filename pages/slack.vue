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
