<template>
  <div class="ck_form ck_minimal ck_horizontal mt-5 mb-5">
    <div class="ck_form_fields">
      <h3 class="ck_form_title">{{ title }}</h3>
      <div class="ck_description text-center">
        <p>
          {{ subtitle }}
        </p>
      </div>
      <div id="ck_success_msg" style="display: none">
        <p>Success! Now check your email to confirm your subscription.</p>
      </div>
      <!--  Form starts here  -->
      <form
        id="ck_subscribe_form"
        class="ck_subscribe_form"
        v-on:submit.prevent="submit()"
      >
        <div class="ck_errorArea">
          <div id="ck_error_msg" style="display: none">
            <p id="error_message">
              There was an error submitting your subscription. Please try again.
            </p>
          </div>
        </div>
        <div class="row p-4">
          <div class="col-md-10 col-sm-12 m-0 p-0">
            <input
              type="email"
              name="email"
              class="ck_email_address d-sm-block"
              id="ck_emailField"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button
            class="subscribe_button ck_subscribe_button btn-sm-block fields col-md-2 col-sm-12"
            id="ck_subscribe_button"
            type="submit"
          >
            Get the tips!
          </button>
        </div>
      </form>

      <span class="ck_guarantee">
        Don't worry. I'll never, ever spam you!
      </span>
    </div>
  </div>
</template>

<script>
import Superagent from 'superagent'
export default {
  props: {
    title: {
      type: String,
      default: 'Start Learning Backend Dev. Now',
    },
    subtitle: {
      type: String,
      default:
        'Stop waiting and start learning! Get my 10 tips on teaching yourself backend development.',
    },
    tags: {
      type: Array,
      default: () => ['Start Backend Dev'],
    },
  },
  methods: {
    async submit() {
      try {
        const email = document.querySelector('.ck_email_address').value
        const data = {
          email: email,
          tags: this.tags,
        }
        const res = await Superagent.post('/api/mailchimp/subscribe').send(data)
        if (res.body.status === 200) {
          document.querySelector('#ck_success_msg').style.display = 'block'
          return
        } else if (res.body.status === 400) {
          document.querySelector('#ck_error_msg').style.display = 'block'
          document.getElementById('error_message').innerHTML =
            'Seems like you have already subscribed, You can input another email'
          return
        }
        document.querySelector('#ck_error_msg').style.display = 'block'
        return
      } catch (error) {
        document.querySelector('#ck_error_msg').style.display = 'block'
      }
    },
  },
}
</script>

<style scoped>
.ck_form.ck_minimal {
  font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;
  line-height: 1.5em;
  overflow: hidden;
  color: #666;
  font-size: 16px;
  border: solid 1px #d1d1d1;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  clear: both;
  text-align: center;
  background: #f1f1f1;
  border: 0;
  box-shadow: 0 1px 8px rgba(65, 64, 66, 0.3);
}
.ck_form.ck_minimal .ck_form_fields {
  width: 100%;
  float: left;
  padding: 2%;
}

.ck_form.ck_minimal h3.ck_form_title {
  text-align: left !important;
  letter-spacing: 0.01em;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Open Sans', Arial, sans-serif;
  color: #fa4c23;
}
.ck_form.ck_minimal h3.ck_form_title {
  text-align: center !important;
  letter-spacing: 0.01em;
  font-weight: bold;
  font-size: 28px;
  font-family: 'Open Sans', Arial, sans-serif;
  color: #fa4c23;
  margin: 0px 0px 10px;
}
.ck_form.ck_minimal div.ck_description p {
  text-align: center;
  color: #686868;
  line-height: 1.5;
  font-size: 20px;
  font-family: 'Open Sans', Arial, sans-serif;
  margin: 10px 0 30px;
}

#ck_success_msg {
  color: rgb(5, 124, 5);
}

.post-content p,
.post-content li {
  margin: 1.5em 0 1.2em;
  line-height: 1.6;
  font-size: 22px;
  padding: 0px;
}

.ck_form.ck_minimal input[type='text'],
.ck_form.ck_minimal input[type='email'] {
  font-size: 18px;
  padding: 10px 8px;
  width: 100%;
  border: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 0.5em;
  height: auto;
  float: left;

  /* height: 42px; */
}

.ck_form.ck_minimal .ck_subscribe_button {
  color: #fff;
  padding: 0.8rem 12px;
  font-weight: bold;
  line-height: 1;
  vertical-align: middle;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-size: 15px;
  background: #fa4c23;
  border-radius: 4px;
  border: 0px;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  cursor: pointer;
  text-shadow: none;
  /* width: 30%; */
  /* float: left; */
  height: 50%;
}

.ck_form.ck_minimal #ck_error_msg {
  color: #fa4c23;
}

.ck_form.ck_minimal .ck_guarantee {
  color: #414042;
  text-align: left;
  padding: 5px 0px 0px;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  display: block;
  clear: both;
  font-size: 0.6rem;
  font-style: italic;
}
</style>