import { Response, NextFunction } from 'express'
import {
  createAppoiment,
  getAppointmentById,
  getAppointmentList
} from '../services/appointment.service'
import type { AppointmentReq } from '../types'

export const appointmentList = async (_req: AppointmentReq, res: Response, next: NextFunction) => {
  try {
    const appointments = await getAppointmentList()

    res.status(200).json({
      ok: true,
      msg: 'Appointment list',
      appointments
    })
  } catch (error) {
    next(error)
  }
}

export const findAppointmentById = async (
  req: AppointmentReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointment = await getAppointmentById(req.params.appointmentId)

    res.status(200).json({
      ok: true,
      msg: 'Appointment found',
      appointment
    })
  } catch (error) {
    next(error)
  }
}

export const regiserAppointment = async (
  req: AppointmentReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointment = await createAppoiment(req.body)

    res.status(201).json({
      ok: true,
      msg: 'Appointment created successfully',
      appointment
    })
  } catch (error) {
    next(error)
  }
}
