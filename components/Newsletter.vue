<template>
  <div class="card text-white">
    <h5 class="card-header text-uppercase">Newsletter</h5>
    <div class="card-body">
      <p class="text-muted">
        Get the latest Backend Dev. jobs, events and curated articles straight
        to your inbox, once a week
      </p>
      <form
        ref="form"
        method="post"
        action="https://masteringbackend.us17.list-manage.com/subscribe/post?u=39ffc375608455a6fe549290a&amp;id=e42cd7d4b3"
        class="form-slack"
        @submit.prevent="submit"
      >
        <div class="field form-group">
          <input
            v-model="email"
            class="input form-control"
            name="EMAIL"
            type="email"
            placeholder="Enter your email"
            required
          />
          <span v-if="error" class="text-danger">Enter a valid email</span>
        </div>
        <div class="form-group">
          <div class="text-center">
            <!-- <button class="btn  btn-success" type="submit">
              
            </button> -->
            <Button class="btn-block" link="#">Yes, I'm In!</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      email: '',
    }
  },
  methods: {
    submit() {
      if (this.validateEmail(this.email)) {
        this.suscribeNewsletter()
      } else this.error = true
    },

    suscribeNewsletter() {
      this.$refs.form.submit()
    },
    validateEmail(email) {
      if (email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
      }
      return false
    },
  },
}
</script>
