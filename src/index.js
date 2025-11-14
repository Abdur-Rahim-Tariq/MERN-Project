import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express'
import connectDB from './db/index.js';


dotenv.config();
const app = express()
const port = 3000


connectDB()

app.get('/', (req, res) => {
  res.send('This is the home page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`App Link is  http://localhost:${port}`)
})
