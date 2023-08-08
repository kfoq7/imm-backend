import { Response, NextFunction } from 'express'
import { login } from '../services/auth.service'
import type { AuthRequest } from '../types'

export const loginUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { user, token } = await login(req.body)

    res.status(200).json({
      ok: true,
      msg: 'User has logged',
      token,
      user
    })
  } catch (error) {
    next(error)
  }
}
