import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Assistant } from '../assistant.entity'
import { ExamStatus, ExamType } from '../../types/enums'
import { Procedure } from './procedure.entity'

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    type: 'set',
    enum: ExamType,
    nullable: false
  })
  examType: ExamType

  @Column({
    type: 'set',
    enum: ExamStatus,
    default: ExamStatus.PENDING
  })
  status: ExamStatus

  @ManyToOne(() => Assistant)
  @JoinColumn()
  assistant: Assistant

  @OneToMany(() => Procedure, procedure => procedure.exam)
  procedures: Procedure[]

  @Column({ type: 'text' })
  comment: string
}
