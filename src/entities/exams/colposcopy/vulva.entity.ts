import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Vulva {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  value: string
}
