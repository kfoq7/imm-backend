import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class DiagnosticoCervix {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  value: string
}
