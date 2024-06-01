import type { Request, Response, NextFunction } from 'express'
import {
  createExamsForAppointmet,
  getAllAppointments,
  getExamFromAppointmentById,
  updateExamsForAppointmet
} from '../services/appointment.service'

export const getApopintments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appointments = await getAllAppointments(req.query)

    res.status(200).json({ data: appointments })
  } catch (error) {
    next(error)
  }
}

export const getExamApppointment = async (req: Request, res: Response, next: NextFunction) => {
  const { appointmentId } = req.params

  try {
    const appointments = await getExamFromAppointmentById(Number(appointmentId))

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

export const updateExamToAppointment = async (req: Request, res: Response, next: NextFunction) => {
  const { appointmentId } = req.params

  try {
    const appointment = await updateExamsForAppointmet(Number(appointmentId), req.body)

    res.status(200).json({ data: appointment })
  } catch (error) {
    next(error)
  }
}
