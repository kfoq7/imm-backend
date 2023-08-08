import { Types } from 'mongoose'
import { RowDataPacket } from 'mysql2'
import { AppointmentStatus } from './enums'
import { History, Exam } from './exams'
import { Request } from 'express'

export type Hour = {
  hourId: number
  hour: string
}

export interface Appointment {
  _id: Types.ObjectId
  patientId: number
  doctorId: number
  appointmentSqlId: number
  processId: string
  date: Date
  hour: Hour
  status: AppointmentStatus
  clinicalHistory: string
  history: History
  exams: Exam[]
}

export interface AppointmentParams {
  appointmentId: string
}

export interface AppointmentQuery extends Pick<Appointment, 'doctorId' | 'status'> {}

export type AppointmentReq = Request<AppointmentParams, unknown, Appointment, AppointmentQuery>

/**
 * @Sql Interfaces
 */
export interface AppointmentSql extends RowDataPacket {
  idcita: number
  idtipocita: number
  idpaciente: number
  observacion: string
  fecha: string
  fecharegistro: string
}
