import { Component } from '@angular/core';

/* Para nuestro servicio */
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-config-qualification',
  templateUrl: './config-qualification.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border-bottom-color: #FF2B45;
    }
    `
  ]
})

export class ConfigQualificationComponent {
  qualification:Object = {
    evaluationName: null,
    percentageValue: null
  }

  /*
    ⚠️ Constructor
  */
  constructor() {

  }

  /*
  ✅ Formulario Calificación
  */
  registerQualification(formRegisterQualification) {
    console.log(formRegisterQualification);
  }
}
