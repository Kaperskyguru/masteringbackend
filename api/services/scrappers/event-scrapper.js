const puppeteer = require('puppeteer')
const eventUrl = `https://www.meetup.com/find/?keywords=backend&dateRange=this-week`

let page
let browser
let cardArr = []
class MeetupEvent {
  static async init() {
    // console.log('Loading Page ...')

    browser = await puppeteer.launch({
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
      await page.goto(eventUrl, { waitUntil: 'networkidle2' }).catch(() => {}),
      await page.waitForSelector('.css-j7qwjs').catch(() => {}),
    ])
  }

  static async resolve() {
    await this.init()
    const eventURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll('.css-eno0dx')
      cardArr = Array.from(cards)
      const cardLinks = []
      cardArr.map((card) => {
        const eventLink = card.querySelector('.css-2ne5m0')
        const eventTitle = card.querySelector('.css-yom70g')
        const eventGroupName = card.querySelector('.css-64e74s')
        const eventImage = card.querySelector('img')
        const eventDate = card.querySelector('.css-1jmqq6')
        // const date = card.querySelector('.css-0').datetime
        const { host } = eventLink
        const { protocol } = eventLink
        const pathName = eventLink.pathname
        const query = eventLink.search
        const eventURL = protocol + '//' + host + pathName + query
        const eventGroup = eventGroupName.textContent.split('Group name:')[1]

        cardLinks.push({
          eventText: eventTitle.textContent,
          eventURLHost: host,
          eventURL: eventURL,
          eventGroup: eventGroup,
          eventImage: eventImage.src,
          //   eventDate: eventDate.textContent,
          date: eventDate.textContent,
        })
      })
      return cardLinks
    })

    return eventURLs
  }

  static async scrape() {
    await this.resolve()
    await browser.close()
    // new DB().store(this.jobResolver(jobs))
    return {
      message: 'Scraped successfully',
      status: 200,
    }
  }

  static async getEvents() {
    const events = await this.resolve()
    await browser.close()
    return events
  }
}

export default MeetupEvent
