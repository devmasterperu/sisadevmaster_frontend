import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

import { UserLoginModel } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})

export class authenticationService {
  // https://devmasterwebapi.azurewebsites.net/api/Login?username=jquinteros76&password=ON1A0LAH
  // apiURLUpcomingCourses = '';
  constructor( private http: HttpClient) {}

  login(userLoginModel:UserLoginModel) {
    return this.http.post('https://devmasterdeswebapi.azurewebsites.net/api/Login',userLoginModel);
  }
}
