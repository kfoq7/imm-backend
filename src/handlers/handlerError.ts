import { Request, Response, NextFunction } from 'express'
import { Error as MongooseError } from 'mongoose'
import pc from 'picocolors'

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(`[${pc.red('ERROR')}]: ${error.message}`)

  if (error instanceof MongooseError) {
    res.status(500).send({
      ok: false,
      error: error.message
    })
  }

  res.status(404).json({
    ok: false,
    error: error.message
  })
}
