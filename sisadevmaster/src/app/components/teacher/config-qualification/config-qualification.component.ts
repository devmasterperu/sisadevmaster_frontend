import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
// import { NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-config-qualification',
  templateUrl: './config-qualification.component.html'
})

export class ConfigQualificationComponent implements OnInit {
  // customer = {
  //   "evaluationName": "Primer parcial",
  //   "percentageValue":100
  // };

  registerForm: FormGroup;
  submitted = false;

  /*
  *  ✅ Constructor
  */
  constructor(private formBuilder: FormBuilder, private objTeacherService: TeacherService) {
    /*
     *  Se dispara automaticamente al cargar la pagina
     */
  }

  /*
  *  ✅ ngOnInit
  */
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      evaluationName: ['', Validators.required],
      percentageValue: [ , Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /*
  *  ✅ Formulario Calificación
  */
  onSubmitRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    if (this.registerForm.valid) {
      this.objTeacherService
                            .createCustomer(this.registerForm.value)
                            .subscribe((res) => {
                                console.log(this.registerForm.value);
                                console.log(res);
                            });
    }
  }
}
