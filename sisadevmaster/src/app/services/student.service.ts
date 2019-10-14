import { map } from 'rxjs/operators';
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

  // Use GET to load data from API
  getListStudent() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users');
  }

  // send a POST request to the API to create a new data object
  postRegisterStudent() {
    return this.http.post('https://devmasterwebapi.azurewebsites.net/api/Users', {
      name: 'Jesús Alexander',
      lastName: 'Manrique',
      documentTypeId: 2,
      documentNumber: '71998055',
      email: 'gmanriqe@gmail.com',
      dateOfBirth: '2019-09-26T16:25:32.311Z',
      organizationType: '1',
      organizationName: 'U',
      locationId: 1,
      homeAdress: 'Jr. Juan Barreto 422',
      gender: 'Female',
      phoneNumber1: '232323232',
      phoneNumber2: '232323232',
      userTypeId : 1
    }).pipe(
      map(data => data));
  }
}
