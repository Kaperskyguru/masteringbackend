import DiceJobs from '../services/scrappers/dice-scrapper'
const { Router } = require('express')

const router = Router()

// Mock jobs
let jobs = []

/* GET jobs listing. */
router.get('/jobs', function (req, res, next) {
  jobs = DiceJobs.getDiveJobs()
  res.json(jobs)
})

/* GET user by ID. */
router.get('/jobs/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < jobs.length) {
    res.json(jobs[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
