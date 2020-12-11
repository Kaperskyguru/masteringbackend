<template>
  <div class="container mt-5 pt-5 mb-4">
    <div class="row">
      <PillarPost
        title="Starting Backend Dev."
        :posts="be_posts"
        :subtitle="subtitle"
      />
      <PillarPost
        title="Journey as a backend dev."
        :posts="journey_posts"
        :subtitle="subtitle"
      />
    </div>
  </div>
</template>

<script>
export default {
  //How to be a better software developer (under journey)

  data() {
    return {
      subtitle:
        'We are going to help you start your backend development journey.',
    }
  },

  props: {
    posts: {
      type: [Object, Array],
      default: () => [],
    },
  },

  computed: {
    be_posts() {
      return this.posts
        .filter((post) => {
          if (
            post.custom_fields &&
            Array.isArray(post.custom_fields.is_backend)
          ) {
            return post.custom_fields.is_backend.toString() === 'true'
          }
        })
        .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
    },

    journey_posts() {
      return this.posts.filter((post) => {
        if (post.custom_fields && post.custom_fields.is_journey)
          return post.custom_fields.is_journey.toString() === 'true'
      })
    },
  },
}
</script>

<style>
</style>