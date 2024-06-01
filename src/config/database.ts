import path from 'node:path'
import { DataSource } from 'typeorm'

const pathEntites = path.join(__dirname, '..', 'entities', '**/*.entity.{ts,js}')

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  // logging: ['query'],
  entities: [pathEntites]
})

export const initDatabase = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
      console.log('Data source has been initialized')
    }
  } catch (error) {
    console.error('Error during Data Source initialization:', error)
  }
}
