import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Doctor } from './doctor.entity'
import { Patient } from './patient.entity'
import { Status } from '../types/enums'

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false, type: 'date' })
  appointmentDate: string

  @Column({
    type: 'set',
    enum: Status,
    default: Status.PENDING
  })
  status: Status

  @ManyToOne(() => Doctor, doctor => doctor.appointments, { nullable: false })
  @JoinColumn()
  doctor: Doctor

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn()
  patient: Patient

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
