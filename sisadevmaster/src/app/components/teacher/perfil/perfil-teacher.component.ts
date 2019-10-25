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

    constructor( private objCurseService: CourseService) { }

    ngOnInit() {
        // LocalStorage
        const data = JSON.parse(localStorage.userDevmaster);
        this.dataUser = data[0];

        this.objCurseService
                            .getListCoursesTeacher(this.dataUser.id)
                            .subscribe( (data:any) =>  {
                                this.dataCoursesTeacher = data;
                            });
    }
}
