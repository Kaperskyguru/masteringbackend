import Mailchimp from '../services/MailChimp'
const { Router } = require('express')

const router = Router()

/* GET jobs listing. */
router.get('/mailchimp/lists', async function (req, res, next) {
  const data = await new Mailchimp().getLists()
  res.json(data)
})

/* POST Add subscriber to list. */
router.post('/mailchimp/subscribe', async function (req, res, next) {
  // Validate data first
  try {
    if (validateEmail(req.body.email)) {
      const data = await new Mailchimp().subscribe(req.body)
      if (data.id && data.status === 'subscribed') {
        res.json({
          message: 'User subscribed successfully',
          status: 200,
          data,
        })
      } else if (!isNaN(data.status)) {
        return res.json({
          message: 'An error occurred',
          error: data,
        })
      }
    }
    return res.json({
      message: 'Please enter a valid email address',
      status: 422,
    })
  } catch (error) {
    return res.json({
      message: 'An error occurred',
      status: 400,
      error: error,
    })
  }
})

function validateEmail(email) {
  //   console.log(email)
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email && email.match(mailformat)) {
    return true
  }
  return false
}

module.exports = router
