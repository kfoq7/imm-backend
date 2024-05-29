import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ZonaTransformacion {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
