const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/profile', (req, res) => {
  res.send('<h1>Profile Page</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening onnjbfjf port ${port}`)
})