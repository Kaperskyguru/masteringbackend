<template>
  <div>
    <form
      ref="form"
      method="post"
      action="https://masteringbackend.us17.list-manage.com/subscribe/post?u=39ffc375608455a6fe549290a&amp;id=e42cd7d4b3"
      class="form-slak"
      @submit.prevent="Submit()"
    >
      <div class="form-group">
        <label class="text-dark" for="text">
          <b>First Name</b>
        </label>
        <input
          v-model="user.firstname"
          class="form-control"
          type="text"
          name="FNAME"
          placeholder="Enter your firstname"
          required
        />
      </div>

      <div class="form-group">
        <label class="text-dark" for="text">
          <b>Last Name</b>
        </label>
        <input
          v-model="user.lastname"
          class="form-control"
          type="text"
          name="LNAME"
          placeholder="Enter your lastname"
          required
        />
      </div>
      <div class="form-group">
        <label class="text-dark" for="text">
          <b>E-mail</b>
        </label>
        <input
          v-model="user.email"
          class="form-control"
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email address"
        />
        <span v-if="error" class="text-danger">Enter a valid email</span>
      </div>

      <div class="form-group">
        <div class="form-check">
          <input
            id="gridCheck"
            class="form-check-input"
            checked
            type="checkbox"
          />
          <label class="form-check-label text-muted" for="gridCheck"
            >Weekly Newsletter</label
          >
        </div>
      </div>
      <small class="text-muted text-uppercase" style=""
        >By clicking Newsletter, you agree to receive our Weekly Mastering
        Backend emails. You can unsubscribe anytime.</small
      >

      <div class="field">
        <div v-if="slack" class="text-danger" v-html="slack"></div>
        <div class="control text-center mt-4">
          <button class="btn2 btn-block" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import MailChimp from '~/Services/MailChimp'
export default {
  name: 'SlackForm',

  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
      },
      error: false,
      newsletter: true,
    }
  },

  computed: {
    ...mapState({
      slack(state) {
        return state.slack
      },
    }),
    fullName: function () {
      return this.user.firstname + ' ' + this.user.lastname
    },
  },

  methods: {
    Submit() {
      if (this.validateEmail(this.user.email)) {
        if (this.newsletter) {
          this.joinSlack()
          this.suscribeNewsletter()
        } else this.joinSlack()
      } else this.error = true
    },

    joinSlack() {
      const data = {}
      data.fullName = this.fullName
      data.email = this.user.email
      this.$store.dispatch('JoinSlack', data)
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

<style></style>
