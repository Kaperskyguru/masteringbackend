<template>
  <div class="card text-white mb-3">
    <h5 class="card-header text-uppercase text-center">
      Newsletter
    </h5>
    <div class="card-body">
      <p class="card-text">
        Get the latest Backend Dev. jobs, events and curated articles straight
        to your inbox, once a week
      </p>
      <form method="post" action="#">
        <input type="hidden" name="_token" value="#" />
        <div class="field">
          <div class="control">
            <input
              class="input"
              name="email"
              type="text"
              placeholder="Enter your email"
              value=""
              required=""
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
export default {}
</script>

<style></style>
