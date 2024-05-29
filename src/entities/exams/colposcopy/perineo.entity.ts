import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Perineo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
