<template>
  <section class="banner-section text-center">
    <div class="hero text-white">
      <div class="container">
        <h1 class="container-title">
          WELCOME TO BACKEND DEVELOPMENT COMMUNITY BLOG
        </h1>
        <h2 class="sub-title text-white mt-3">
          Chat and share with over
          <a href="#" style="text-decoration: underline;">
            <!-- <b>31,061</b> -->
            <b>a thousand</b>
          </a>
          backend engineers worldwide. We have live discussions. We're building
          the biggest Backend Development virtual user group in the world. Come
          join the fun.
        </h2>
        <div class="mt-4 row">
          <!-- <div class="d-sm-none d-md-block"> -->
          <Button class="col m-1" link="/jobs">Jobs</Button>
          <!-- </div> -->
          <Button class="col m-1 d-none d-sm-block" link="/events"
            >Events</Button
          >
          <Button class="col m-1" link="/posts">Articles</Button>
          <Button class="col m-1" link="/slack">Community</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style></style>
