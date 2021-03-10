<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <section>
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <div class="col-md-12 col-sm-12-col-xs-12 text-center">
              <h1 class="lead-title text-uppercase">Contact Us</h1>
            </div>
          </div>

          <div class="row mt-5 writer">
            <div class="card-group">
              <div class="row">
                <div class="col-md-12">
                  <div class="card mb-3">
                    <h5 class="card-header text-uppercase">Contact Us</h5>
                    <div class="card-body">
                      If you have any query or suggestion then fill the form
                      below I will be in touch with you shortly.
                      <p>
                        mail us at – masteringbackend@gmail.com, we will get
                        back to you within 24 hours.
                      </p>
                    </div>
                  </div>
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
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'If you have any query or suggestion then fill the form below I will be in touch with you shortly.',
        },

        { hid: 'og:title', property: 'og:title', content: 'Contact Us' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'If you have any query or suggestion then fill the form below I will be in touch with you shortly.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style>
</style>