import { Component } from '@angular/core';

/* Para nuestro servicio */
import { AdminService } from '../../../services/admin.service';
import { element } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-programming-curse',
  templateUrl: './programming-curse.component.html'
})

export class ProgrammingCurseComponent {
  // dataTeacher: any[] = [];
  constructor( private objAdminService: AdminService  ) {
    this.objAdminService
                      .getSearchTeacher()
                      .subscribe( (data: any) => {

                        $(document).ready(() => {
                          // http://jsfiddle.net/dhoerster/BXYpt/
                          console.log(data);

                          $( '#topics' ).autocomplete({
                            minLength: 0,
                            source: [
                                  { label: 'Choice1', value: 'value1', id: '01' },
                                  { label: 'Choice2', value: 'value2', id: '02' }
                                ],
                            focus: ( event, ui ) => {
                                $( '#topics' ).val( ui.item.label );
                                return false;
                            },
                            select: ( event, ui ) => {
                                $( '#topics' ).val( ui.item.label );
                                $('#topicID').val(ui.item.id);
                                $( '#results').text($('#topicID').val());
                                return false;
                        }
                    });
                        });
                      });
  }
}
