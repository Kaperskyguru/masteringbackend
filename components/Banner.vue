<template>
  <section class="banner-section text-center">
    <div class="hero text-white">
      <div class="container">
        <h1 class="container-title">
          WELCOME TO BACKEND DEVELOPMENT COMMUNITY BLOG
        </h1>
        <h3 class="sub-title text-white mt-md-5 mt-3 mb-md-5">
          Chat and share with over
          <a href="#" style="text-decoration: underline">
            <b>a thousand</b>
          </a>
          backend engineers worldwide. We have live discussions. We're building
          the biggest Backend Development virtual user group in the world. Come
          join the fun.
        </h3>
        <div class="mt-4 row">
          <Button class="col m-1" link="#">Jobs</Button>
          <Button class="col m-1 d-none d-sm-block" link="#">Events</Button>
          <Button class="col m-1" link="/posts">Articles</Button>
          <Button class="col m-1" link="/slack">Community</Button>
        </div>
        <div class="mt-4 row">
          <Button
            class="col d-md-none m-1"
            link="posts/getting-started-with-backend-development"
          >
            Start Backend Dev. Today</Button
          >
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
