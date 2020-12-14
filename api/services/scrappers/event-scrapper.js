const puppeteer = require('puppeteer')
const eventUrl = `https://www.meetup.com/find/?keywords=backend`
//&dateRange=this-week
let page
let browser
let cardArr = []
class MeetupEvent {
  static async init() {
    // console.log('Loading Page ...')

    browser = await puppeteer.launch({
      headless: false,
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
      const cards = document.querySelectorAll('.css-1gl3lql')
      cardArr = Array.from(cards)
      const cardLinks = []
      cardArr.forEach((card) => {
        const eventLink = card.querySelector('.css-2ne5m0')
        const eventTitle = card.querySelector('.css-1jy1jkx')
        const eventGroupName = card.querySelector('.css-ycqk9')
        const eventImage = card.querySelector('img')
        const eventDate = card.querySelector('.css-ai9mht')
        const { host } = eventLink
        const { protocol } = eventLink
        const pathName = eventLink.pathname
        const query = eventLink.search
        const eventURL = protocol + '//' + host + pathName + query
        const eventGroup =
          eventGroupName !== null
            ? eventGroupName.textContent.split('Group name:')[1]
            : eventGroupName

        cardLinks.push({
          eventText: eventTitle !== null ? eventTitle.textContent : eventTitle,
          eventURLHost: host,
          eventURL: eventURL,
          eventGroup: eventGroup,
          eventImage: eventImage.src,
          date: eventDate !== null ? eventDate.textContent : eventDate,
        })
      })

      return cardLinks
    })

    return eventURLs
  }

  static async scrape() {
    await this.resolve()
    await browser.close()
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
