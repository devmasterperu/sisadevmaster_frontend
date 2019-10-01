import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
// agregamos
import { NgForm } from '@angular/forms';
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

export class RegisterStudentComponent {
  usuario:Object = {
    name: null,
    typeDocument: 'TDM',
    gender: null
  };

  // typeDocument = [{
  //   code: 1,
  //   name: 'DNI'
  // },
  // {
  //   code: 2,
  //   name: 'PARTIDA DE NACIMIENTO'
  // },
  // {
  //   code: 3,
  //   name: 'LIBRETA ELECTORAL'
  // },
  // {
  //   code: 4,
  //   name: 'RUC'
  // }
  // ];

  documentTypes: any[] = [];
  dataDepartament: any[] = [];
  dataProvince: any;
  dataDistrict: any;

  constructor( private _documentTypesService:DocumentTypesService, private _ubigeoService:UbigeoService, private _studentService:StudentService ) {
    this._documentTypesService
                            .getListTypeServices()
                            .subscribe( (data: any) => {
                              this.documentTypes = data;
                            });

    this._ubigeoService
                      .getListUbigeoDepartament()
                      .subscribe( (data: any) => {
                        this.dataDepartament = data;
                      });
  }

  /* formRegisterStudent which we have received from the registration form. */
  registerStudent(formRegisterStudent) {
    // console.log(formRegisterStudent.value);
    this._studentService
                        .postRegisterStudent()
                        .subscribe((resp) => {
                          console.log(resp);
                        });
  }

  /*
  * ✅ For Dropdown Cascadin
  */

  // change select departament
  changeDepartament(departamentId) {
    this._ubigeoService
                      .getListUbigeoProvince(departamentId)
                      .subscribe(data => {
                        this.dataProvince = data;
                        // console.log(data);
                      });
  }

  changeProvince(provinceId) {
    this._ubigeoService
                      .getListUbigeoDistrict(provinceId)
                      .subscribe(data => {
                        this.dataDistrict = data;
                        // console.log(data);
                      });
  }
}
