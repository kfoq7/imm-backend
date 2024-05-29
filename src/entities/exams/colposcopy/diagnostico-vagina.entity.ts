import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class DiagnosticoVagina {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  value: string
}
