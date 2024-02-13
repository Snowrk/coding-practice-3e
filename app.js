const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let date1 = new Date()
  response.send(
    `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`,
  )
})

module.exports = app

app.listen(3000)
