import { Routes } from '@angular/router';

// lo que importara dentro del layout base
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';


// para cualquier ruta (path: ''), me redireccionara al registroUsuario
export const ROUTES: Routes = [
  { path: 'registroAlumno', component: RegisterStudentComponent },
  { path: 'registroDocente', component: RegisterTeacherComponent },
  { path: '', pathMatch: 'full', redirectTo: 'registroAlumno' },
  { path: '**', pathMatch: 'full', redirectTo: 'registroAlumno' },
];
