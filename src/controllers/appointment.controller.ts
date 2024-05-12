import type { Request, Response, NextFunction } from 'express'
import { getAllAppointments } from '../services/appointment.service'

export const getApopintments = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const appointments = await getAllAppointments()

    res.status(200).json({ data: appointments })
  } catch (error) {
    next(error)
  }
}
