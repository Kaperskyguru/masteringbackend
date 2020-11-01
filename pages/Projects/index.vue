<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title"
              >Latest Backend Dev. Open Source Projects</template
            >
            <template slot="subtitle">
              Latest Backend Dev. open source projects curated by the community.
            </template>
          </Title>
        </div>
        <!-- first card -->
        <div class="row mt-5">
          <div class="row">
            <div class="col-md-7">
              <h5 class="card-header text-uppercase">
                Our Open Source Projects
              </h5>
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
            <div class="col-md-5">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <Button link="/posts">More Projects</Button>
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
  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Backend development projects curated by the community',
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
