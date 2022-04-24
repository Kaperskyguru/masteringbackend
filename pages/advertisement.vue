<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <div class="col-md-12 col-sm-12-col-xs-12 text-center">
              <h1 class="lead-title text-uppercase">
                Reach out to our <em>30k+</em> monthly readers
              </h1>
            </div>
          </div>
          <div class="row mt-5 writer">
            <div class="card-group">
              <div class="row">
                <div class="col-md-7">
                  <div class="card mb-3">
                    <h5 class="card-header text-uppercase">
                      Advertise with us
                    </h5>
                    <div class="card-body">
                      <p>
                        <strong>Supporters Ad: </strong> Your website logo/image
                        is shown on our website homepage as our supporter and we
                        always write an article using your products and services
                        including your links (1 article per month). The cost is
                        ranging from <em> $250 monthly</em>.
                      </p>

                      <p>
                        <strong>Sidebar Banner/Image: </strong> Your banner is
                        placed on our sidebar. The cost is ranging from
                        <em>$100 monthly</em>.
                      </p>
                      <p>
                        <strong>Product Review/Copywriting: </strong> We will
                        develop a compelling article using your product and
                        write a review on it and promote it across our
                        audiences. The cost is <em>$350 per article</em>.
                      </p>
                      <p>
                        <strong>Sponsored Post: </strong>We can publish your
                        copyrighted articles on our website and promote them
                        across our audiences. The cost is
                        <em>$250 per article</em>.
                      </p>
                      <p>
                        <strong>Guest Link: </strong>Inserting Guest Link in one
                        of our articles. The cost is <em>$50 per link</em>.
                      </p>
                    </div>
                    <div class="card-footer">
                      <p>
                        Let's not waste your time with more text to read: Drop
                        us a mail of what you need specifically with the mail
                        subject containing "Advertising", we will work something
                        out together :)
                      </p>
                      <Button class="btn-block" link="/contact"
                        >Contact Us!</Button
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <Newsletter class="mb-3" />

                  <!-- <div class="card mb-3 b-none">
                    <h5 class="card-header text-uppercase">
                      Audience breakdown
                    </h5>
                    <div class="card-body">
                      <ul>
                        <li>Facebook Page => 1.1k+</li>
                        <li>Facebook Group => 15K+</li>
                        <li>Mail Newsletter => 2k+</li>
                        <li>Monthly traffic => 10k - 15k+</li>
                        <li>LinkedIn Page => 1.5k+</li>
                      </ul>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      title: 'Write for us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Join other backend developers to write about backend development, cloud/DevOps, and Blockchain article today!',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Write for us',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Join other backend developers to write about backend development, cloud/DevOps, and Blockchain article today!',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
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

<style scoped>
.card-body p {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2;
  font-family: Merriweather, roboto;
}
em {
  color: red;
}

strong {
  font-weight: bolder;
  font-size: 2rem;
}
</style>
