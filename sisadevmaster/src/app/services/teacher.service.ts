import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo Qualification */
import { QualificationModel } from '../models/config-qualification.model';
/* Importando Modelo Users */
import { UsersModel } from '../models/users.model';

@Injectable()

export class TeacherService {
    apiURL: string = 'https://devmasterwebapi.azurewebsites.net/api/UpcomingCourses/23';
    apiURLUsers: string = 'https://devmasterwebapi.azurewebsites.net/api/Users';
    apiURLUpdateUser: string = 'https://devmasterdeswebapi.azurewebsites.net/api/Users/76';

    constructor(private http: HttpClient) {}

    // Registrar Configuración Calificación
    getConfigQualification( qualificationModel: QualificationModel ) {
        return this.http.post(`${this.apiURL}/QualificationSettings/`, qualificationModel);
    }

    // Registrar a un Usuario(Docente)
    postRegisterTeacher( usersModel: UsersModel ) {
        return this.http.post(`${this.apiURLUsers}`, usersModel);
    }

    // Actualizar información de un Usuario(Docente)
    patchUpdateTeacher( usersModel: UsersModel) {
        // return this.http.post(`${this.apiURLUpdateUser}`, usersModel);
        console.log('hola');
    }
}
