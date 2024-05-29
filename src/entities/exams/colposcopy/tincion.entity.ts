import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tincion {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
