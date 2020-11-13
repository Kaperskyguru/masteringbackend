<template>
  <div class="full-width-header">
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid pl-md-5 pr-md-5">
          <nuxt-link class="navbar-brand" to="/">
            <Logo />
          </nuxt-link>
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
                <nuxt-link class="nav-link" to="/posts">Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#">Jobs</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#">Events</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/live">Live</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#">Projects</nuxt-link>
              </li>
              <li class="nav-item quote-btn">
                <nuxt-link class="nav-link qbtn" to="#">Post a Job</nuxt-link>
              </li>
              <li class="nav-item quote-btn">
                <nuxt-link class="nav-link qbtn" to="/slack"
                  >Join Our Community</nuxt-link
                >
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

<style></style>
