import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { DocumentTypesService } from '../../../services/document-types.service';
import { UbigeoService } from '../../../services/ubigeo.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border-bottom-color: #FF2B45;
    }
    `
  ]
})

export class RegisterStudentComponent implements OnInit {
  // {
  //   "name": "Juan",
  //   "lastName": "Quinteros Velarde",
  //   "documentTypeId": 1,
  //   "documentNumber": "45896532",
  //   "email": "abcd@gmail.com",
  //   "dateOfBirth": "1993-12-14",
  //   "organizationType": "ES",
  //   "organizationName": "Organización",
  //   "locationId": 3,
  //   "homeAdress": "los cipreses",
  //   "gender": "M",
  //   "phoneNumber1": "999725485",
  //   "phoneNumber2": "-",
  //   "userTypeId": 2
  // }

  registerStudentForm: FormGroup;
  submitted = false;

  documentTypes: any[] = [];
  dataDepartament: any[] = [];
  dataProvince: any;
  dataDistrict: any;

  /*
  *  ✅ Constructor
  */
  constructor(  private formBuilder: FormBuilder,
                private objDocumentTypesService: DocumentTypesService,
                private objUbigeoService: UbigeoService,
                private objStudentService: StudentService ) { }

  ngOnInit() {

    this.registerStudentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      documentTypeId: [2, Validators.required],
      documentNumber: [, [Validators.required, Validators.pattern('[0-9]')]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      organizationType: ['', Validators.required],
      organizationName: ['', Validators.required],
      locationId: [3, Validators.required],
      homeAdress: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber1: ['', [Validators.required, Validators.pattern('[0-9]')]],
      phoneNumber2: ['', Validators.required],
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
    return this.registerStudentForm.controls;
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
  onSubmitRegisterStudent() {
    this.submitted = true;

    this.objStudentService
                        .postRegisterStudent(this.registerStudentForm.value)
                        .subscribe((resp) => {
                          console.log(this.registerStudentForm.value);
                          console.log(resp);
                        });
  }
}
