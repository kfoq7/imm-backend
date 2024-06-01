import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { PatientStage } from '../../types/enums'

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

  @Column({ type: 'text' })
  otherBackgroundInformation: string
}
