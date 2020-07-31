const strtotime = require('locutus/php/datetime/strtotime')

export function jobResolver(jobs) {
  const resolvedJob = jobs.map((job) => {
    const resolvedJob = {}
    resolvedJob.title = job.titleText
    resolvedJob.website = job.titleURLHost
    resolvedJob.description = job.titleDesc
    resolvedJob.url = job.titleURL
    resolvedJob.company = job.titleCompany
    resolvedJob.date = strtotime(job.titleDate)
    return resolvedJob
  })
  return resolvedJob
}
