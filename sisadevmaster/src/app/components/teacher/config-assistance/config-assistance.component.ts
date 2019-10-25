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
    assistanceSettings: any;
    registerAssistanceSettings: any;

    /*
    *  ✅ Constructor
    */
    constructor(    private formBuilder: FormBuilder,
                    private objCourseService: CourseService ) { }

    /*
    *  ✅ ngOnInit
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

    onSubmitregisterAssistance() {
        this.objCourseService
                            .postAddAssistanceSettings(this.registerAssistanceForn.value)
                            .subscribe( ( resp ) => {
                                console.log( resp );
                            });
    }
}
