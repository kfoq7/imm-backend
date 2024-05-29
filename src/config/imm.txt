-- Consulta para obtener comentarios de tablas específicas
SELECT
  TABLE_SCHEMA,
  TABLE_NAME,
  TABLE_COMMENT
FROM
  INFORMATION_SCHEMA.TABLES
WHERE
  TABLE_SCHEMA = 'imm_db_dev'
  AND TABLE_NAME IN ('doctor', 'patient', 'user', 'assistant', 'indication_colposcopy', 'colposcopy', 'procedure', 'exam', 'fertile_age', 'background_information', 'appointment', 'colposcopy_indications_indication_colposcopy', 'appointment_exams_exam');

-- Creación de tabla doctor
CREATE TABLE doctor (
  id int NOT NULL IDENTITY(1,1),
  name varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de tabla patient
CREATE TABLE patient (
  id int NOT NULL IDENTITY(1,1),
  name varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  birthDate date NOT NULL,
  documentType varchar(255) NOT NULL,
  documentNumber varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de tabla user
CREATE TABLE [user] (
  id int NOT NULL IDENTITY(1,1),
  name varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  [password] varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de tabla assistant
CREATE TABLE assistant (
  id int NOT NULL IDENTITY(1,1),
  userId int NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_b67bf802f4a770fe60f3185fe1b FOREIGN KEY (userId) REFERENCES [user] (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creación de tabla indication_colposcopy
CREATE TABLE indication_colposcopy (
  id int NOT NULL IDENTITY(1,1),
  value varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de tabla colposcopy
CREATE TABLE colposcopy (
  id int NOT NULL IDENTITY(1,1),
  PRIMARY KEY (id)
);

-- Creación de tabla procedure
CREATE TABLE procedure_table (
  id int NOT NULL IDENTITY(1,1),
  examId int NULL,
  colposcopyId int NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_4ca6ea7baeaa8c51f74af51aebc FOREIGN KEY (examId) REFERENCES exam (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT FK_174f8ee7614a20c2ddc725fb2c2 FOREIGN KEY (colposcopyId) REFERENCES colposcopy (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creación de tabla exam
CREATE TABLE exam (
  id int NOT NULL IDENTITY(1,1),
  examType varchar(255) NOT NULL,
  status varchar(255) NOT NULL DEFAULT 'pending',
  comment text NOT NULL,
  assistantId int NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_c054e6671d6935f0fa136e659d6 FOREIGN KEY (assistantId) REFERENCES assistant (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creación de tabla fertile_age
CREATE TABLE fertile_age (
  id int NOT NULL IDENTITY(1,1),
  PRIMARY KEY (id)
);

-- Creación de tabla background_information
CREATE TABLE background_information (
  id int NOT NULL IDENTITY(1,1),
  patientStage varchar(255) NOT NULL,
  otherBackgroundInformation text NOT NULL,
  fertileAgeId int NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_2d9a612996ac35bcf059c2a9cd1 FOREIGN KEY (fertileAgeId) REFERENCES fertile_age (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creación de tabla appointment
CREATE TABLE appointment (
  id int NOT NULL IDENTITY(1,1),
  appointmentDate date NOT NULL,
  appointmentHour time NOT NULL,
  status varchar(255) NOT NULL DEFAULT 'pending',
  procedureType varchar(255) NOT NULL,
  comment text NOT NULL,
  historyMedical varchar(10) NOT NULL,
  createdAt datetime NOT NULL DEFAULT GETDATE(),
  updatedAt datetime NOT NULL DEFAULT GETDATE() ON UPDATE GETDATE(),
  doctorId int NOT NULL,
  patientId int NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_514bcc3fb1b8140f85bf1cde6e2 FOREIGN KEY (doctorId) REFERENCES doctor (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT FK_5ce4c3130796367c93cd817948e FOREIGN KEY (patientId) REFERENCES patient (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creación de tabla colposcopy_indications_indication_colposcopy
CREATE TABLE colposcopy_indications_indication_colposcopy (
  colposcopyId int NOT NULL,
  indicationColposcopyId int NOT NULL,
  PRIMARY KEY (colposcopyId, indicationColposcopyId),
  CONSTRAINT FK_bb01f314a6587e641e9762934c5 FOREIGN KEY (colposcopyId) REFERENCES colposcopy (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_3bc0b1f4e8306be7792dc036a46 FOREIGN KEY (indicationColposcopyId) REFERENCES indication_colposcopy (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creación de tabla appointment_exams_exam
CREATE TABLE appointment_exams_exam (
  appointmentId int NOT NULL,
  examId int NOT NULL,
  PRIMARY KEY (appointmentId, examId),
  CONSTRAINT FK_c44588200cb66b9bb87d73a1066 FOREIGN KEY (appointmentId) REFERENCES appointment (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_debe836b1c8e77020e9027dcceb FOREIGN KEY (examId) REFERENCES exam (id) ON DELETE CASCADE ON UPDATE CASCADE
);
