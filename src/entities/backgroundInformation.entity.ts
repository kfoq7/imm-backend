import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class BackgroundInformation {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'text' })
  otherBackgroundInformation: string
}
