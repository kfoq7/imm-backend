import { Router } from 'express'
import { getDoctors } from '../controllers/doctor.controller'

const router = Router()

router.get('/', getDoctors)

export { router }
