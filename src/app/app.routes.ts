import { Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home';
import { DepartmentList } from './component/department/department-list/department-list';
import { Departmentadd } from './component/department/departmentadd/departmentadd';
import { Departmentupdate } from './component/department/departmentupdate/departmentupdate';
import { StudentList } from './component/student/student-list/student-list';
import { Studentadd } from './component/student/studentadd/studentadd';
import { Studentupdate } from './component/student/studentupdate/studentupdate';
import { Students } from './students/students';
import { LoginComponent } from './components/login/login';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'department', component: DepartmentList, canActivate: [authGuard] },
  { path: 'department/add', component: Departmentadd, canActivate: [authGuard] },
  { path: 'department-update/:id', component: Departmentupdate, canActivate: [authGuard] },
  { path: 'student', component: StudentList, canActivate: [authGuard] },
  { path: 'student/add', component: Studentadd, canActivate: [authGuard] },
  { path: 'student-update/:id', component: Studentupdate, canActivate: [authGuard] },
  { path: 'students', component: Students, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
