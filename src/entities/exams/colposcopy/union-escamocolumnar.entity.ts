import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UnionEscamocolumnar {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string
}
