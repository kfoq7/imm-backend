import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class OtrosHallazgos {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
