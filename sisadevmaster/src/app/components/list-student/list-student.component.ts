import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html'
})

export class ListStudentComponent {
  nuevosAlumnos: any[] = [];

  // debo de exportar el servicio StudentService ✅ para ver el codigo en consola que quiera mostrar
  constructor( private studentService: StudentService) {
    this.studentService
                      .getListStudent()
                      // .subscribe( resp => {
                      //   console.log(resp);

                      // });
                      .subscribe( (data: any) => {
                        this.nuevosAlumnos = data;
                        console.log(this.nuevosAlumnos);
                      });
  }
}
