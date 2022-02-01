<template>
  <div class="full-width-header">
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid pl-md-5 pr-md-5">
          <a class="navbar-brand" href="/">
            <Logo />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            :aria-expanded="show"
            aria-label="Toggle navigation"
            @click="show = !show"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
            :class="{ show: show }"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link text-link" href="/posts">Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-link" href="/jobs">Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-link" href="#">Events</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link text-link" href="/live"
                  >Live</a
                >
              </li> -->
              <li class="nav-item">
                <a class="nav-link text-link" href="#">Projects</a>
              </li>

              <li class="nav-item quote-btn">
                <a
                  href="https://academy.masteringbackend.com"
                  target="_blank"
                  class="nav-link qbtn"
                  >Join the Academy</a
                >
              </li>
              <li class="nav-item quote-btn">
                <a class="nav-link qbtn" href="/slack">Join Our Community</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      show: false,
    }
  },

  mounted: () => {
    'use strict'
    window.addEventListener('scroll', navToggel)
    const navigationBar = document.querySelector('.main-header')
    function navToggel() {
      if (window.scrollY > 170) {
        navigationBar.classList.add('stickyNavbar')
      } else {
        navigationBar.classList.remove('stickyNavbar')
      }
    }
  },
}
</script>

<style>
.qbtn:hover {
  background-color: rgba(250, 76, 35, 0.8) !important;
  color: #fff;
}
</style>
