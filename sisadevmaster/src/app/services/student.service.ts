import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo */
import { UsersModel } from '../components/models/users.model';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })

export class StudentService {
  apiURL: string = 'https://devmasterwebapi.azurewebsites.net/api/Users';
  constructor(private http: HttpClient, ) {
    console.log('Llegó! Desde StudentService');
  }

  // Use GET to load data from API
  getListStudent() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users');
  }

  // send a POST request to the API to create a new data object
  postRegisterStudent(usersModel: UsersModel) {
    console.log(usersModel);
    return this.http.post(`${this.apiURL}`, usersModel);
  }
}
