import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-config-qualification',
  templateUrl: './config-qualification.component.html'
})

export class ConfigQualificationComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    upcomingCourses: any;
    qualificationSettings: any;
  /*
  *    ✅ Constructor
  *    Se dispara automaticamente al cargar la pagina
  */
  constructor(  private formBuilder: FormBuilder,
                private objCourseService: CourseService ) {
  }

  /*
  *    ✅ ngOnInit
  *    Se carga automaticamente al cargar la página
  */
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      evaluationName: ['', Validators.required],
      percentageValue: [ , [Validators.required, Validators.min(0), Validators.max(100)]]
    });

    this.upcomingCourses = 23;
    this.objCourseService
                        .getQualificationSettings(this.upcomingCourses)
                        .subscribe( ( data: any ) => {
                            this.qualificationSettings = data;
                            console.log( this.qualificationSettings );
                        });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /*
  *  ✅ Formulario Configurar Calificación
  */
  onSubmitRegister() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.objCourseService
                            .getConfigQualification(this.registerForm.value)
                            .subscribe((res) => {
                                console.log(res);
                            });
    }
  }
}
