import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Assistant {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
