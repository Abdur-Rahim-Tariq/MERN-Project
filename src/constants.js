import dotenv from 'dotenv'
dotenv.config()

export const DATABASE_PATH = process.env.DATABASE_URI
export const DATABASE_NAME = process.env.DATABASE_NAME