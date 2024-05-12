import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  lastName: string
}
