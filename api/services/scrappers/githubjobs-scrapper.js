const puppeteer = require('puppeteer')
import DB from '../../db'
const jobUrl =
  'https://jobs.github.com/positions?utf8=%E2%9C%93&description=backend&location='

let page
let browser
let cardArr = []
class GithubJobs {
  static async init() {
    // console.log('Loading Page ...')

    browser = await puppeteer.launch({
      //   headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu',
      ],
    })

    page = await browser.newPage()
    await Promise.race([
      await page.goto(jobUrl, { waitUntil: 'networkidle2' }).catch(() => {}),
      await page.waitForSelector('.positionlist').catch(() => {}),
    ])
  }

  static async resolve() {
    await this.init()
    // console.log('Grabbing List of Job URLS ...')
    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll('.job')
      cardArr = Array.from(cards)

      const cardLinks = []
      cardArr.map((card) => {
        const cardTitle = card.querySelector('a:not([class])')
        const cardDesc = card.querySelector('.location')
        const cardCompany = card.querySelector('.company')
        const cardDate = card.querySelector('.when')
        const { text } = cardTitle
        const { host } = cardTitle
        const { protocol } = cardTitle
        const pathName = cardTitle.pathname
        const query = cardTitle.search
        const titleURL = protocol + '//' + host + pathName + query
        const company = cardCompany ? cardCompany.textContent : 'none'

        cardLinks.push({
          titleText: text,
          titleURLHost: host,
          titleURLPathname: pathName,
          titleURLSearchQuery: query,
          titleURL: titleURL,
          titleDesc: cardDesc.innerHTML,
          titleCompany: company,
          titleDate: cardDate.textContent,
        })
      })
      return cardLinks
    })

    return jobURLs
  }

  static async scrape() {
    const jobs = await this.resolve()
    await browser.close()
    new DB().store(this.jobResolver(jobs))
    return {
      message: 'Scraped successfully',
      status: 200,
    }
  }

  static async getJobs() {
    const jobs = await this.resolve()
    await browser.close()
    const data = {}
    data.jobs = jobs
    data.total_jobs = jobs.length
    new DB().store(this.jobResolver(jobs))
    return data
  }

  static jobResolver(jobs) {
    return jobs.map((job) => {
      const resolvedJob = []
      resolvedJob.push(
        job.titleText,
        job.titleDate,
        job.titleDesc,
        job.titleURLHost,
        job.titleURL,
        job.titleCompany
      )
      return resolvedJob
    })
  }
}

export default GithubJobs
