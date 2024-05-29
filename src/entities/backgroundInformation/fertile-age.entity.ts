import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class FertileAge {
  @PrimaryGeneratedColumn('increment')
  id: number
}
