<template>
  <footer class="footer white-background pt-5">
    <div class="container-fluid footer-section pl-5 pr-5">
      <div class="row">
        <div class="col-md-3">
          <h2 class="footer-header mb-4 pr-5">
            <a class="navbar-brand mr-auto" href="/">
              <Logo :small="true" />
            </a>
          </h2>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">General</h5>
          <ul class="footer-link list-unstyled">
            <li><a href="/posts">Articles</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <!-- <li><a href="#">Events</a></li> -->
            <li><a href="/slack">Community</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Useful Links</h5>
          <ul class="footer-link list-unstyled">
            <li><a href="#">Code of Conduct</a></li>
            <li><a href="/advertisement">Partnership</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/write-for-us">Write for us</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5 class="footer-header mb-4">Ecosystem Links</h5>
          <ul class="footer-link list-unstyled">
            <li>
              <a href="https://about.me/solomoneseme">Hire Me</a>
            </li>
            <li><a href="/advertisement">Advertise with us</a></li>
            <li><a href="/advertisement">Sponsorship</a></li>
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
              <a href="/terms-and-conditions">Terms and Conditions</a>
              |&nbsp;
              <a href="/privacy-policy">Privacy</a>
              |&nbsp;
              <a href="/disclaimer">Disclaimer</a>
            </ul>
          </div>
          <div class="col-md-4">
            <div id="copy">
              ©{{ year }} Masteringbackend - By
              <a href="/aboutus">Backend Community</a>
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
