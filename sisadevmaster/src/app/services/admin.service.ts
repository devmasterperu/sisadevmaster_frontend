import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo */
import { ProgrammingCurseModel } from '../models/programming-curse.model';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
    apiURLUpcomingCourses = 'https://devmasterwebapi.azurewebsites.net/api/UpcomingCourses';
    constructor( private http: HttpClient) {}

    // Busqueda de Docentes
    getSearchTeacher() {
        return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Users?userTypeId=2');
    }

    // Registrando Programación de Curso
    postProgrammingCurse(programmingCurseModel: ProgrammingCurseModel) {
        console.log(programmingCurseModel);
        return this.http.post(`${this.apiURLUpcomingCourses}`, programmingCurseModel);
    }
}
