import { Component, OnInit } from '@angular/core'; /* 👶🏼 */

/* Para nuestro servicio */
import { CourseService } from '../../../services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-assistance',
  templateUrl: './config-assistance.component.html'
})

export class ConfigAssistanceComponent implements OnInit {
    registerAssistanceForn: FormGroup;
    upcomingCourses: any;
    assistanceSettings: any = [];

    /*
    *    ✅ Constructor
    *    Se dispara automaticamente al cargar la pagina
    */
    constructor(    private formBuilder: FormBuilder,
                    private objCourseService: CourseService ) { }

    /*
    *  ✅ ngOnInit
    *    Se carga automaticamente al cargar la página
    */
    ngOnInit() {
        this.registerAssistanceForn = this.formBuilder.group({
            assistanceDate: ['', Validators.required]
        });

        this.upcomingCourses = 23;
        this.objCourseService
                            .getListAssistanceSettings(this.upcomingCourses)
                            .subscribe( ( data: any ) => {
                                this.assistanceSettings = data;
                                console.log( this.assistanceSettings );
                            });
    }

    // convenience getter for easy access to form fields
    get f() {
    return this.registerAssistanceForn.controls;
    }

    // Función declarada para obtener los datos, y pintarla en la tabla de Asistencia luego de la eliminación de un registro
    fetchData() {
        this.objCourseService
                            .getListAssistanceSettings(this.upcomingCourses)
                            .subscribe( ( data: any ) => {
                                this.assistanceSettings = data;
                            });
    }

    onSubmitRegisterAssistance() {
        this.objCourseService
                            .postAddAssistanceSettings(this.registerAssistanceForn.value)
                            .subscribe( resp => this.fetchData() );
    }

    onClickDeleteAssistence(item: any) {
        this.objCourseService
                            .deleteAssistanceSettings(item)
                            .subscribe( resp  => this.fetchData() );
                            /*
                            *    resp retorna true cuando a sido eliminado
                            *    how to refresh the page after delete in angular5?
                            *    https://stackoverflow.com/questions/49133449/how-to-refresh-the-page-after-delete-in-angular5
                            *    Aquí, obtienes "precisión" de la realidad pero sacrificas el rendimiento al hacer
                            *    2 llamadas API REST cada vez que eliminas. Disparar una función dentro del .subscrite()
                            *    Ejm: this.fetchData()
                            *
                            *    Mensaje de confirmación antes de eliminar un registro
                            *    https://stackblitz.com/edit/angular-confirmation-dialog
                            *    npm install --save @ng-bootstrap/ng-bootstrap
                            */
    }
}
