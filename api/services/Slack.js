import axios from 'axios'
// import moment from '@nuxtjs/moment'
import DB from '../db'

class Slack {
  static async dispatchJob() {
    // Get Job and update
    const res = await DB.getJob()
    // Send to Slack
    if (res.jobs) {
      const result = await this.sendJobSlack(res.jobs)
      // console.log(result)
      if (result === 'ok') {
        // Update Job status
        if (await DB.updateJob(res.jobs)) {
          return {
            message: 'updated successfully',
            job: res.jobs,
          }
        }
      }
      return {
        message: 'Slack Job failed',
        job: res.jobs,
      }
    }
    return {
      message: 'Could not retrieve job',
    }
  }

  static async dispatchPost() {
    // Get Job and update
    const res = await DB.getRandomPost()
    // Send to Slack
    if (res.posts) {
      const result = await this.sendPostSlack(res.posts[0])
      if (result === 'ok') {
        return {
          message: 'Updated successfully',
        }
      }
      return {
        message: 'Slack Post failed',
      }
    }
    return {
      message: 'Could not retrieve post',
    }
  }

  static sendPostSlack(post) {
    // console.log(
    //   // new Date(post.modified) < new Date(),
    //   moment(post.modified),
    //   new Date()
    // )

    const inputDate = new Date(post.modified)
    const today = new Date()
    const content =
      inputDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
        ? '@here \n\n' + this.stripTags(post)
        : this.stripTags(post)

    const block = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `<${process.env.BASE_URL}/posts/${post.slug} |* ${post.title}*>`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: content,
          },
          accessory: {
            type: 'image',
            image_url: this.image(post),
            alt_text: post.title,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Read More',
                emoji: true,
              },
              url: `${process.env.BASE_URL}/posts/${post.slug}`,
              style: 'danger',
              value: 'click_me_123',
              action_id: 'actionId-0',
            },
          ],
        },
      ],
    }
    const url = process.env.SLACK_POST_WEBHOOK
    return this.postToSlack(url, block)
  }

  static sendJobSlack(job) {
    const block = {
      username: 'New-Articles',
      icon_emoji: ':bangbang:',
      text: job.title,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `<${process.env.BASE_URL}/jobs/${job.slug} |* ${job.title}*>`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '' + job.description,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Apply Now',
              emoji: true,
            },
            value: 'click_me_123',
            style: 'primary',
            url: `${process.env.BASE_URL}/jobs/${job.slug}`,
            action_id: 'button-action',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: '*Languages:*\n' + job.languages,
            },
            {
              type: 'mrkdwn',
              text: '*Location:*\n' + job.location,
            },
            {
              type: 'mrkdwn',
              text: '*Company:*\n' + job.company,
            },
            {
              type: 'mrkdwn',
              text: '*Posted:*\n' + job.date,
            },
          ],
        },
      ],
    }
    const url = process.env.SLACK_JOB_WEBHOOK
    return this.postToSlack(url, block)
  }

  static image(post) {
    if (post) {
      if (post.thumbnail_images) {
        if (post.thumbnail_images.full) return post.thumbnail_images.full.url
        return '/img/default_banner.webp'
      }
    }
    return '/img/default_banner.webp'
  }

  static stripTags(post) {
    if (post) {
      return post.excerpt.replace(/(<([^>]+)>)/gi, '')
    }
  }

  static postToSlack(url, message) {
    return axios
      .post(url, JSON.stringify(message))
      .then((result) => result.data)
      .catch((error) => {
        console.log(error)
      })
  }
}
export default Slack
