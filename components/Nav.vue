<template>
  <div class="full-width-header">
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">
            <Logo />
          </nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/join"
                  >Slack Community</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/posts">Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/jobs">Jobs</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/events">Events</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/live">LIve</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
              </li>
              <li class="nav-item quote-btn">
                <nuxt-link class="nav-link qbtn" to="/create"
                  >Post a Job</nuxt-link
                >
              </li>
              <li class="nav-item quote-btn">
                <nuxt-link class="nav-link qbtn" to="/join"
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

  mounted() {
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
