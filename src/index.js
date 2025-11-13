import express from 'express'
const app = express()
const port = 3000

require('dotenv').config();


app.get('/', (req, res) => {
  res.send('This is the home page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`App Link is  http://localhost:${port}`)
})
