<template>
  <!-- <form ref="form" class="form-slak" @submit.prevent="Submit()">
    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>First Name</b>
      </label>
      <input
        v-model="user.firstname"
        class="form-control"
        style="height: 40px; width: 70%;"
        type="text"
        name="FNAME"
        placeholder="Enter your firstname"
        required
      />
    </div>

    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>Last Name</b>
      </label>
      <input
        v-model="user.lastname"
        class="form-control"
        style="height: 40px; width: 70%;"
        type="text"
        name="LNAME"
        placeholder="Enter your lastname"
        required
      />
    </div>
    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>E-mail</b>
      </label>
      <input
        v-model="user.email"
        class="form-control"
        style="height: 40px; width: 70%;"
        type="email"
        name="EMAIL"
        required
        placeholder="Enter your email address"
      />
      <span v-if="error" class="text-danger">Enter a valid email</span>
    </div>

    <div class="form-inline" style="justify-content: center;">
      <input
        id="newsletter"
        v-model="newsletter"
        type="checkbox"
        class="form-control checkbox"
        name="newsletter"
        value="1"
        checked="checked"
      />
      <label class="text-dark" for="newsletter">
        <b>Weekly Newsletter</b>
      </label>

      <small
        class="text-muted form-inline text-uppercase"
        style="margin-left: 7rem;"
        >By clicking Newsletter, you agree to receive our Weekly Mastering
        Backenc emails. You can unsubscribe anytime.</small
      >
    </div>

    <div class="field">
      <div v-if="slack" class="text-danger" v-html="slack"></div>
      <div class="control text-center mt-4">
        <button class="btn2 btn-block" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form> -->

  <a
    class="form-slack"
    style="color: red !important;"
    href="https://join.slack.com/t/backend-community/shared_invite/zt-gycntdhj-Y~q3Sd4VLPsQVNb_HHYuzw"
    >Click here to join Slack</a
  >
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
          // await this.suscribeNewsletter()
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
      // await Mailchimp.sub(this.user)
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
