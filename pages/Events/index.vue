<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Upcoming Backend Dev. Events</template>
            <template slot="subtitle"
              >Want your event listed here? Contact Us.</template
            >
          </Title>
        </div>
        <!-- first card -->
        <div class="row mt-5">
          <div class="card-deck">
            <EventPost />
            <EventPost />
            <EventPost />
          </div>
        </div>
      </div>

      <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
        <p>
          <a href="#" class="theme-btn btn-style-one">More Events</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      path: '',
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
