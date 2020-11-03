<template>
  <section class="main">
    <Breadcrumb :paths="path" />
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Upcoming Backend Dev. Events</template>
            <template slot="subtitle"
              >Want your event listed here? Contact Us.</template
            >
          </Title>
        </div>
        <!-- first card -->
        <div class="row mt-5">
          <EventPost v-for="(event, i) in events" :key="i" :event="event" />
        </div>
      </div>

      <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
        <Button class="p-3">More Events</Button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { sortAsc } from '~/helpers/helpers'
export default {
  async asyncData({ store }) {
    const getEvents = store.getters['event/getEvents']
    const events = getEvents()
    if (!events) {
      await store.dispatch('event/getMeetupEvents')
    }
  },
  data() {
    return {
      path: '',
    }
  },
  computed: {
    ...mapState({
      events: (state) => {
        return sortAsc([...state.event.events])
      },
    }),
  },
  head() {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'weekly backend development events curated by the community',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'weekly backend development events curated by the community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'weekly backend development events curated by the community',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.path = to.fullPath
    })
  },
}
</script>

<style></style>
