import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para manejo de rutas */
import { Router } from '@angular/router';

/* Para nuestro servicio */
import { DocumentTypesService } from '../../../services/document-types.service';
import { UbigeoService } from '../../../services/ubigeo.service';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html'
})

export class RegisterTeacherComponent implements OnInit {
    registerTeacherForm: FormGroup;
    submitted = false;

    documentTypes: any[] = [];
    dataDepartament: any;
    dataProvince: any;
    dataDistrict: any;

    // Data en duro
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
  constructor(  private router: Router,
                private formBuilder: FormBuilder,
                private objDocumentTypesService: DocumentTypesService,
                private objUbigeoService: UbigeoService,
                private objTeacherService: TeacherService ) { }

  /*
  *  ✅ ngOnInit
  */
  ngOnInit() {
    // Obtener valores del formulario
    // Se envia el valor en duro del userTypeId: 2 = Docente
    this.registerTeacherForm = this.formBuilder.group({
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

    this.objDocumentTypesService
                              .getListTypeServices()
                              .subscribe( (data: any) => {
                                this.documentTypes = data;
                              });

    this.objUbigeoService
                        .getListUbigeoDepartament()
                        .subscribe( (data: any) => {
                          this.dataDepartament = data;
                        });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerTeacherForm.controls;
  }

  /*
  * ✅ For Dropdown Cascadin
  */
  // change select departament
  changeDepartament(departamentId) {
    this.objUbigeoService
                      .getListUbigeoProvince(departamentId)
                      .subscribe(data => {
                        this.dataProvince = data;
                        // console.log(data);
                      });
  }

  changeProvince(provinceId) {
    this.objUbigeoService
                      .getListUbigeoDistrict(provinceId)
                      .subscribe(data => {
                        this.dataDistrict = data;
                        // console.log(data);
                      });
  }

  /*
  *  ✅ Formulario Registro Estudiante
  */
  onSubmitRegisterTeacher() {
    this.submitted = true;
    // https://www.quora.com/What-is-the-difference-between-two-functions-Number-value-and-parseInt-value-in-JavaScript
    /*
    *  El valor que obtenemos del combo box es un string y nosotros debemos de enviarlo al servicio como número, por ello debemos de
    *  verificar si el valor del input es un string, para poderlo parsear a número y luego asignarlo como tal al JSON
    *  registerTeacherForm
    */
    if ( typeof(this.registerTeacherForm.value.documentTypeId) === 'string' ) {
        this.registerTeacherForm.value[ 'documentTypeId' ]  = parseInt(this.registerTeacherForm.value.documentTypeId);
    }
    if ( typeof(this.registerTeacherForm.value.locationId) === 'string' ) {
        this.registerTeacherForm.value[ 'locationId' ]  = parseInt(this.registerTeacherForm.value.locationId);
    }

    this.objTeacherService
                        .postRegisterTeacher(this.registerTeacherForm.value)
                        .subscribe((resp) => {
                           // Page redirect when getting response
                          this.router.navigate(['/perfil_admin']);
                        });
  }
}
