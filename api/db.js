import request from 'request'
class DB {
  static async store(jobs) {
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url:
            process.env.BASE_ENDPOINT_URL +
            '/posts/create_job/?nonce=93f6b9a3d4',
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
}
export default DB
