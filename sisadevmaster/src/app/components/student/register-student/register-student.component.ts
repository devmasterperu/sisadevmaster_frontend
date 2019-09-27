import { Component } from '@angular/core';
// agregamos
import { NgForm } from '@angular/forms';
/* Para nuestro servicio */
import { DocumentTypesService } from '../../../services/document-types.service';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border-bottom-color: #FF2B45;
    }
    `
  ]
})

export class RegisterStudentComponent {
  usuario:Object = {
    name: null,
    typeDocument: 'TDM',
    gender: null
  };

  // typeDocument = [{
  //   code: 1,
  //   name: 'DNI'
  // },
  // {
  //   code: 2,
  //   name: 'PARTIDA DE NACIMIENTO'
  // },
  // {
  //   code: 3,
  //   name: 'LIBRETA ELECTORAL'
  // },
  // {
  //   code: 4,
  //   name: 'RUC'
  // }
  // ];

  documentTypes: any[] = [];
  constructor( private documentTypesService:DocumentTypesService, private _studentService:StudentService ) {
    this.documentTypesService
                            .getListTypeServices()
                            .subscribe( (data: any) => {
                              this.documentTypes = data;
                              console.log(this.documentTypes);
                            });
  }

  // este forma recuerda que esta colocado como ATRIBUTO de la etiqueta <form> #forma
  // registerStudent( formRegisterStudent:NgForm ) {
  //   console.log('Formulario Posteado');
  //   console.log(formRegisterStudent);
  //   console.log('NgForm ', formRegisterStudent);
  //   console.log('Valor Forma ', formRegisterStudent.value);
  //   console.log('Usuario ', this.usuario);
  // }

  /* formRegisterStudent which we have received from the registration form. */
  registerStudent(formRegisterStudent) {
    // console.log(formRegisterStudent.value);
    this._studentService.postRegisterStudent()
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
