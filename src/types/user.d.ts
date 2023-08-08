import type { Request } from 'express'
import type { RowDataPacket } from 'mysql2'

export interface Auth {
  username: string
  password: string
}

export type AuthRequest = Request<unknown, unknown, Auth>

/**
 * @Sql Interfaces
 */
export interface UserSql extends RowDataPacket {
  idusuario: number
  user: string
  estado: number
}

export interface PatientSql extends RowDataPacket {
  idpacieente: number
  hc: string
  name: string
  apellidoss: string
  fechanacimiento: string
  iddistrito: number
  dni: string
  observacion: string
  telefono: string
  telefono2: string
  email: string
  direccion: string
}
