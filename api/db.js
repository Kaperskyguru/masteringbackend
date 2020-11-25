const sqlite3 = require('sqlite3')
let db
class DB {
  constructor() {
    this.init()
  }

  init() {
    db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message)
      }
      console.log('Connected to the database.')
    })
  }

  findByURL(url) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM jobs WHERE url = ?`
      db.get(sql, [url], (err, row) => {
        if (err) {
          return reject(new Error(err))
        }
        return resolve(row)
      })
    })
  }

  async getJobs(jobs) {
    return new Promise(async (resolve, reject) => {
      let newA = []
      for (let index = 0; index < jobs.length; index++) {
        const element = jobs[index]
        const savedJob = await this.findByURL(element[4])
        if (!savedJob) {
          newA.push(element)
        }
      }
      resolve(newA)
    })
  }

  async store(jobs) {
    // insert one row into the langs table
    const flattenJob = jobs.map(() => '(?,?,?,?,?,?,?)').join(', ')
    const query = `INSERT INTO jobs(title, date, description, website, url, company, created_at) VALUES ${flattenJob}`

    let flatJobs = []
    let newA = []

    jobs.forEach((arr) => {
      arr.forEach((item) => {
        flatJobs.push(item)
      })
    })

    db.run(query, flatJobs, function (err) {
      if (err) {
        return console.log(err.message)
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`)
    })
    db.close()
  }

  async index(limit) {
    return new Promise((resolve, reject) => {
      // page+=10
      let sql = `SELECT * FROM jobs ORDER BY date limit ${limit}`
      // console.log(sql)
      db.all(sql, (err, rows) => {
        if (err) {
          return reject(new Error(err))
        }
        // process rows here
        return resolve(rows)
      })
    })
  }
}
export default DB
