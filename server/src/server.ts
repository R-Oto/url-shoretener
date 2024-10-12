import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/dbConfig'
import router from './routes/shortUrl'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use("/api/url", router)

app.listen(PORT, () => console.log("Server started"))