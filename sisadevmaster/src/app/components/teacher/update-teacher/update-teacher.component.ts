import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {
    updateTeacherForm: FormGroup;

    documentTypes: any;
    dataDepartament: any;
    dataProvince: any;
    dataDistrict: any;

    // Data en duro para Tipos de Institución
    typeInstitution = [
        { name: 'Instituto', code: 'I' },
        { name: 'Colegio', code: 'C1' },
        { name: 'Cetpro', code: 'C2' },
        { name: 'Universidad', code: 'U' },
        { name: 'Otro', code: 'O' },
    ];
    /*
    *  ✅ Constructor
    */
    constructor(    private formBuilder: FormBuilder,
                    private objDocumentTypesService: DocumentTypesService,
                    private objUbigeoService: UbigeoService,
                    private objTeacherService: TeacherService) { }

    /*
    *  ✅ ngOnInit
    */
    ngOnInit() {
        this.updateTeacherForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
            lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
            documentTypeId: ['', Validators.required],
            documentNumber: [, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.email]],
            dateOfBirth: ['', Validators.required],
            organizationType: ['', Validators.required],
            organizationName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
            locationId: ['', Validators.required],
            homeAdress: ['', Validators.required],
            gender: ['', Validators.required],
            phoneNumber1: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(9)]],
            phoneNumber2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            userTypeId: [2, Validators.required],
          });

        // Tipo de Documento
        this.objDocumentTypesService
            .getListTypeServices()
            .subscribe( (data: any) => {
                this.documentTypes = data;
            });

        // Ubigeo Departamento
        this.objUbigeoService
                            .getListUbigeoDepartament()
                            .subscribe( (data: any) => {
                              this.dataDepartament = data;
                            });

        // Traida de 1 usuario

        // Actualización de 1 usuario
    }

    /*
    * ✅ For Dropdown Cascadin
    */
    // Cambio Ubigeo departamento
    changeDepartament(departamentId) {
        this.objUbigeoService
                            .getListUbigeoProvince(departamentId)
                            .subscribe(data => {
                                this.dataProvince = data;
                            });
    }
    // Cambio Ubigeo Provincia
    changeProvince(provinceId) {
        this.objUbigeoService
                            .getListUbigeoDistrict(provinceId)
                            .subscribe(data => {
                                this.dataDistrict = data;
                            });
      }
}
