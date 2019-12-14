import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

/* Importando Modelo Qualification */
import { AssistenceModel } from '../models/assistance-settings.model';
/* Importando Modelo Qualification */
import { QualificationModel } from '../models/config-qualification.model';


@Injectable({
  providedIn: 'root'
})

export class CourseService {
    apiURLCourses = 'https://devmasterdeswebapi.azurewebsites.net/api/Courses';
    apiURL = 'https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/23';

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
        return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/Users/' + id + '/UpcomingCourses');
    }

    /*
    *    ✅ Calificación
    */
    // Listar Calificación
    getQualificationSettings(upcomingCourses) {
        return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/' + upcomingCourses +
                             '/QualificationSettings');
    }

    // Agregar Calificación
    getConfigQualification(qualificationModel: QualificationModel, idCourse) {
        return this.http.post('https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/' + idCourse + '/QualificationSettings/', qualificationModel);
    }

    // Eliminar Asistencia
    deleteQualification(qualificationModel: QualificationModel) {
        return this.http.delete('https://devmasterdeswebapi.azurewebsites.net/api/QualificationSettings/' + qualificationModel );
    }

    /*
    *    ✅ Asistencia
    */
    // Listar Asistencia
    getListAssistanceSettings(upcomingCourses) {
        return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/' + upcomingCourses + '/AssistanceSettings')
    }

    // Agregar Asistencia
    postAddAssistanceSettings(assistenceModel: AssistenceModel, idCourse) {
        return this.http.post('https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/' + idCourse + '/AssistanceSettings', assistenceModel);
    }

    // Eliminar Asistencia
    deleteAssistanceSettings(assistenceModel: AssistenceModel) {
        return this.http.delete('https://devmasterdeswebapi.azurewebsites.net/api/AssistanceSettings/' + assistenceModel );
    }

    /* Calificacion de Usuario por Curso */
    getUserQualifications(userId) {
        console.log(userId);
        return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/UserQualifications?UpcomingCourseId=' + userId);
    }
}
