import mongoose from 'mongoose'
import {DATABASE_NAME,DATABASE_PATH } from '../constants.js'

const dbConnect= async()=>{
    
  try {
  mongoose.set('strictQuery', false);

  const conn=  await mongoose.connect(`${DATABASE_PATH}/${DATABASE_NAME}`)
  console.log(`DATABASE CONNECTED || ${conn.connection.host}`)

  } catch (error) {
    console.log(`DATABASE CONNECTION FAILED ${error.message}`)
    process.exit(1)
  }
}


export default dbConnect