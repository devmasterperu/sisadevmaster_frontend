import { Component } from '@angular/core';

/* Para nuestro servicio */
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-config-qualification',
  templateUrl: './config-qualification.component.html'
})

export class ConfigQualificationComponent {

  customer = {
    "evaluationName": "Primer parcial",
    "percentageValue":100
  };

  /*
    ⚠️ Constructor
  */
  constructor(private apiService:TeacherService) {
    this.apiService
    .createCustomer(this.customer)
    .subscribe((res) => {
        console.log(this.customer);
        console.log(res);
    });
  }

  /*
  ✅ Formulario Calificación
  */


}
