<template>
  <div class="card text-white mb-3">
    <h5 class="card-header text-uppercase text-center">Newsletter</h5>
    <div class="card-body">
      <p class="card-text">
        Get the latest Backend Dev. jobs, events and curated articles straight
        to your inbox, once a week
      </p>
      <form @submit.prevent="submit()">
        <input type="hidden" name="_token" value="#" />
        <div class="field">
          <div class="control">
            <input
              v-model="email"
              class="input"
              name="email"
              type="text"
              placeholder="Enter your email"
              value=""
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control text-center mt-4">
            <button class="button btn-success" type="submit">
              Yes, I'm In!
            </button>
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
      email: '',
    }
  },
  methods: {
    async submit() {
      const url = `https://masteringbackend.us17.list-manage.com/subscribe/post`
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify([this.email]),
      })

      // console.log(await res.json())
    },
  },
}
</script>

<style></style>
