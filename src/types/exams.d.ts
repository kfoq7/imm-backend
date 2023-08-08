import { RowDataPacket } from 'mysql2'
import { HistoryStage } from './enums'

export interface History {
  patintentStage: HistoryStage
  otherHistory?: string
}

export interface Exam {}

/**
 * @Sql Interfaces
 */
export interface ProcessSql extends RowDataPacket {
  description: string
}
