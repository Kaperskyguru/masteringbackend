<template>
  <div class="card single">
    <div class="card-body">
      <div class="row meta p-3">
        <h1 class="title">{{ job.title || '' }}</h1>
        <article
          v-highlight
          class="card-text"
          v-html="job.description"
        ></article>

        <!-- <InlineAdvert
          ad-layout-key="-gw-3+1f-3d+2z"
          adslot="7567111590"
          adformat="fluid"
          style="height: 50px !important; width: 100%"
        /> -->
      </div>
      <div class="card-line"></div>
      <div class="row meta">
        <div class="col-6">
          <div>
            <h5>Languages:</h5>
            <p>{{ job.languages || 'N/A' }}</p>
          </div>
          <div>
            <h5>Company:</h5>
            <p>{{ job.company || '' }}</p>
          </div>
        </div>
        <div class="col-6">
          <div>
            <h5>Location:</h5>
            <p>{{ job.location || 'Remote' }}</p>
          </div>
          <div>
            <h5>Posted Date:</h5>
            <p>{{ $moment(job.created_at).format('dddd, MMMM Do YYYY') }}</p>
          </div>
        </div>
        <!-- <InlineAdvert
          adLayoutKey="-fb+5w+4e-db+86"
          adslot="1058555324"
          adformat="fluid"
        /> -->
        <UdemyAd2
          title="Coding is not enough"
          img="https://res.cloudinary.com/kaperskydisk/image/upload/v1649681197/masteringbackend/books/1.jpg"
          link="https://masteringbackend.solomoneseme.com/coding-is-not-enough"
        />
      </div>

      <div class="card-line"></div>
      <!-- <inline-newsletter /> -->
      <div class="newsletter-job"></div>
      <!-- <InlineAdvert
        ad-layout-key="-fb+5w+4e-db+86"
        adslot="1058555324"
        adformat="fluid"
      /> -->
      <div class="card-line"></div>
      <div class="actions">
        <a class="btn btn3 btn-lg" :href="job.url" target="_blank">Apply Now</a>
        <small style="float: right">Source: {{ job.website }}</small>
      </div>

      <div class="card-line"></div>
      <h2 class="p-2">Sharing is caring :)</h2>
      <div class="social-share mb-4">
        <vue-goodshare />
      </div>
      <!-- <div class="card-line"></div>
      <div class="tags mb-4" style="color: red"></div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import InlineNewsletter from './InlineNewsletter.vue'

export default {
  name: 'SingleJob',
  props: {
    job: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      data: {},
    }
  },
  computed: {},
  mounted() {
    this.displayNewsletterJob()
  },

  methods: {
    displayNewsletterJob() {
      const newsletterJob = document.querySelectorAll('.newsletter-job')

      if (newsletterJob) {
        this.data.title = 'Get free weekly job alerts straight to your inbox!'
        this.data.subtitle =
          'Get free weekly backend development job alerts straight into your inbox.'
        this.data.tags = ['Job Alert']
        newsletterJob.forEach((newsletter) => {
          this.createNewsletter(newsletter, this.data)
        })
      }
    },

    createNewsletter(newsletter, data = {}) {
      if (newsletter != null) {
        const mountNode = document.createElement('div')
        mountNode.id = 'mount-node'
        newsletter.appendChild(mountNode)
        const ToastComp = Vue.extend(InlineNewsletter)
        if (Object.keys(data).length !== 0) {
          new ToastComp({
            propsData: {
              title: data.title,
              subtitle: data.subtitle,
              tags: data.tags,
            },
          }).$mount('#mount-node')
        } else {
          new ToastComp().$mount('#mount-node')
        }
      }
    },
  },
}
</script>

<style>
.card-text {
  font-family: Merriweather, roboto;
  font-weight: 400;
  line-height: 1.8;
  color: #222222;
  font-size: 1.125rem;
}

.card-text h1,
.card-text h2,
.card-text h3,
.card-text h4,
.card-text h5,
.card-text h6 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

.card-text ul {
  list-style: disc;
}

.block-image .card-img-top {
  border-radius: 2%;
}

.card .absolute {
  position: absolute;
  left: 30px;
  top: 30px;
  text-align: left;
  right: 0;
  width: 100%;
  z-index: 10;
}

.absolute a {
  font-size: 15px;
  color: #fff;
  display: inline-block;
  padding: 4px 25px;
  vertical-align: top;
  border-radius: 3px;
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 25px;
  font-family: 'Montserrat', Roboto;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: #fa4c23;
}
.author .profile {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.single p {
  margin-bottom: 2rem;
}

.meta h5 {
  font-weight: 550;
}
</style>
