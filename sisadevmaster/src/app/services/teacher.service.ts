import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo Users */
import { UsersModel } from '../models/users.model';

@Injectable()

export class TeacherService {
    apiURLUsers: string = 'https://devmasterdeswebapi.azurewebsites.net/api/Users';
    apiURLUpdateUser: string = 'https://devmasterdeswebapi.azurewebsites.net/api/Users/76';

    constructor(private http: HttpClient) {}

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
