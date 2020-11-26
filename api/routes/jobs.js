import DiceJobs from '../services/scrappers/dice-scrapper'
import GithubJobs from '../services/scrappers/githubjobs-scrapper'
import StackoverflowJobs from '../services/scrappers/stackoverflow-scrapper'
import LinkedinJobs from '../services/scrappers/linkedin-scrapper'
const { Router } = require('express')

const router = Router()

router.get('/jobs/scrape/github', async function (req, res) {
  const data = await GithubJobs.scrape()
  return res.json(data)
})

router.get('/jobs/scrape/stackoverflow', async function (req, res) {
  const data = await StackoverflowJobs.scrape()
  return res.json(data)
})

router.get('/jobs/scrape/dive', async function (req, res) {
  const data = await DiceJobs.scrape()
  return res.json(data)
})

module.exports = router
