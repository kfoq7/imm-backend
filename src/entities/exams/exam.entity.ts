import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Assistant } from '../assistant.entity'
import { ExamStatus, ExamType } from '../../types/enums'
import { Colposcopy } from './colposcopy/colposcopy.entity'
import { Appointment } from '../appointment.entity'

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    type: 'enum',
    enum: ExamType,
    nullable: false
  })
  examType: ExamType

  @Column({
    type: 'enum',
    enum: ExamStatus,
    default: ExamStatus.PENDING
  })
  status: ExamStatus

  @ManyToOne(() => Assistant)
  @JoinColumn()
  assistant: Assistant

  @ManyToOne(() => Appointment)
  @JoinColumn()
  appointment: Appointment

  @Column({ type: 'text' })
  comment: string

  @OneToOne(() => Colposcopy, { nullable: true, cascade: true })
  @JoinColumn()
  colposcopy: Colposcopy
}
