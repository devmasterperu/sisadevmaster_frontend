import { Routes } from '@angular/router';  /* 👶🏼 */

import { ListComponent } from './components/students/list/list.component';
import { AgregarComponent } from './components/students/agregar/agregar.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ListComponent },
  { path: 'agregar', component: AgregarComponent }
];
