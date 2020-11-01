<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <div class="col-md-12 col-sm-12-col-xs-12 text-center">
              <h1 class="lead-title text-uppercase">
                Join over a thousand Backend Dev. on Slack today!
              </h1>
            </div>
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
      title: 'Community',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Join the backend development community',
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
