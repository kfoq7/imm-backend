import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Appointment } from './appointment.entity'

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  lastName: string

  @OneToMany(() => Appointment, appointment => appointment.doctor)
  appointments: Appointment[]
}
