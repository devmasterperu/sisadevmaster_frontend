import { Routes } from '@angular/router';

// lo que importara dentro del layout base
/* Admin */
import { InscriptionComponent } from './components/admin/inscription/inscription.component';
/* Student */
import { RegisterStudentComponent } from './components/student/register-student/register-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { PerfilComponent } from './components/student/perfil/perfil.component';
/* Docente */
import { RegisterTeacherComponent } from './components/teacher/register-teacher/register-teacher.component';
import { ProgrammingCurseComponent } from './components/teacher/programming-curse/programming-curse.component';
import { PerfilTeacherComponent } from './components/teacher/perfil/perfil-teacher.component';
import { ConfigCurseComponent } from './components/teacher/config-curse/config-curse.component';
import { ConfigQualificationComponent } from './components/teacher/config-qualification/config-qualification.component';
import { ConfigAssistanceComponent } from './components/teacher/config-assistance/config-assistance.component';


// para cualquier ruta (path: ''), me redireccionara al registroUsuario
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'registro_alumno' },

  { path: 'inscripcion', component: InscriptionComponent },

  { path: 'registro_alumno', component: RegisterStudentComponent },
  { path: 'editar_alumno', component: EditStudentComponent },
  { path: 'listar_alumnos', component: ListStudentComponent },
  { path: 'perfil_alumno', component: PerfilComponent },

  { path: 'registro_docente', component: RegisterTeacherComponent },
  { path: 'programacion_curso', component: ProgrammingCurseComponent },
  { path: 'perfil_docente', component: PerfilTeacherComponent },
  { path: 'configurar_curso', component: ConfigCurseComponent },
  { path: 'configurar_calificacion', component: ConfigQualificationComponent },
  { path: 'configurar_asistencia', component: ConfigAssistanceComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'registro_alumno' },
];
