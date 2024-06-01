import { Router } from 'express'
import {
  createExamToAppointment,
  getApopintments,
  getExamApppointment,
  updateExamToAppointment
} from '../controllers/appointment.controller'

const router = Router()

router.get('/', getApopintments)

router.get('/:appointmentId/exams', getExamApppointment)

router.post('/:appointmentId', createExamToAppointment)

router.put('/:appointmentId', updateExamToAppointment)

export { router }
