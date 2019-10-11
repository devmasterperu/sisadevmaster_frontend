import { BrowserModule } from '@angular/platform-browser';  /* 👶🏼 */
import { NgModule } from '@angular/core';  /* 👶🏼 */

import { AppRoutingModule } from './app-routing.module';  /* 👶🏼 */
/*
*  Componente principal
*/
import { AppComponent } from './app.component';  /* 👶🏼 */

/* componente añadido */
import { ListComponent } from './components/students/list/list.component';
import { AgregarComponent } from './components/students/agregar/agregar.component';

// importando rutas
import { ROUTES } from './app.routes';  /* debes crear este archivo */
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
