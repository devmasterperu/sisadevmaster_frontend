import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup } from '@angular/forms';

/* Para nuestro servicio */
import { CourseService } from 'src/app/services/course.service';
import { ImageService } from '../../../services/image.service';

/* Para visualizar la carga del archivo */
import { HttpEventType } from '@angular/common/http';

/* Para obtener parametro de la uri */
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-curse',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
    registerPaymentForm: FormGroup;
    fd: any;
    statusProgress = { status: '', message: '' };
    urlTags: any;
    dataCourse: any[] = [];
    dataNotaCourseConfig: any[] = [];
    dataNotaCourseStudent: any[] = [];

    /*
    *  ✅ Constructor
    */
    constructor(    private objCurseService: CourseService,
                    private formBuilder: FormBuilder,
                    private objtImageService: ImageService,
                    private route: ActivatedRoute) { }

    /*
    *  ✅ ngOnInit
    */
    ngOnInit() {
        this.registerPaymentForm = this.formBuilder.group({
            file: ['']
        });

        // (LocalStorage) JSON.parse ➡️ convierte de string a objeto
        const courseStorage = JSON.parse(localStorage.courseDevmaster);

        // Obteniendo parametro de la URI
        this.urlTags = this.route.snapshot.paramMap.get('id');

        let index;
        for (index = 0; index < courseStorage.length; index++) {
            const upcomingCourseId = courseStorage[index].upcomingCourseId;

            if (upcomingCourseId === Number(this.urlTags)) {

                const startDate = new Date(courseStorage[index].startDate);
                switch (startDate.getMonth()) { // trayendo el mes
                    case 0:
                        courseStorage[index].newMonth = 'Ene.';
                        break;
                    case 1:
                        courseStorage[index].newMonth = 'Feb.';
                        break;
                    case 2:
                        courseStorage[index].newMonth = 'Mar.';
                        break;
                    case 3:
                        courseStorage[index].newMonth = 'Abr.';
                        break;
                    case 4:
                        courseStorage[index].newMonth = 'May.';
                        break;
                    case 5:
                        courseStorage[index].newMonth = 'Jun.';
                        break;
                    case 6:
                        courseStorage[index].newMonth = 'Jul.';
                        break;
                    case 7:
                        courseStorage[index].newMonth = 'Ago.';
                        break;
                    case 8:
                        courseStorage[index].newMonth = 'Set.';
                        break;
                    case 9:
                        courseStorage[index].newMonth = 'Oct.';
                        break;
                    case 10:
                        courseStorage[index].newMonth = 'Nov.';
                        break;
                    default:
                        courseStorage[index].newMonth = 'Dic.';
                        break;
                }
                courseStorage[index].newDate = startDate.getDate();
                this.dataCourse.push(courseStorage[index]);
                console.log(courseStorage[index]);
            }
        }

        this.objCurseService
                            .getUserQualifications(24)
                            .subscribe( (data: any) => {
                                this.dataNotaCourseConfig = data[0].Config;
                                this.dataNotaCourseStudent = data[1].Alumno;
                                console.log(data[1].Alumno);
                            });
    }

    changeFileInput(event) {
        /*
        *    ✅ Upload image
        *    1️⃣ Enviamos información al servidor para que me retorne un nombre generado por el backend para que no se repita
        *    2️⃣ Enviamos toda la data de todos los campos
        */
        // Verificamos si tenemos un archivo subido
        if (event.target.files.length > 0) {
            // event.target.files[0] es quien tiene la información del archivo subido
            const file = event.target.files[0];
            // De registerPaymentForm obtengo el atributo 'file' y le paso el valor file
            this.registerPaymentForm.get('file').setValue(file);

            // Instanciando FormData()
            this.fd = new FormData();
            // Añadiendo campos a la instancia usando su método append()
            this.fd.append( 'file', this.registerPaymentForm.get('file').value );
        }

        this.objtImageService
                            .getRegisterNameFile( this.fd )
                            .subscribe( (events) => {
                                if (events.type === HttpEventType.UploadProgress) {
                                    const uploadProgress = Math.round((events.loaded / events.total)  * 100);
                                    this.statusProgress = { status: 'progress', message: uploadProgress.toString() };
                                    return this.statusProgress;
                                }
                            });
    }

    onSubmitRegisterPayment() {
        alert('Envio Formulario');
    }
}
