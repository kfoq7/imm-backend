import { poolPromise } from '../config/dbSqlConnection'
import { appointmentModel } from '../models'
import { calculateAge } from '../utils'
import type { Appointment, AppointmentSql, PatientSql, ProcessSql } from '../types'

export const createAppoiment = async (data: Appointment) => {
  const appointment = appointmentModel.create(data)
  return appointment
}

export const getAppointmentData = async (appointmentSource: Appointment) => {
  const { _id, appointmentSqlId, patientId, processId, exams, ...restData } = appointmentSource

  const appointmentQuery = `
    SELECT idcita, idtipocita, idhora, idpaciente, observacion, fecha, fecharegistro
    FROM cita
    WHERE idcita = ?
  `
  const processQuery = `
    SELECT descripcion
    FROM procedimiento
    WHERE idprocedimiento = ?
  `
  const patientQuery = `
    SELECT idpaciente, hc, nombres, apellidos, fechanacimiento, iddistrito, dni, observacion, telefono, telefono2, email, direccion
    FROM paciente
    WHERE idpaciente = ?
  `

  const [[[appointment]], [[patient]], [[processName]]] = await Promise.all([
    poolPromise.query<AppointmentSql[]>(appointmentQuery, [appointmentSqlId]),
    poolPromise.query<PatientSql[]>(patientQuery, [patientId]),
    poolPromise.query<ProcessSql[]>(processQuery, [processId])
  ])

  // const examsPopulated = await

  return {
    _id,
    appointment: appointment[0],
    patient: {
      ...patient,
      edad: calculateAge(patient.fechanacimiento)
    },
    process: {
      id: processId,
      name: processName
    },
    ...restData,
    exams
  }
}

export const getAppointmentListData = async (appointments: Appointment[]) => {
  return await Promise.all(appointments.map(getAppointmentData))
}

export const getAppointmentList = async () => {
  return await appointmentModel.find({}).populate('exams').lean()
}

export const getAppointmentById = async (appointmentId: string) => {
  const appointment = await appointmentModel.findById(appointmentId).lean()

  if (!appointment) {
    throw new Error('Appointment not found')
  }

  return getAppointmentData(appointment)
}
