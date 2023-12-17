const express = require('express')
const app = express()
const port = 8080

app.get('/healthz', (req, res) => {
  res.send('Okay!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})