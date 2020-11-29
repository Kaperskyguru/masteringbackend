import request from 'request'
class DB {
  static async store(jobs) {
    const res = await DB.get_nonce()
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

  static async get_nonce() {
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

  static async getJob() {
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

  static async updateJob(job) {
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: process.env.BASE_ENDPOINT_URL + '/update_job?id=' + job.id,
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
}
export default DB
