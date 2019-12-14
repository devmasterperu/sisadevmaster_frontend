import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { CourseService } from '../../../services/course.service';

/* Para obtener parametro de la uri */
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config-assistance',
  templateUrl: './config-assistance.component.html'
})

export class ConfigAssistanceComponent implements OnInit {
    registerAssistanceForn: FormGroup;
    upcomingCourses: any;
    assistanceSettings: any = [];
    idReturnView: any;

    /*
    *    ✅ Constructor
    *    Se dispara automaticamente al cargar la pagina
    */
    constructor(    private formBuilder: FormBuilder,
                    private objCourseService: CourseService,
                    private route:ActivatedRoute ) { }

    /*
    *  ✅ ngOnInit
    *    Se carga automaticamente al cargar la página
    */
    ngOnInit() {
        this.registerAssistanceForn = this.formBuilder.group({
            assistanceDate: ['', Validators.required]
        });
        // this.upcomingCourses = 23;
        // Obteniendo parametro de la URI
        this.upcomingCourses = this.route.snapshot.paramMap.get('id');

         // Retornar al curso correspondiente
        this.idReturnView = new Array();
        this.idReturnView.push(this.upcomingCourses);

        this.objCourseService
                            .getListAssistanceSettings(this.upcomingCourses)
                            .subscribe( ( data: any ) => {
                                let index;
                                for (index = 0; index < data.length; index++) {
                                    const getDate = new Date(data[index].assistanceDate);
                                    const newAssistanceDate = getDate.getFullYear() + '-' + getDate.getMonth() + '-' + getDate.getDate();
                                    data[index].assistanceDate = newAssistanceDate;
                                }
                                this.assistanceSettings = data;
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
                                let index;
                                for (index = 0; index < data.length; index++) {
                                    const getDate = new Date(data[index].assistanceDate);
                                    const newAssistanceDate = getDate.getFullYear() + '-' + getDate.getMonth() + '-' + getDate.getDate();
                                    data[index].assistanceDate = newAssistanceDate;
                                }
                                this.assistanceSettings = data;
                            });
    }

    onSubmitRegisterAssistance() {
        console.log(this.registerAssistanceForn.value.asis);
        this.objCourseService
                            .postAddAssistanceSettings(this.registerAssistanceForn.value, this.upcomingCourses)
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
