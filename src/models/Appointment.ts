import { Schema, model } from 'mongoose'
import { AppointmentStatus } from '../types/enums'
import type { Appointment } from '../types'

const AppointmentSchema = new Schema<Appointment>(
  {
    patientId: Number,
    doctorId: Number,
    appointmentSqlId: Number,
    processId: String,
    clinicalHistory: String,
    date: Date,
    hour: {
      hourId: String,
      hour: String
    },
    status: {
      type: String,
      enum: Object.values(AppointmentStatus),
      default: AppointmentStatus.PENDING
    },
    history: {
      type: Schema.Types.ObjectId,
      ref: 'History'
    },
    exams: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Exam'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const AppointmentModel = model<Appointment>('appointment', AppointmentSchema)

export default AppointmentModel
