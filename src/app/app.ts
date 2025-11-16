import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeComp } from './prime-comp/prime-comp';
import { Students } from './students/students';
import { DepartmentList } from './component/department/department-list/department-list';
import { Departmentadd } from './component/department/departmentadd/departmentadd';
import { Header } from './components/core/header/header';
import { HomeComponent } from './components/core/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DepartmentList, Departmentadd, Header, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('App');
}
