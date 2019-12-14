import { Routes } from '@angular/router';

import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
/* Home */
import { HomeComponent } from './components/home/home.component';
/* Administrador */
import { InscriptionComponent } from './components/admin/inscription/inscription.component';
import { PerfilAdminComponent } from './components/admin/perfill/perfil-admin.component';
/* Estudiante */
import { RegisterStudentComponent } from './components/student/register-student/register-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { PerfilComponent } from './components/student/perfil/perfil.component';
/* Docente */
import { RegisterTeacherComponent } from './components/teacher/register-teacher/register-teacher.component';
import { UpdateTeacherComponent } from './components/teacher/update-teacher/update-teacher.component';
import { ProgrammingCurseComponent } from './components/admin/programming-curse/programming-curse.component';
import { PerfilTeacherComponent } from './components/teacher/perfil/perfil-teacher.component';
import { ConfigCourseComponent } from './components/teacher/config-course/config-course.component';
import { ConfigQualificationComponent } from './components/teacher/config-qualification/config-qualification.component';
import { ConfigAssistanceComponent } from './components/teacher/config-assistance/config-assistance.component';
import { CourseComponent } from './components/teacher/course/course.component';

export const ROUTES: Routes = [
    // Rutas con menos caracteres innecesario: Redirigir al Login
    { path: '', pathMatch: 'full', redirectTo: 'login' },

    // Ruta para Home
    { path: 'login', component: HomeComponent },

    // Rutas para Administrador
    {
    path: 'administrador',
    component: LayoutDashboardComponent,
    children: [
            { path: '', component: PerfilAdminComponent },
            { path: 'inscripcion', component: InscriptionComponent },
            { path: 'registro_docente', component: RegisterTeacherComponent },
            { path: 'registro_estudiante', component: RegisterStudentComponent },
            { path: 'programacion_curso', component: ProgrammingCurseComponent },
            { path: 'listar_alumnos', component: ListStudentComponent },
            { path: 'editar_alumno', component: EditStudentComponent },
            { path: 'actualizar_docente', component: UpdateTeacherComponent },
        ]
    },
    // Rutas para Estudiantes
    {
    path: 'estudiante',
    component: LayoutDashboardComponent,
    children: [
        { path: '', component: PerfilComponent },
    ]
    },
    // Rutas para Docentes
    {
    path: 'docente',
    component: LayoutDashboardComponent,
    children: [
        { path: '', component: PerfilTeacherComponent },
        // { path: 'configurar_calificacion', component: ConfigQualificationComponent },
        { path: 'curso/:id/configurar_calificacion', component: ConfigQualificationComponent },
        // { path: 'configurar_asistencia', component: ConfigAssistanceComponent },
        { path: 'curso/:id/configurar_asistencia', component: ConfigAssistanceComponent },
        { path: 'configurar_curso', component: ConfigCourseComponent },
        { path: 'curso/:id', component: CourseComponent }
    ]
    },
    // Rutas con más caracteres innecesario: Redirigir al Login
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
