import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column({ nullable: false })
  username: string

  @Column({ nullable: false })
  password: string
}
