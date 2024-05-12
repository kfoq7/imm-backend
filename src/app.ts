import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'
import { initDatabase } from './database'

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api', router)

async function main() {
  await initDatabase()

  app.listen(PORT, () => {
    console.log(`Server developing at http://localhost:${PORT}/api/`)
  })
}

main()
