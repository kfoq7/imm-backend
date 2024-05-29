import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PatientStage } from '../../types/enums'
import { FertileAge } from './fertile-age.entity'

@Entity()
export class BackgroundInformation {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    type: 'set',
    enum: PatientStage,
    nullable: false
  })
  patientStage: PatientStage

  @OneToOne(() => FertileAge)
  @JoinColumn()
  fertileAge: FertileAge

  @Column({ type: 'text' })
  otherBackgroundInformation: string
}
