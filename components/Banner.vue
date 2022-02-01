<template>
  <section class="banner-section">
    <div class="container-fluid pl-md-4 pr-md-5 hero text-white">
      <div class="row ml-3 mr-3">
        <div class="banner-text col-md-7 p-4">
          <h1 class="container-title text-uppercase">
            Start learning backend development now
          </h1>
          <h3 class="sub-title text-white mt-md-4 mt-3">
            Starting Backend Development is a journey into a career that can
            open many great opportunities from working on complex projects to
            landing your
            <a href="/jobs" style="text-decoration: underline">dream job</a> and
            the best way to get the most out of it is to start now.
          </h3>
          <div class="text-left mt-5">
            <a
              href="https://academy.masteringbackend.com"
              target="_blank"
              class="bl qbtn"
              >Join the Academy</a
            >
          </div>
        </div>
        <div class="col-md-5">
          <div class="row justify-content-center">
            <img class="banner-image" src="/img/personal3.webp" />
          </div>
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

<style scoped>
.bl {
  color: #fff;
  padding: 20px 2rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  background-color: #fa4c23; /*rgba(51, 51, 51, 1);*/
  text-decoration: none;
  display: inline;
  text-align: center;
  text-transform: uppercase;
  outline: none;
}

.banner-image {
  max-width: 100%;
  height: 300px;
}
</style>