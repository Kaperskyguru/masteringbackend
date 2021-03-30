import request from 'request'
require('dotenv').config()
class DB {
  static async store(jobs) {
    const res = await DB.getNonce()
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url:
            process.env.BASE_ENDPOINT_URL +
            '/posts/create_job/?nonce=' +
            res.nonce,
          form: jobs,
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(body)
        }
      )
    })
  }

  static getNonce() {
    return new Promise(function (resolve, reject) {
      request.get(
        {
          url:
            process.env.BASE_ENDPOINT_URL +
            '/get_nonce?controller=posts&method=create_job',
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          if (err) {
            // console.log(err)
            reject(err)
          }
          resolve(body)
        }
      )
    })
  }

  static getJob() {
    return new Promise(function (resolve, reject) {
      request.get(
        {
          url: process.env.BASE_ENDPOINT_URL + '/get_new_job',
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          if (err) {
            // console.log(err)
            reject(err)
          }
          resolve(body)
        }
      )
    })
  }

  static getRandomPost() {
    return new Promise(function (resolve, reject) {
      request.get(
        {
          url: process.env.BASE_ENDPOINT_URL + '/get_random_post',
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          if (err) {
            // console.log(err)
            reject(err)
          }
          resolve(body)
        }
      )
    })
  }

  static updateJob(job) {
    // console.log(process.env.BASE_ENDPOINT_URL, 'ajahskjahs')
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: process.env.BASE_ENDPOINT_URL + '/update_job?id=' + job.id,
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          console.log(err, body)
          if (err) {
            // console.log(err, 'error')
            reject(err)
          }
          // console.log(body, 'body')
          resolve(body)
        }
      )
    })
  }
}
export default DB
