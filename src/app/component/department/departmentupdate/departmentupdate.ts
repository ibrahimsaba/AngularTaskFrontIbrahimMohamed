import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { trigger, style, animate, transition } from '@angular/animations';
import { DepartmentService } from '../../../services/department.service';
import { Department } from '../../../_models/department';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule, InputTextModule, SelectModule, ButtonModule, CardModule],
  templateUrl: './departmentupdate.html',
  styleUrls: ['./departmentupdate.css'],
  animations: [
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class Departmentupdate implements OnInit {
  ndept!: Department;
  cities = [{ name: 'Mansoura' }, { name: 'Alex' }, { name: 'Zagazig' }, { name: 'Smart' }];
  loading = false;
  error = '';

  constructor(
    private deptServ: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/department']);
      return;
    }
    this.loading = true;
    this.error = '';
    this.deptServ.getById(id).subscribe({
      next: (dept) => (this.ndept = dept),
      error: () => {
        this.error = 'Department not found';
        this.router.navigate(['/department']);
      },
      complete: () => (this.loading = false),
    });
  }
  update() {
    if (!this.ndept.id || !this.ndept.name || !this.ndept.location) {
      return;
    }
    this.loading = true;
    this.error = '';
    this.deptServ.update(this.ndept).subscribe({
      next: () => this.router.navigate(['/department']),
      error: () => {
        this.error = 'Update failed';
        this.loading = false;
      },
    });
  }
}
