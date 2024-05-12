import type { Request, Response, NextFunction } from 'express'
import { getAllDoctors } from '../services/doctor.service'

export const getDoctors = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const doctors = await getAllDoctors()

    res.status(200).json({ data: doctors })
  } catch (error) {
    next(error)
  }
}
