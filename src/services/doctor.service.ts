import { AppDataSource } from '../config/database'
import { Doctor } from '../entities/doctor.entity'

const doctorRespository = AppDataSource.getRepository(Doctor)

export const getAllDoctors = async () => {
  return doctorRespository.find()
}
