<template>
  <footer class="footer white-background pt-5">
    <div class="container footer-section">
      <div class="row">
        <div class="col-md-3">
          <h2 class="footer-header mb-4 pr-5">
            <nuxt-link class="navbar-brand mr-auto" to="/">
              <Logo :small="false" />
            </nuxt-link>
          </h2>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">General</h5>
          <ul class="footer-link list-unstyled">
            <li><nuxt-link to="article.html">Article</nuxt-link></li>
            <li><nuxt-link to="#">Jobs</nuxt-link></li>
            <li><nuxt-link to="#">Events</nuxt-link></li>
            <li><nuxt-link to="#">Community</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Useful Links</h5>
          <ul class="footer-link list-unstyled">
            <li><nuxt-link to="#">Code of COnduct</nuxt-link></li>
            <li><nuxt-link to="#">Partnership</nuxt-link></li>
            <li><nuxt-link to="#">Laravel jobs on Jooble</nuxt-link></li>
            <li><nuxt-link to="#">Write for us</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Ecosystem Links</h5>
          <ul class="footer-link list-unstyled">
            <li><nuxt-link to="#">LaraJobs</nuxt-link></li>
            <li><nuxt-link to="#">Laravel</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-header mb-4">Follow us</h5>
          <ul class="social d-flex list-unstyled">
            <li><nuxt-link to="#" class="fa fa-facebook"></nuxt-link></li>
            <li><nuxt-link to="#" class="fa fa-twitter"></nuxt-link></li>
            <li><nuxt-link to="#" class="fa fa-linkedin"></nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row pt-5 mt-2">
          <div class="col-md-9">
            <ul>
              <nuxt-link to="#">Terms and conditions</nuxt-link>
              |&nbsp;
              <nuxt-link to="#">Privacy</nuxt-link>
            </ul>
          </div>
          <div class="col-md-3">
            <div id="copy">
              © 2020 LaraChat - <nuxt-link to="#">By: T.Nation</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
