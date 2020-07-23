<template>
  <form class="form-slak" action="#">
    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>First Name</b>
      </label>
      <input
        class="form-control"
        style="height: 40px; width: 70%;"
        type="text"
        placeholder=""
      />
    </div>

    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>Last Name</b>
      </label>
      <input
        class="form-control"
        style="height: 40px; width: 70%;"
        type="text"
        placeholder=""
      />
    </div>
    <div class="form-inline" style="justify-content: space-around;">
      <label class="text-dark" for="text">
        <b>E-mail</b>
      </label>
      <input
        class="form-control"
        style="height: 40px; width: 70%;"
        type="text"
        placeholder=""
      />
    </div>

    <div class="form-inline" style="justify-content: center;">
      <input
        id="newsletter"
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
      <div class="control text-center mt-4">
        <button class="btn2 btn-block" type="submit">
          <a href="">Submit</a>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SlackForm',
}
</script>

<style></style>
