import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
  Para trabajar con formularios
*/
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

/*
  Para que no me salga el error No provider for HttpClient! #20355 (No esta en el curso)
  https://github.com/angular/angular/issues/20355
*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
/* componente principal */
import { AppComponent } from './app.component';

/* componentes agregados */
// import { HeaderComponent } from './components/header/header.component';
// import { MenuComponent } from './components/menu/menu.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ProgrammingCurseComponent } from './components/programming-curse/programming-curse.component';
import { CurseComponent } from './components/curse/curse.component';
import { InscriptionComponent } from './components/inscription/inscription.component';


// importando rutas
import { ROUTES } from './app.routes';

// servicios
import { StudentService } from './services/student.service';

// RouterModule.forRoot( ROUTES, { useHash: true } ) ✅ dentro de imports agregamos esa linea para el manejo de rutas
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // MenuComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    ListStudentComponent,
    ProgrammingCurseComponent,
    CurseComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
