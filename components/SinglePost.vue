<template>
  <div class="card single">
    <div class="card-head pl-3 pr-3 pt-3">
      <h1 class="title">{{ post.title || '' }}</h1>
      <div class="d-flex">
        <div class="author d-flex pr-3 pb-4">
          <div class="profile mr-2"></div>
          <a :href="'/authors/' + post.author.slug" class="subtitle is-6">
            {{ post.author.name }}
          </a>
        </div>

        <div class="date_created">
          <small class="text-muted">
            <li class="fa fa-calendar"></li>
            <time
              :datetime="$moment(post.date).format('MMMM Do YYYY, h:mm:ss a')"
              >{{ $moment(post.date).format('MMMM Do YYYY') }}</time
            >
          </small>
        </div>
      </div>
    </div>
    <div class="block-image">
      <figure class="pl-3 pr-3 pt-2">
        <img
          data-not-lazy
          :src="image"
          class="card-img-top"
          :alt="post.title"
        />
      </figure>
    </div>

    <div class="tags absolute">
      <a
        :href="'/categories/' + category.slug"
        v-for="category in post.categories"
        :key="category.id"
      >
        {{ category.title }}
      </a>
    </div>

    <div class="card-body">
      <p>Sharing is Caring... Show some love :)</p>
      <div class="social-share mt-4">
        <vue-goodshare has_counter />
      </div>
      <article v-highlight class="card-text" v-html="post.content"></article>

      <div class="card-line"></div>
      <inline-newsletter />
      <div class="card-line"></div>
      <h2 class="p-2">Sharing is caring :)</h2>
      <div class="social-share mb-4">
        <vue-goodshare has_counter />
      </div>
      <div class="card-line"></div>
      <div class="tags mb-4" style="color: red">
        <i class="fa fa-tag"></i>
        <a href="#" v-for="tag in post.tags" :key="tag.id">
          {{ tag.title }},
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import InlineNewsletter from './InlineNewsletter.vue'

export default {
  // components: { InlineNewsletter },
  name: 'SinglePost',
  data() {
    return {
      data: {},
    }
  },
  props: {
    post: {
      type: [Object, Array],
      default: () => {},
    },
  },
  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          if (this.post.thumbnail_images['post-thumbnail']) {
            return this.post.thumbnail_images['post-thumbnail'].url
          } else {
            return this.post.thumbnail_images.full.url
          }
        }
      }
      return '/img/default_banner.webp'
    },
  },

  methods: {
    displayNewsletterLaravel() {
      const newsletterLaravel = document.querySelectorAll('.newsletter-laravel')
      const newsletterNode = document.querySelectorAll('.newsletter-node')

      if (newsletterNode) {
        this.data.title = 'Get free NODEJS tips straight to your inbox!'
        this.data.subtitle =
          'Get my free 10 NODEJS tips that make you more productive.'
        this.data.tags = ['Node Tips']
        newsletterNode.forEach((newsletter) => {
          this.createNewsletter(newsletter, this.data)
        })
      }

      if (newsletterLaravel) {
        this.data.title = 'Get free LARAVEL tips straight to your inbox!'
        this.data.subtitle =
          'Get my free 10 LARAVEL tips that make you more productive.'
        this.data.tags = ['Laravel Tips']
        newsletterLaravel.forEach((newsletter) => {
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

    displayNewsletterBackend() {
      const newsletters = document.querySelectorAll('.article-newsletter')
      newsletters.forEach((newsletter) => {
        this.createNewsletter(newsletter)
      })
    },
  },
  mounted() {
    this.displayNewsletterBackend()
    this.displayNewsletterLaravel()
  },
}
</script>

<style>
.card-text {
  font-family: Nunito, Roboto;
  font-weight: 400;
  line-height: 1.8;
  color: #334c70;
  font-size: 1.25rem;
}

h1.title {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 47px;
  line-height: 1.3em;
  color: #002766;
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

.card-text h1,
.card-text h2,
.card-text h3,
.card-text h4 {
  color: #fa4c23;
  font-weight: bold;
}

.card-text h1,
.card-text h2 {
  font-weight: bold;
}

.card-text ul {
  list-style: disc;
}

.block-image .card-img-top {
  border-radius: 2%;
}
.card .absolute {
  margin-left: 20px;
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
  font-family: 'Open Sans', Roboto !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: #fa4c23;
}
.author {
  color: #fa4c23;
}
.author .profile {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  /* display: inline-flex; */
}

figure iframe {
  width: 100%;
}

.single p {
  margin-bottom: 1.5rem;
  color: #002766;
}
</style>
