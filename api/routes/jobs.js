import DiceJobs from '../services/scrappers/dice-scrapper'
import GithubJobs from '../services/scrappers/githubjobs-scrapper'
import StackoverflowJobs from '../services/scrappers/stackoverflow-scrapper'
import LinkedinJobs from '../services/scrappers/linkedin-scrapper'
const { Router } = require('express')

const router = Router()

// Mock jobs
let jobs = []

/* GET jobs listing. */
router.get('/jobs', async function (req, res, next) {
  jobs = await DiceJobs.getDiveJobs()
  // jobs = await GithubJobs.getGithubJobs()
  // jobs = await StackoverflowJobs.getJobs()
  // jobs = await LinkedinJobs.getJobs()
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
