const express = require('express')

// Create express instance
const app = express()

// Require API routes
const jobs = require('./routes/jobs')
// const test = require('./routes/test')

// Import API Routes
app.use(jobs)
// app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
