import type { Request, Response, NextFunction } from 'express'
import { createExamsForAppointmet, getAllAppointments } from '../services/appointment.service'

export const getApopintments = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const appointments = await getAllAppointments()

    res.status(200).json({ data: appointments })
  } catch (error) {
    next(error)
  }
}

export const createExamToAppointment = async (req: Request, res: Response, next: NextFunction) => {
  const { appointmentId } = req.params

  try {
    const exams = await createExamsForAppointmet(Number(appointmentId), req.body)

    res.status(201).json({ data: exams })
  } catch (error) {
    next(error)
  }
}
