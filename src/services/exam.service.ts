import { AppDataSource } from '../config/database'
import { Exam } from '../entities/exams/exam.entity'

const examRepository = AppDataSource.getRepository(Exam)

export const createExam = (data: Exam) => {
  const exam = examRepository.create(data)
}
