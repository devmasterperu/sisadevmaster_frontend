import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo Qualificacion */
import { QualificationModel } from '../components/models/teacher/config-qualification.model';
/* Importando Modelo UsersModel */
import { UsersModel } from '../components/models/users.model';

@Injectable()

export class TeacherService {
  apiURL: string = 'https://devmasterwebapi.azurewebsites.net/api/UpcomingCourses/10';
  apiURLUsers: string = 'https://devmasterwebapi.azurewebsites.net/api/Users';
  constructor(private http: HttpClient) {}

  public createCustomer(qualificationModel: QualificationModel) {
    return this.http.post(`${this.apiURL}/QualificationSettings/`, qualificationModel);
  }

  // send a POST request to the API to create a new data object
  postRegisterTeacher( usersModel: UsersModel) {
    return this.http.post(`${this.apiURLUsers}`, usersModel);
  }
}
