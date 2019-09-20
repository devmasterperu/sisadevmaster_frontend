import { Routes } from '@angular/router';

// lo que importara dentro del layout base
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ProgrammingCurseComponent } from './components/programming-curse/programming-curse.component';
import { CurseComponent } from './components/curse/curse.component';

// para cualquier ruta (path: ''), me redireccionara al registroUsuario
export const ROUTES: Routes = [
  { path: 'registro_alumno', component: RegisterStudentComponent },
  { path: 'registro_docente', component: RegisterTeacherComponent },
  { path: 'listar_alumnos', component: ListStudentComponent },
  { path: 'programacion_curso', component: ProgrammingCurseComponent },
  { path: 'cursos', component: CurseComponent },
  { path: '', pathMatch: 'full', redirectTo: 'registro_alumno' },
  { path: '**', pathMatch: 'full', redirectTo: 'registro_alumno' },
];
