import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  lastName: string

  @Column({ nullable: false, type: 'date' })
  birthDate: 'string'

  @Column({ nullable: false })
  documentType: string

  @Column({ nullable: false, length: 20 })
  documentNumber: string
}
