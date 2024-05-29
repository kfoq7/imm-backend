import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { IndicationColposcopy } from './indication-colposcopy.entity'
import { Vulva } from './vulva.entity'
import { Vagina } from './vagina.entity'
import { Perineo } from './perineo.entity'
import { Tincion } from './tincion.entity'
import { UnionEscamocolumnar } from './union-escamocolumnar.entity'
import { ZonaTransformacion } from './zona-transformacion.entity'
import { OtrosHallazgos } from './otros-hallazgos.entity'
import { DiagnosticoVulva } from './diagnostico-vulva.entity'
import { DiagnosticoCervix } from './diagnostico-cervix.entity'
import { DiagnosticoVagina } from './diagnostico-vagina.entity'

@Entity()
export class Colposcopy {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToMany(() => IndicationColposcopy)
  @JoinTable()
  indications: IndicationColposcopy[]

  @OneToOne(() => Vulva)
  @JoinColumn()
  vulva: Vulva

  @OneToOne(() => Vagina)
  @JoinColumn()
  vagina: Vagina

  @OneToOne(() => Perineo)
  @JoinColumn()
  perineo: Perineo

  @OneToOne(() => Tincion)
  @JoinColumn()
  tincion: Tincion

  @OneToOne(() => UnionEscamocolumnar)
  @JoinColumn()
  unionEscamocolumnar: UnionEscamocolumnar

  @OneToOne(() => ZonaTransformacion)
  @JoinColumn()
  zonaTranformacion: ZonaTransformacion

  @ManyToMany(() => OtrosHallazgos)
  @JoinTable()
  otrosHallazgos: OtrosHallazgos

  @Column()
  examAdecuado: boolean

  @ManyToMany(() => DiagnosticoVulva)
  @JoinTable()
  diagnosticoVulva: DiagnosticoVulva

  @ManyToMany(() => DiagnosticoCervix)
  @JoinTable()
  diagnosticoCervix: DiagnosticoCervix

  @ManyToMany(() => DiagnosticoVagina)
  @JoinTable()
  diagnosticoVagina: DiagnosticoVagina
}
