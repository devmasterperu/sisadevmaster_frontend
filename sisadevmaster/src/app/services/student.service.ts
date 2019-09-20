import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
// @Injectable({
//   providedIn: 'root'
// })

export class StudentService {
  constructor(private http: HttpClient, ) {
    console.log('Llegó! Desde StudentService');
  }

  getListStudent() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users');
  }
}
