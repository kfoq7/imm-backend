import { readdirSync } from 'node:fs'
import { Router } from 'express'
import pc from 'picocolors'

const ROUTER_PATH = `${__dirname}`

const router = Router()

const cleanFileName = (filename: string) => {
  return filename.split('.').shift()
}

readdirSync(ROUTER_PATH).forEach(filename => {
  const cleanName = cleanFileName(filename)
  if (cleanName !== 'index') {
    import(`./${cleanName}.router`).then(routerModule => {
      router.use(`/${cleanName}`, routerModule.router)
      console.log(`[${pc.cyan('INFO')}]: Loaded routes /${cleanName}`)
    })
  }
})

export { router }
