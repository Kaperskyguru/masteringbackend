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

  store(job) {
    // insert one row into the langs table
    const flattenJob = job.map(() => '(?,?,?,?,?,?)').join(', ')
    const query = `INSERT INTO jobs(title, date, description, website, url, company) VALUES ${flattenJob}`

    let flatJobs = []
    job.forEach((arr) => {
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

  index() {
    // insert one row into the langs table
    db.run(`INSERT INTO jobs(name) VALUES(?)`, ['C'], function (err) {
      if (err) {
        return console.log(err.message)
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`)
    })
    db.close()
  }
}
export default DB
