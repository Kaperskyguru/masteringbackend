import DiceJobs from '../services/scrappers/dice-scrapper'
import GithubJobs from '../services/scrappers/githubjobs-scrapper'
import StackoverflowJobs from '../services/scrappers/stackoverflow-scrapper'
import LinkedinJobs from '../services/scrappers/linkedin-scrapper'
import DB from '../db'
const { Router } = require('express')

const router = Router()

// Mock jobs
let jobs = []

/* GET jobs listing. */
router.get('/jobs', async function (req, res, next) {
  jobs = await new DB().index(50)
  const data = {}
  data.jobs = jobs
  data.total_jobs = jobs.length
  res.json(data)
})

router.get('/jobs/scrape/github', async function (req, res) {
  await GithubJobs.scrape()
  return res.json()
})

router.get('/jobs/scrape/stackoverflow', async function (req, res) {
  await StackoverflowJobs.scrape()
  return res.json()
})

router.get('/jobs/scrape/dive', async function (req, res) {
  await DiceJobs.scrape()
  return res.json()
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
