import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
    apiURLCourses = 'https://devmasterwebapi.azurewebsites.net/api/Courses';
    // apiURLCoursesTeacher = '';

    /*
    *  ✅ Constructor
    */
    constructor( private http: HttpClient ) {}

    // Use GET to load data from API
    getListCourses() {
        return this.http.get(`${this.apiURLCourses}`);
    }

    // Cursos asignados por docente
    getListCoursesTeacher(id) {
        return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users/' + id + '/UpcomingCourses');
    }

    // Calificacion
    getQualificationSettings(upcomingCourses) {
        return this.http.get('https://devmasterwebapi.azurewebsites.net/api/UpcomingCourses/' + upcomingCourses + '/QualificationSettings');
    }
}
