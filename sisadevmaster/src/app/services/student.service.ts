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
    this.http
            .get('https://devmasterwebapi.azurewebsites.net/api/Users')
            .subscribe(resp => {
              console.log(resp);
            });
  }
}
