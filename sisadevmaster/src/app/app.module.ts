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
/* Componentes Admin */
import { InscriptionComponent } from './components/admin/inscription/inscription.component';
import { PerfilAdminComponent } from './components/admin/perfill/perfil-admin.component';
/* Componentes Student */
import { RegisterStudentComponent } from './components/student/register-student/register-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { PerfilComponent } from './components/student/perfil/perfil.component';
/* Componentes Teacher */
import { RegisterTeacherComponent } from './components/teacher/register-teacher/register-teacher.component';
import { ProgrammingCurseComponent } from './components/admin/programming-curse/programming-curse.component';
import { PerfilTeacherComponent } from './components/teacher/perfil/perfil-teacher.component';
import { ConfigCurseComponent } from './components/teacher/config-curse/config-curse.component';
import { ConfigQualificationComponent } from './components/teacher/config-qualification/config-qualification.component';
import { ConfigAssistanceComponent } from './components/teacher/config-assistance/config-assistance.component';

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
    PerfilTeacherComponent,
    ConfigQualificationComponent,
    ConfigAssistanceComponent,
    ConfigCurseComponent,
    ListStudentComponent,
    ProgrammingCurseComponent,
    InscriptionComponent,
    PerfilAdminComponent,
    PerfilComponent,
    EditStudentComponent
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
