<template>
  <div class="card mb-3">
    <h5 class="card-header text-center text-uppercase text-white">
      {{ title }}
    </h5>
    <div class="card-body">
      <div class="p-2 mb-2" v-for="post in posts" :key="post.id">
        <PostTitle :post="post" :show_date="show_date" />
      </div>
      <!-- <div class="img-div text-success">
                      <figure class="aside-img">
                        <a href="#" target="_blank" title="Koho">
                          <img
                            class="lazyload has-text-centered"
                            src="/img/event1.jpeg"
                            alt="Koho"
                          />
                        </a>
                      </figure>
                    </div>
                    <div class="img-div">
                      <figure class="aside-img">
                        <img
                          v-lazy-load
                          class="img-fluid"
                          data-src="/img/event2.jpeg"
                          alt=""
                        />
                      </figure>
                    </div>

                    <div class="img-div">
                      <figure class="aside-img">
                        <img class="img-fluid" src="/img/event3.jpeg" alt="" />
                      </figure>
                    </div> -->
      <!-- <form method="post" action="#">
                      <div class="field">
                        <div class="control text-center mt-4">
                          <button class="button btn2" type="submit">
                            Become a partner
                          </button>
                        </div>
                      </div>
                    </form> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    posts: {
      type: [Array, Object],
      default: () => [],
    },
    show_date: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style>
</style>