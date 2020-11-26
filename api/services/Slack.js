import axios from 'axios'
import DB from '../db'

const url = process.env.SLACK_WEBHOOK

class Slack {
  async dispatchJob() {
    // Get Job and update
    const job = await DB.getJob()
    // Send to Slack

    if (job) {
      return this.sendJobSlack(job)
    }

    return
  }

  sendPostSlack(post) {
    //   const data = {
    //     username: 'Post Notifier', // Title
    //     icon_emoji: ':bangbang:',
    //   }
    //   data.text = post.excerpt // Description

    //   data.attachments = []
    //   data.attachments = [
    //     {
    //       color: '#eed140',

    //       fields: [
    //         {
    //           title: 'Environment',
    //           value: 'https://masteringbackend.com', // Title
    //           short: true,
    //         },
    //       ],
    //     },
    //   ]

    const block = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `</posts/${post.slug} |*${post.title}* >`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: post.excerpt,
          },
          accessory: {
            type: 'image',
            image_url: post.image,
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
              url: `/posts/${post.slug}`,
              style: 'danger',
              value: 'click_me_123',
              action_id: 'actionId-0',
            },
          ],
        },

        //   {
        //     type: 'divider',
        //   },
        //   {
        //     type: 'input',
        //     block_id: 'input123',
        //     label: {
        //       type: 'plain_text',
        //       text: 'Never miss any post again',
        //     },
        //     element: {
        //       type: 'plain_text_input',
        //       action_id: 'plain_input',
        //       placeholder: {
        //         type: 'plain_text',
        //         text: 'Input your best email',
        //       },
        //     },
        //   },
        //   {
        //     type: 'actions',
        //     elements: [
        //       {
        //         type: 'button',
        //         text: {
        //           type: 'plain_text',
        //           text: 'Subscribe Now',
        //           emoji: true,
        //         },
        //         value: 'click_me_123',
        //         url: 'https://google.com',
        //         style: 'primary',
        //         action_id: 'actionId-0',
        //       },
        //     ],
        //   },
      ],
    }

    return this.postToSlack(data)
  }

  sendJobSlack(job) {
    //   const data = {
    //     username: 'Job Notifier',
    //     icon_emoji: ':bangbang:',
    //   }
    //   data.text = job.title
    //   //   if (payload.resource) {
    //   //     data.text = payload.resource.message
    //   //   }
    //   data.attachments = []
    //   data.attachments = [
    //     {
    //       color: '#eed140',

    //       fields: [
    //         {
    //           title: 'Environment',
    //           value: 'Development',
    //           short: true,
    //         },
    //         {
    //           title: 'StackTrace',
    //           value: payload.fileName,
    //           short: true,
    //         },
    //       ],
    //     },
    //   ]

    const block = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `</jobs/${job.slug} |* ${job.title} *>`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: job.description,
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
            url: `/jobs/${job.slug}`,
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

    return this.postToSlack(data)
  }

  postToSlack(message) {
    axios
      .post(url, JSON.stringify(message))
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
  }
}
export default Slack
