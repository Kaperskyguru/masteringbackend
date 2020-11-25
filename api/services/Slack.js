import axios from 'axios'

const url = process.env.SLACK_WEBHOOK

function sendPostSlack(post) {
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
          text: `<${post.url} |*${post.title}* >`,
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
            url: post.title,
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

  postToSlack(data)
}

function sendJobSlack(job) {
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
          text:
            '<https://google.com |*Traning Job Bot:* What is Lorem Ipsum? >',
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
          url: 'https://google.com',
          action_id: 'button-action',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '*Languages:*\nJava, PHP, JavaScript',
          },
          {
            type: 'mrkdwn',
            text: '*Location:*\nNigerian',
          },
          {
            type: 'mrkdwn',
            text: '*Company:*\nBackend Community',
          },
          {
            type: 'mrkdwn',
            text: '*Posted:*\n 6 minutes ago',
          },
        ],
      },
    ],
  }

  postToSlack(data)
}

function postToSlack(message) {
  axios
    .post(url, JSON.stringify(message))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}
