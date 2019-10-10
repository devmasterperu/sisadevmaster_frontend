import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Importando Modelo Qualificacion */
import { QualificationModel } from '../components/models/teacher/config-qualification.model';

@Injectable()

export class TeacherService {
  // https://www.techiediaries.com/angular-httpclient/
  apiURL: string = 'https://devmasterwebapi.azurewebsites.net/api/UpcomingCourses/10';
  constructor(private http: HttpClient) {}

  public createCustomer(qualificationModel: QualificationModel) {
    return this.http.post(`${this.apiURL}/QualificationSettings/`, qualificationModel);
  }
}
