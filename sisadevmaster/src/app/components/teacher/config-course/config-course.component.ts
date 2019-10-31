import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup } from '@angular/forms';

/* Para nuestro servicio */
import { ImageService } from '../../../services/image.service';

/* Para visualizar la carga del archivo */
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-config-course',
  templateUrl: './config-course.component.html'
})

export class ConfigCourseComponent implements OnInit {
    registerPaymentForm: FormGroup;
    fd: any;
    statusProgress = { status: '', message: '' };
    /*
    *  ✅ Constructor
    */
    constructor(    private formBuilder: FormBuilder,
                    private objtImageService: ImageService ) { }

    /*
    *  ✅ ngOnInit
    */
    ngOnInit() {
        this.registerPaymentForm = this.formBuilder.group({
            file: ['']
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
            // Añadiendo campos a la instancia usando su método  append()
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
                                console.log(events);
                            });

    }

    onSubmitRegisterPayment() {
        alert('Envio Formulario');
    }
}
