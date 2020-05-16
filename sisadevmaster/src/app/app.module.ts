import { BrowserModule } from '@angular/platform-browser'; /* 👶🏼 */
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; /* 👶🏼 */

/* Componente Principal */
import { AppComponent } from './app.component'; /* 👶🏼 */

/* Importando rutas */
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

/* Manejo de formularios */
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/* Configuracion de HTTP */
import { HttpClientModule } from '@angular/common/http';

/* Servicios */
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';

/* Componentes Añadidos */
// Componentes Admin
import { InscriptionComponent } from './components/admin/inscription/inscription.component';
import { PerfilAdminComponent } from './components/admin/perfill/perfil-admin.component';
// Componentes Student
import { RegisterStudentComponent } from './components/student/register-student/register-student.component';
// import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { PerfilComponent } from './components/student/perfil/perfil.component';

// Componentes Teacher
import { RegisterTeacherComponent } from './components/teacher/register-teacher/register-teacher.component';
import { ProgrammingCurseComponent } from './components/admin/programming-curse/programming-curse.component';
import { PerfilTeacherComponent } from './components/teacher/perfil/perfil-teacher.component';
import { ConfigCourseComponent } from './components/teacher/config-course/config-course.component';
import { ConfigQualificationComponent } from './components/teacher/config-qualification/config-qualification.component';
import { ConfigAssistanceComponent } from './components/teacher/config-assistance/config-assistance.component';
import { UpdateTeacherComponent } from './components/teacher/update-teacher/update-teacher.component';
import { CourseComponent } from './components/teacher/course/course.component';

import { HomeComponent } from './components/home/home.component';
import { AppDashboardHeaderComponent } from './layout/app-dashboard-header/app-dashboard-header.component';
import { AppDashboardOffcanvasComponent } from './layout/app-dashboard-offcanvas/app-dashboard-offcanvas.component';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';

/* Modal Bootstrap */
import { ModalModule } from 'ngx-bootstrap/modal';
import { CurseStudentComponent } from './components/student/curse/curse-student.component';
import { SignupComponent } from './components/signup/signup.component';

// RouterModule.forRoot( ROUTES, { useHash: true } ) ✅ dentro de imports agregamos esa linea para el manejo de rutas
// ⚠️ Eliminar en imports FormsModule, ya que estaremos trabajando con Reactive
// Forms Validation (Validación de formas reactivas) y no con ngForm
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
    ConfigCourseComponent,
    ListStudentComponent,
    ProgrammingCurseComponent,
    InscriptionComponent,
    PerfilAdminComponent,
    PerfilComponent,
    // EditStudentComponent,
    HomeComponent,
    AppDashboardHeaderComponent,
    AppDashboardOffcanvasComponent,
    LayoutDashboardComponent,
    UpdateTeacherComponent,
    CourseComponent,
    CurseStudentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ModalModule.forRoot()
  ],
  providers: [
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
