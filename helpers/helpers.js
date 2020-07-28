export function jobResolver(jobs) {
  const resolvedJob = jobs.map((job) => {
    const resolvedJob = {}
    resolvedJob.title = job.titleText
    resolvedJob.website = job.titleURLHost
    resolvedJob.description = job.titleDesc
    resolvedJob.url = job.titleURL
    return resolvedJob
  })
  return resolvedJob
}
