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

/* Componentes Añadidos */
// Componentes Admin
import { InscriptionComponent } from './components/admin/inscription/inscription.component';
import { PerfilAdminComponent } from './components/admin/perfill/perfil-admin.component';
// Componentes Student
import { RegisterStudentComponent } from './components/student/register-student/register-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { PerfilComponent } from './components/student/perfil/perfil.component';
// Componentes Teacher
import { RegisterTeacherComponent } from './components/teacher/register-teacher/register-teacher.component';
import { ProgrammingCurseComponent } from './components/admin/programming-curse/programming-curse.component';
import { PerfilTeacherComponent } from './components/teacher/perfil/perfil-teacher.component';
import { ConfigCurseComponent } from './components/teacher/config-curse/config-curse.component';
import { ConfigQualificationComponent } from './components/teacher/config-qualification/config-qualification.component';
import { ConfigAssistanceComponent } from './components/teacher/config-assistance/config-assistance.component';

/* Servicios */
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { ReusableComponent } from './components/reusable/reusable.component';

// RouterModule.forRoot( ROUTES, { useHash: true } ) ✅ dentro de imports agregamos esa linea para el manejo de rutas
// ⚠️ Eliminar en imports FormsModule, ya que estaremos trabajando con Reactive Forms Validation (Validación de formas reactivas) y no con ngForm
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
    EditStudentComponent,
    ReusableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
