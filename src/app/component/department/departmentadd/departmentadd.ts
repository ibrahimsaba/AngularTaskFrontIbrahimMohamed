import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { trigger, style, animate, transition } from '@angular/animations';
import { DepartmentService } from '../../../services/department.service';
import { Department } from '../../../_models/department';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-departmentadd',
  standalone: true,
  imports: [FormsModule, InputTextModule, SelectModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './departmentadd.html',
  styleUrls: ['./departmentadd.css'],
  animations: [
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class Departmentadd {
  ndept: Department = new Department(0, '', 'Mansoura');

  cities = [{ name: 'Mansoura' }, { name: 'Alex' }, { name: 'Zagazig' }, { name: 'Smart' }];

  constructor(private deptServ: DepartmentService, private router: Router) {}

  save() {
    if (!this.ndept.name || !this.ndept.location) {
      return;
    }
    this.deptServ.add(this.ndept).subscribe({
      next: () => {
        this.router.navigate(['/department']);
        this.ndept = new Department(0, '', 'Mansoura');
      },
      error: () => {
        // keep design: no alerts, just no-op or could set an internal error var if exists
      },
    });
  }
}
