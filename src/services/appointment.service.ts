import { Appointment } from '../entities/appointment.entity'
import { AppDataSource } from '../config/database'
import { Exam } from '../entities/exams/exam.entity'
import { FindOptionsWhere } from 'typeorm'

const appointmentRepository = AppDataSource.getRepository(Appointment)
const examRepository = AppDataSource.getRepository(Exam)

export const getAllAppointments = async (
  filters: FindOptionsWhere<Pick<Appointment, 'appointmentDate' | 'status'>>
) => {
  return appointmentRepository.find({
    relations: { patient: true, doctor: true, exams: true },
    where: { ...filters }
  })
}

export const getExamFromAppointmentById = async (appointmentId: number) => {
  return appointmentRepository.findOne({
    where: { id: appointmentId },
    relations: {
      exams: {
        colposcopy: true
      }
    }
  })
}

export const createExamsForAppointmet = async (
  appointmentId: number,
  data: { examsData: Exam[] }
) => {
  const appointmentToUpdate = await appointmentRepository.findOneBy({ id: appointmentId })
  if (!appointmentToUpdate) throw new Error('Appointmet not found')

  console.log(data)
  const { examsData } = data

  const exams = await Promise.all(examsData.map(exam => examRepository.save(exam)))

  appointmentRepository.merge(appointmentToUpdate, { exams })

  return appointmentRepository.save(appointmentToUpdate)
}

export const updateExamsForAppointmet = async (
  appointmentId: number,
  data: { examsData: Exam[] }
) => {
  const appointmentToUpdate = await appointmentRepository.findOneBy({ id: appointmentId })
  if (!appointmentToUpdate) throw new Error('Appointmet not found')

  const { examsData } = data

  const examsUpdated = await Promise.all(
    examsData.map(async exam => {
      const { id } = exam

      const examToUpdate = await examRepository.findOne({
        where: { id },
        relations: { colposcopy: true }
      })

      examRepository.merge(examToUpdate, exam)

      return examRepository.save(examToUpdate)
    })
  )

  return {
    ...appointmentToUpdate,
    exams: examsUpdated
  }
}
