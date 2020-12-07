<template>
  <footer class="footer white-background pt-5">
    <div class="container-fluid footer-section pl-5 pr-5">
      <div class="row">
        <div class="col-md-3">
          <h2 class="footer-header mb-4 pr-5">
            <nuxt-link class="navbar-brand mr-auto" to="/">
              <Logo :small="true" />
            </nuxt-link>
          </h2>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">General</h5>
          <ul class="footer-link list-unstyled">
            <li><nuxt-link to="/posts">Articles</nuxt-link></li>
            <li><nuxt-link to="/jobs">Jobs</nuxt-link></li>
            <li><nuxt-link to="#">Events</nuxt-link></li>
            <li><nuxt-link to="/slack">Community</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Useful Links</h5>
          <ul class="footer-link list-unstyled">
            <li><nuxt-link to="#">Code of Conduct</nuxt-link></li>
            <li><nuxt-link to="#">Partnership</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
            <li><nuxt-link to="/write-for-us">Write for us</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Ecosystem Links</h5>
          <ul class="footer-link list-unstyled">
            <li>
              <a href="https://about.me/solomoneseme">Hire Me</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-header mb-4">Follow us</h5>
          <ul class="social d-flex list-unstyled">
            <li>
              <a href="https://bit.ly/solomoneseme" class="fa fa-youtube"></a>
            </li>
            <li>
              <a
                href="https://facebook.com/solomon.eseme"
                class="fa fa-facebook"
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/officialbackend"
                class="fa fa-twitter"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/back-end-developers/"
                class="fa fa-linkedin"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row pt-5 mt-2">
          <div class="col-md-8">
            <ul>
              <nuxt-link to="/terms-and-conditions"
                >Terms and Conditions</nuxt-link
              >
              |&nbsp;
              <nuxt-link to="/privacy-policy">Privacy</nuxt-link>
              |&nbsp;
              <nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
            </ul>
          </div>
          <div class="col-md-4">
            <div id="copy">
              ©{{ year }} Masteringbackend - By
              <nuxt-link to="/aboutus">Backend Community</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
