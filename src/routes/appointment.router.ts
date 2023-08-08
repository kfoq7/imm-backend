import { Router } from 'express'
import { appointmentList, findAppointmentById } from '../controllers/appointment.controller'

const router = Router()

router.get('/', appointmentList)

router.get('/:appointmentId', findAppointmentById)

export { router }
