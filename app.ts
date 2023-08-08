import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './src/routes'

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server developing on root http://localhost:${PORT}/api`)
})
