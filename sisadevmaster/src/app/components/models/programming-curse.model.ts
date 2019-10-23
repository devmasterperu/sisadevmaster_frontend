export interface ProgrammingCurseModel {
  // Solamente declaras las variables que vas a Mapear (variables de envio de data)
  // input de type="date" seran guardados en variables de tipo string
  groupName: string;
  courseId: number;
  userId: number;
  modality: string;
  schedule: string;
  minVacant: number;
  maxVacant: number;
  numSessions: number;
  numHours: number;
  maxNumAbsence: number;
  minGrade: number;
  startDate: string;
  endDate: string;
}
