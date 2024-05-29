import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class IndicationColposcopy {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  value: string
}
