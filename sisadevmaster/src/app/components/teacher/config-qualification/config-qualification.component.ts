import { Component } from '@angular/core'; /* 👶🏼 */
import { NgForm} from '@angular/forms';

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

  // register(form: NgForm)  {
    /* console.log(form.value); */ /* todos los valores del form */
    /* console.log(form.controls['evaluationName'].value); */ /* trayendo un solo valor */
    /* console.log(form.controls['percentageValue'].value); */
  // }

  /*
    ⚠️ Constructor
  */
  constructor(private apiService:TeacherService) {
    /*
     *  Se dispara automaticamente al cargar la pagina
     */
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
  register(form: NgForm) {
    this.apiService
    .createCustomer(form.value)
    .subscribe((res) => {
        console.log(form.value);
        console.log(res);
    });
  }


}
