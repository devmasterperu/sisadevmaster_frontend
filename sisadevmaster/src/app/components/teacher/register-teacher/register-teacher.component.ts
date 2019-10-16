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
    this.registerTeacherForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
      documentTypeId: [2, Validators.required],
      documentNumber: [, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      organizationType: ['', Validators.required],
      organizationName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]],
      locationId: [3, Validators.required],
      homeAdress: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber1: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(9)]],
      phoneNumber2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      userTypeId: [1, Validators.required],
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

    this.objTeacherService
                        .postRegisterTeacher(this.registerTeacherForm.value)
                        .subscribe((resp) => {
                           // Page redirect when getting response
                          this.router.navigate(['/perfil_admin']);
                        });
  }
}
