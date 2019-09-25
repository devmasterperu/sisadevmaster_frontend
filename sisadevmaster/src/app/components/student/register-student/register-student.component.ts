import { Component } from '@angular/core';
// agregamos
import { NgForm } from '@angular/forms';

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

  typeDocument = [{
    code: 1,
    name: 'DNI'
  },
  {
    code: 2,
    name: 'PARTIDA DE NACIMIENTO'
  },
  {
    code: 3,
    name: 'LIBRETA ELECTORAL'
  },
  {
    code: 4,
    name: 'RUC'
  }
];

  constructor() { }

  // este forma recuerda que esta colocado como ATRIBUTO de la etiqueta <form> #forma
  registerStudent( formRegisterStudent:NgForm ) {
    console.log('Formulario Posteado');
    console.log(formRegisterStudent);
    console.log('NgForm ', formRegisterStudent);
    console.log('Valor Forma ', formRegisterStudent.value);
    console.log('Usuario ', this.usuario);
  }
}
