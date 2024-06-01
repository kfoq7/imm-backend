import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import {
  INDICACIONES_COLPOSCIPIA,
  DIAGNOSTICO_CERVIX,
  DIAGNOSTICO_VAGINA,
  DIAGNOSTICO_VULVA,
  PERIODO,
  TINCION,
  UNION_ESCAMOCOLUMNAR,
  VAGINA,
  VULVA,
  ZONA_TRANSFORMACION,
  OTROS_HALLAZGOS
} from '../../../lib/data'

@Entity()
export class Colposcopy {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    type: 'set',
    enum: INDICACIONES_COLPOSCIPIA,
    nullable: true
  })
  indications: string[]

  @Column({
    type: 'enum',
    enum: VULVA,
    nullable: true
  })
  vulva: string

  @Column({
    type: 'enum',
    enum: VAGINA,
    nullable: true
  })
  vagina: string

  @Column({
    type: 'enum',
    enum: PERIODO,
    nullable: true
  })
  perineo: string

  @Column({
    type: 'enum',
    enum: TINCION,
    nullable: true
  })
  tincion: string

  @Column({
    type: 'enum',
    enum: UNION_ESCAMOCOLUMNAR,
    nullable: true
  })
  unionEscamocolumnar: string

  @Column({
    type: 'enum',
    enum: ZONA_TRANSFORMACION,
    nullable: true
  })
  zonaTranformacion: string

  @Column({
    type: 'set',
    enum: OTROS_HALLAZGOS,
    nullable: true
  })
  otrosHallazgos: string[]

  @Column({
    type: 'set',
    enum: INDICACIONES_COLPOSCIPIA,
    nullable: true
  })
  examAdecuado: boolean

  @Column({
    type: 'set',
    enum: DIAGNOSTICO_VULVA,
    nullable: true
  })
  diagnosticoVulva: string[]

  @Column({
    type: 'set',
    enum: DIAGNOSTICO_CERVIX,
    nullable: true
  })
  diagnosticoCervix: string[]

  @Column({
    type: 'set',
    enum: DIAGNOSTICO_VAGINA,
    nullable: true
  })
  diagnosticoVagina: string[]
}
