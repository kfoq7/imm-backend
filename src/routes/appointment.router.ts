import { Router } from 'express'
import { getApopintments } from '../controllers/appointment.controller'

const router = Router()

router.get('/', getApopintments)

export { router }
