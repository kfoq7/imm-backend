import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Vagina {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
