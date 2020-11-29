<template>
  <div class="col-md-6 mb-4">
    <div class="card card-2 p-md-5 pt-3">
      <header class="text-center">
        <h2 class="text-uppercase">
          <i class="fa fa-book pr-2"></i>{{ title }}
        </h2>
        <h6>{{ subtitle }}</h6>
      </header>
      <content class="pt-4">
        <ul>
          <li v-for="post in posts" :key="post.id">
            <nuxt-link :to="{ path: '/posts/' + post.slug }"
              ><i class="fa fa-book"></i> {{ post.title }}
            </nuxt-link>
          </li>
        </ul>
      </content>
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
    subtitle: {
      type: String,
      default: '',
    },
    posts: {
      type: [Object, Array],
      default: () => {},
    },
  },
}
</script>

<style scoped>
.card-2 {
  display: flex;
  flex-direction: column !important;
  height: 400px;
  background-color: #fdf7f4;
  border: none;
}
.card-2 ul li {
  font-size: 20px;
  font-style: italic;
  align-self: center;
  padding-left: 0px;
  display: inline-block;
  color: #201f1f;
}

.card-2 h2 {
  color: #fa4c23;
  line-height: 32px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
  .card-2 {
    height: auto;
    min-height: 300px;
  }
}
</style>