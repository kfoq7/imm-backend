import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Exam } from './exam.entity'
import { Colposcopy } from './colposcopy.entity'

@Entity()
export class Procedure {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Exam)
  @JoinColumn()
  exam: Exam

  @OneToOne(() => Colposcopy)
  @JoinColumn()
  colposcopy: Colposcopy
}
