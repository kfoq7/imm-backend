import { Appointment } from '../entities/appointment.entity'
import { AppDataSource } from '../config/database'
import { Exam } from '../entities/exams/exam.entity'

const appointmentRepository = AppDataSource.getRepository(Appointment)
// const examRepository = AppDataSource.getRepository(Exam)

export const getAllAppointments = async () => {
  return appointmentRepository.find()
}

export const createExamsForAppointmet = async (appointmentId: number, examsData: Exam[]) => {
  const appointmentToUpdate = await appointmentRepository.findOneBy({ id: appointmentId })
  if (!appointmentToUpdate) throw new Error('Appointmet not found')
  console.log(examsData)
  // const exams =
}
