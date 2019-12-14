import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { CourseService } from '../../../services/course.service';

/* Para obtener parametro de la uri */
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config-qualification',
  templateUrl: './config-qualification.component.html'
})

export class ConfigQualificationComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    upcomingCourses: any;
    qualificationSettings: any = [];
    idReturnView: any;
    /*
    *    ✅ Constructor
    *    Se dispara automaticamente al cargar la pagina
    */
    constructor(    private formBuilder: FormBuilder,
                    private objCourseService: CourseService ,
                    private route: ActivatedRoute ) { }

    /*
    *    ✅ ngOnInit
    *    Se carga automaticamente al cargar la página
    */
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            evaluationName: ['', Validators.required],
            percentageValue: [ , [Validators.required, Validators.min(0), Validators.max(100)]]
        });

        // this.upcomingCourses = 23;
        // Obteniendo parametro de la URI ➡️ this.route.snapshot.paramMap.get(' ')
        this.upcomingCourses = this.route.snapshot.paramMap.get('id');

        // Retornar al curso correspondiente
        this.idReturnView = new Array();
        this.idReturnView.push(this.upcomingCourses);

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
    // Función declarada para obtener los datos, y pintarla en la tabla de Asistencia luego de la eliminación de un registro
    fetchData() {
        this.objCourseService
                            .getQualificationSettings(this.upcomingCourses)
                            .subscribe( ( data: any ) => {
                                this.qualificationSettings = data;
                            });
    }

    onSubmitRegister() {
        this.submitted = true;
        if (this.registerForm.valid) {
            this.objCourseService
                                .getConfigQualification(this.registerForm.value, this.upcomingCourses)
                                .subscribe( resp => this.fetchData() );
        }
    }

    onClickDeleteQualification(item: any) {
        this.objCourseService
                            .deleteQualification(item)
                            .subscribe( resp =>  this.fetchData() );
                            /*
                            *    resp retorna true cuando a sido eliminado
                            *    how to refresh the page after delete in angular5?
                            *    https://stackoverflow.com/questions/49133449/how-to-refresh-the-page-after-delete-in-angular5
                            *    Aquí, obtienes "precisión" de la realidad pero sacrificas el rendimiento al hacer
                            *    2 llamadas API REST cada vez que eliminas. Disparar una función dentro del .subscrite()
                            *    Ejm: this.fetchData()
                            */
    }
}
