import { Appointment } from '../entities/appointment.entity'
import { AppDataSource } from '../config/database'

const appointmentRepository = AppDataSource.getRepository(Appointment)

export const getAllAppointments = async () => {
  return appointmentRepository.find()
}
