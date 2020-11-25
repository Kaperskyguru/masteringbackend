const strtotime = require('locutus/php/datetime/strtotime')

export function jobResolver(jobs) {
  const resolvedJob = jobs.map((job) => {
    const resolvedJob = {}
    resolvedJob.id = job.id
    resolvedJob.title = job.title
    resolvedJob.website = job.website
    resolvedJob.description = job.description
    resolvedJob.url = job.url
    resolvedJob.company = job.company
    resolvedJob.date = strtotime(job.date)
    return resolvedJob
  })
  return resolvedJob
}

export function sortDesc(arr) {
  return arr.sort((first, second) => {
    const dateA = new Date(first.date)
    const dateB = new Date(second.date)
    return dateB - dateA
  })
}

export function sortAsc(arr) {
  return arr.sort((first, second) => {
    const dateA = new Date(first.date)
    const dateB = new Date(second.date)
    return dateA - dateB
  })
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
