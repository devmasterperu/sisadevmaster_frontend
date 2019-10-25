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

    constructor(private http: HttpClient) {}

    // Registrar Configuración Calificación
    getConfigQualification( qualificationModel: QualificationModel ) {
        return this.http.post(`${this.apiURL}/QualificationSettings/`, qualificationModel);
    }

    // Registrar a un Docente
    postRegisterTeacher( usersModel: UsersModel ) {
    return this.http.post(`${this.apiURLUsers}`, usersModel);
    }

    // Tipo de Institución (Dato en duro)
    getTypeInstitution() {
    return typeInstitutions = [
        { name: 'Instituto', type: 'I' },
        { name: 'Colegio', type: 'C1' },
        { name: 'Cetpro', type: 'C2' },
        { name: 'Universidad', type: 'U' },
        { name: 'Otro', type: 'O' },
    ];
    }
}
