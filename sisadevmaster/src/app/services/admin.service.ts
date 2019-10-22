import { Injectable } from '@angular/core'; /* 👶🏼 */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor( private http: HttpClient) {}

  // Use GET to load data from API
  getSearchTeacher() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users?userTypeId=2');
  }
}
