import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Assistant } from '../assistant.entity'
import { ExamStatus, ExamType } from '../../types/enums'
import { Colposcopy } from './colposcopy/colposcopy.entity'

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

  @Column({ type: 'text' })
  comment: string

  @OneToOne(() => Colposcopy, { nullable: true })
  @JoinColumn()
  colposcopy: Colposcopy
}
