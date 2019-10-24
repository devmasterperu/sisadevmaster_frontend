import { Component, OnInit } from '@angular/core'; /* 👶🏼 */

@Component({
  selector: 'app-perfil-teacher',
  templateUrl: './perfil-teacher.component.html'
})

export class PerfilTeacherComponent implements OnInit {
    dataUser: any[] = [];

    ngOnInit() {
        const data = JSON.parse(localStorage.userDevmaster);
        this.dataUser = data[0];
    }
}
