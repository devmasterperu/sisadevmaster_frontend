import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para nuestro servicio */
import { AdminService } from '../../../services/admin.service';
import { CurseService } from '../../../services/curse.service';

/* jQuery ui */
declare var $: any;

@Component({
  selector: 'app-programming-curse',
  templateUrl: './programming-curse.component.html'
})

export class ProgrammingCurseComponent implements OnInit {
  registerUpcomingCoursesForm: FormGroup;
  courses: any[] = [];

  /*
  *  ✅ Constructor
  */
  constructor(  private formBuilder: FormBuilder,
                private objAdminService: AdminService,
                private objCurseService: CurseService  ) {}

  /*
  *  ✅ ngOnInit
  */
  ngOnInit() {
      this.objAdminService
                          .getSearchTeacher()
                          .subscribe( (data: any) => {
                              // jQuery ui Autocomplete
                              $(document).ready(() => {
                                  // http://jsfiddle.net/dhoerster/BXYpt/
                                  const dataArray = new Array();
                                  for (let i = 0; i < data.length; i++) {
                                      // creando 1 objeto por cada registro, con las propiedades que solicita autocomplete jquery ui
                                      const dataObject = new Object();
                                      dataObject[ 'label' ] = data[i].name;
                                      dataObject[ 'id' ] = data[i].id;
                                      // agregando 1 objeto por cada iteración al arreglo
                                      dataArray.push(dataObject);
                                  }
                                  // la propiedad:source lee un arreglo de json
                                  $( '#searchTeacher' ).autocomplete({
                                      minLength: 0,
                                      source: dataArray,
                                      focus: ( event, ui ) => {
                                          $( '#searchTeacher' ).val( ui.item.value );
                                          return false;
                                      },
                                      select: ( event, ui ) => {
                                          $( '#searchTeacher'  ).val( ui.item.value);
                                          $( '#userId' ).val(ui.item.id);
                                          $( '#userName' ).val($('#searchTeacher').val());
                                          return false;
                                      }
                                  });
                              });
                          });


      // Obtener valores del formulario
      this.registerUpcomingCoursesForm = this.formBuilder.group(
        {
          groupName: [''],
          courseId: [''],
          userId: [],
          modality: [''],
          schedule: [''],
          minVacant: [],
          maxVacant: [],
          numSessions: [],
          numHours: [],
          maxNumAbsence: [],
          minGrade: [],
          startDate: ['2019-10-22T18:22:51.401'],
          endDate: ['2019-10-22T18:22:51.401']
        }
      );

      // Obtener cursos
      this.objCurseService
                          .getListCourses()
                          .subscribe( (data: any) => {
                            this.courses = data;
                          });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerUpcomingCoursesForm.controls;
  }

  /*
  *  ✅ Formulario Programación Curso
  */
  onSubmitRegisterUpcomingCourses() {
      // https://www.quora.com/What-is-the-difference-between-two-functions-Number-value-and-parseInt-value-in-JavaScript
      /*
      *  El valor que obtenemos del combo box es un string y nosotros debemos de enviarlo al servicio como número, por ello debemos de
      *  verificar si el valor del input courseId es un string, para poderlo parsear a número y luego asignarlo como tal al JSON
      *  registerUpcomingCoursesForm
      */
      if ( typeof(this.registerUpcomingCoursesForm.value.courseId) === 'string' ) {
        this.registerUpcomingCoursesForm.value[ 'courseId' ]  = parseInt(this.registerUpcomingCoursesForm.value.courseId);
      }

      this.objAdminService
                          .postProgrammingCurse(this.registerUpcomingCoursesForm.value)
                          .subscribe((resp) => {
                            console.log(this.registerUpcomingCoursesForm.value);
                          });
  }
}
