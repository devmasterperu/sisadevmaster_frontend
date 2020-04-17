import { Component, OnInit } from '@angular/core'; /* 👶🏼 */

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})

export class PerfilComponent implements OnInit {
  dataUser: any = [];

  ngOnInit() {
    const data = JSON.parse(localStorage.userDevmaster);
    this.dataUser = data[0];
  }
}
