import request from 'request'
require('dotenv').config()
class SlackInviter {
  static invite({ email, fullName }) {
    const channels = [
      'C0181LSEQKA',
      'C016X3N35RD',
      'C0182HSQ481',
      'C017AEHLN8M',
    ]

    const token = process.env.SLACK_TOKEN
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: 'https://backend-community.slack.com/api/users.admin.invite',
          form: {
            channels: JSON.stringify(channels),
            email: email,
            token: token,
            set_active: true,
            real_name: fullName,
          },
        },
        function (err, httpResponse, body) {
          if (err) {
            reject(err)
          }
          body = JSON.parse(body)
          if (body.ok) {
            const message =
              'Success! Check &ldquo; ' +
              email +
              ' &rdquo; for an invite from Slack.'
            resolve(message)
          } else {
            let { error } = body
            console.log(body, token, process.env.SLACK_INVITE_LINK_CODE)
            if (
              error === 'already_invited' ||
              error === 'already_in_team' ||
              error === 'already_in_team_invited_user'
            ) {
              const message =
                'Success! You were already invited. Visit <a href="https://backend-community.slack.com">Backend Community </a>'
              resolve(message)
            } else if (error === 'invalid_email') {
              error = 'The email you entered is an invalid email.'
            } else if (error === 'internal_error') {
              error = 'Please enter your name'
            } else {
              error = `Something has gone wrong. Please contact a system administrator. <br /> <a class="form-slack" style="color: red !important;" href="https://join.slack.com/t/backend-community/shared_invite/${process.env.SLACK_INVITE_LINK_CODE}">Click here to join Slack</a>`
            }
            resolve(error)
          }
        }
      )
    })
  }
}

export default SlackInviter
