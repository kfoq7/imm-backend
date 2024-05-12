import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Doctor } from './doctor.entity'
import { Patient } from './patient.entity'
import { Exam } from './exams/exam.entity'
import { BackgroundInformation } from './backgroundInformation.entity'
import { ProcedureType, Status } from '../types/enums'

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('date', { nullable: false })
  appointmentDate: string

  @Column('time', { nullable: false })
  appointmentHour: string

  @Column({
    type: 'set',
    enum: Status,
    default: Status.PENDING
  })
  status: Status

  @Column({
    type: 'set',
    enum: ProcedureType,
    nullable: false
  })
  procedureType: ProcedureType

  @Column('text')
  comment: string

  @ManyToOne(() => Doctor, doctor => doctor.appointments, { nullable: false })
  @JoinColumn()
  doctor: Doctor

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn()
  patient: Patient

  @ManyToMany(() => Exam)
  @JoinTable()
  exams: Exam[]

  @Column('varchar', { length: 10 })
  historyMedical: string

  @OneToOne(() => BackgroundInformation)
  backgroundInformation: BackgroundInformation

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
