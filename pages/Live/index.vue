<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <Youtube :video="upcomingStream.id.videoId" />
      </div>
    </div>
    <section class="main">
      <div class="padding-top grey-color">
        <div class="container inner-padding-top">
          <div class="row">
            <Title>
              <template slot="title">Past Backend Dev. Live Streams</template>
              <template slot="subtitle"
                >Want your event listed here? Contact Us.</template
              >
            </Title>
          </div>
          <!-- first card -->
          <div class="row mt-5">
            <div class="card-deck">
              <Stream
                v-for="(stream, i) in streams"
                :key="i"
                :stream="stream"
              />
            </div>
          </div>
        </div>

        <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
          <p>
            <a
              href="https://www.youtube.com/channel/UCECTWjjj21fa2bNQ07PKE3A/videos?view=2&flow=grid&view_as=subscriber"
              class="theme-btn btn-style-one"
              target="_blank"
              >More Live Streams</a
            >
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  // middleware: 'loadData',
  async fetch({ store }) {
    await store.dispatch('stream/getCompletedStreams')
    await store.dispatch('stream/getUpcomingStreams')
  },
  computed: {
    ...mapState({
      streams: (state) => state.stream.streams.items,
      upcomingStream: (state) => {
        if (
          state.stream.upcomingStream.length !== 0 &&
          state.stream.upcomingStream.items.length !== 0
        ) {
          return state.stream.upcomingStream.items[0]
        }
        if (state.stream.streams.length !== 0)
          return state.stream.streams.items[0]
        return {
          id: 'g4ATjKC4HFg',
        }
      },
    }),
  },

  head() {
    return {
      title: 'Live Streams',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'weekly backend development videos curated by the community',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'weekly backend development videos curated by the community',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'weekly backend development videos curated by the community',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>