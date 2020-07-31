import puppeteer from 'puppeteer'
const jobUrl = `https://www.dice.com/jobs?q=backend&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&language=en`

let page
let browser
// let jobURLs = []
let cardArr = []
class DiveJobs {
  static async init() {
    // console.log('Loading Page ...')
    browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    page = await browser.newPage()

    await page.goto(jobUrl, { waitUntil: 'networkidle2' })
    await page.waitForSelector('.search-card')
  }

  static async resolve() {
    await this.init()
    // console.log('Grabbing List of Job URLS ...')
    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll('.search-card')
      cardArr = Array.from(cards)

      const cardLinks = []
      cardArr.map((card) => {
        const cardTitle = card.querySelector('.card-title-link')
        const cardDesc = card.querySelector('.card-description')
        const cardCompany = card.querySelector(
          'a[data-cy="search-result-company-name"]'
        )
        const cardDate = card.querySelector('.posted-date')
        const { text } = cardTitle
        const { host } = cardTitle
        const { protocol } = cardTitle
        const pathName = cardTitle.pathname
        const query = cardTitle.search
        const titleURL = protocol + '//' + host + pathName + query
        const company = cardCompany.textContent

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

  static async getDiveJobs() {
    const jobs = await this.resolve()
    await browser.close()
    // console.log(jobs)
    return jobs
  }
}

export default DiveJobs

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
