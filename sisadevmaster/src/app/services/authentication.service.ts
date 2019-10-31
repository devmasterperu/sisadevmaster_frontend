import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class authenticationService {
  // https://devmasterwebapi.azurewebsites.net/api/Login?username=jquinteros76&password=ON1A0LAH
  // apiURLUpcomingCourses = '';
  constructor( private http: HttpClient) {}

  // Use GET to load data from API
  login(user, pass) {
    return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/Login?username=' + user + '&password=' + pass);
  }
}
