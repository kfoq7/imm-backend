import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Colposcopy {
  @PrimaryGeneratedColumn('increment')
  id: number
}
