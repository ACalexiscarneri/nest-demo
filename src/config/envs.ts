import "dotenv/config"

const DB_NAME= process.env.DB_NAME
const DB_HOST= process.env.DB_HOST
const DB_PORT= process.env.DB_PORT
const DB_USERNAME= process.env.DB_USERNAME
const DB_PASSWORD= process.env.DB_PASSWORD
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
const JWT_SECRET = process.env.JWT_SECRET

export {DB_NAME,DB_HOST,DB_PORT,DB_USERNAME,DB_PASSWORD,CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,JWT_SECRET}