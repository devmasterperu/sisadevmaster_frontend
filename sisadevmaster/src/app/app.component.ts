import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Devmasterperu';
  isDisplay=true;

  constructor(){}

  showComponent(status:boolean){
    this.isDisplay=status;
  }

}
