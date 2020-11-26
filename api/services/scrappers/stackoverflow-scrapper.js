const puppeteer = require('puppeteer')
import { dbJobResolver } from '../../../helpers/helpers'
import DB from '../../db'
const jobUrl = `https://stackoverflow.com/jobs?q=backend&sort=p`

let page
let browser
let cardArr = []
class StackoverflowJobs {
  static async init() {
    // console.log('Loading Page ...')

    browser = await puppeteer.launch({
      // headless: false,
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
      await page.waitForSelector('.listResults').catch(() => {}),
    ])
  }

  static async resolve() {
    await this.init()
    // console.log('Grabbing List of Job URLS ...')
    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll('.-job')
      cardArr = Array.from(cards)

      const cardLinks = []
      cardArr.map((card) => {
        const cardDate = card.querySelector('.fc-orange-400')

        if (cardDate.textContent.includes('h')) {
          const cardTitle = card.querySelector('.s-link')
          const cardDesc = Array.from(card.querySelectorAll('.post-tag'))
            .map((tag) => tag.text)
            .join(', ')
          const cardCompany = card.querySelector('span:not([class])')
          const cardLocation = card.querySelector('span.fc-black-500') //-location

          const { text } = cardTitle
          const { host } = cardTitle
          const { protocol } = cardTitle
          const pathName = cardTitle.pathname
          const query = cardTitle.search
          const titleURL = protocol + '//' + host + pathName + query
          const company = cardCompany.textContent
          const location = cardLocation.textContent.includes(
            'No office location'
          )
            ? 'Remote'
            : cardLocation.textContent

          cardLinks.push({
            titleText: text,
            titleURLHost: host,
            titleURLPathname: pathName,
            titleURLSearchQuery: query,
            titleURL: titleURL,
            titleDesc: cardDesc,
            titleCompany: company,
            titleDate: cardDate.textContent,
            titleLocation: location,
            titleLang: cardDesc,
          })
        }
      })
      return cardLinks
    })

    return jobURLs
  }

  static async scrape() {
    const jobs = await this.resolve()
    await browser.close()
    const data = await DB.store(dbJobResolver(jobs))
    return {
      message: 'Scraped successfully',
      status: 200,
      data,
    }
  }

  static async getJobs() {
    const jobs = await this.resolve()
    await browser.close()
    // console.log(jobs)
    const data = {}
    data.jobs = jobs
    data.total_jobs = jobs.length
    DB.store(dbJobResolver(jobs))
    return data
  }
}

export default StackoverflowJobs

// const puppeteer = require('puppeteer')

// // https://www.dice.com/jobs?q=Full%20Stack%20Developer&countryCode=US&radius=30&radiusUnit=mi&page=10&pageSize=100&filters.postedDate=SEVEN&language=en
// // Scrape jobs with title 'Full Stack Developer' in the US within 30 miles of IP access.
// // Returns paginated results in english.
// // Only returns jobs that were posted 7 days ago or sooner.

// ;(async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   console.log('Loading Page ...')
//   const pageURL =
//     'https://www.dice.com/jobs?q=backend&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&language=en'
//   await page.goto(pageURL, { waitUntil: 'networkidle2' })
//   await page.waitForSelector('.search-card')

//   console.log('Grabbing List of Job URLS ...')
//   const jobURLs = await page.evaluate(() => {
//     const cards = document.querySelectorAll('.search-card')
//     const cardArr = Array.from(cards)

//     const cardLinks = []

//     cardArr.map((card) => {
//       const cardTitle = card.querySelector('.card-title-link')
//       const cardDesc = card.querySelector('.card-description')
//       const { text } = cardTitle
//       const { host } = cardTitle
//       const pathName = cardTitle.pathname
//       const query = cardTitle.search
//       const titleURL = host + pathName + query

//       //return card
//       cardLinks.push({
//         titleText: text,
//         titleURLHost: host,
//         titleURLPathname: pathName,
//         titleURLSearchQuery: query,
//         titleURL: titleURL,
//         titleDesc: cardDesc.innerHTML,
//       })
//     })
//     return cardLinks
//   })
//   await browser.close()
//   return jobURLs
// })()
