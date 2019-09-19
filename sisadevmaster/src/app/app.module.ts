import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';


// importando rutas
import { ROUTES } from './app.routes';

// RouterModule.forRoot( ROUTES, { useHash: true } ) ✅ dentro de imports agregamos esa linea para el manejo de rutas
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent
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
