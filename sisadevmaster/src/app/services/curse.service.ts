import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurseService {
  apiURLCourses = 'https://devmasterwebapi.azurewebsites.net/api/Courses';
  constructor( private http: HttpClient ) {}

  // Use GET to load data from API
  getListCourses() {
    return this.http.get(`${this.apiURLCourses}`);
  }
}
