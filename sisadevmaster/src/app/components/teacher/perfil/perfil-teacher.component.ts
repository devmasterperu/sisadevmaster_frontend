import { Component, OnInit } from '@angular/core'; /* 👶🏼 */

/* Para nuestro servicio */
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-perfil-teacher',
  templateUrl: './perfil-teacher.component.html'
})

export class PerfilTeacherComponent implements OnInit {
    dataUser: any;
    dataCoursesTeacher: any[] = [];

    constructor(    private objCurseService: CourseService) { }

    ngOnInit() {
        // LocalStorage
        // JSON.parse ➡️ convierte de string a objeto
        const dataStorage = JSON.parse(localStorage.userDevmaster);
       
        this.dataUser = dataStorage;
      
        this.objCurseService
                            .getListCoursesTeacher(this.dataUser.id)
                            .subscribe( (data: any) =>  {
                                this.dataCoursesTeacher = data;
                                /*
                                *    1. Debo crear el localStorage para pasar los cursos asignados para un docente.
                                *    Luego ya en cada vista detalle del curso, traigo la info previamente almacenado en el localStorage.
                                *    Aquí comparamos ahora, el :id del curso que tenemos en la Uri con la propiedad
                                *    upcomingCourseId del localStorage.
                                *    courseDevmaster: Es la variable que tendre la info de mi localStorage
                                */
                                localStorage.setItem('courseDevmaster', JSON.stringify(data));
                            });
    }
}
