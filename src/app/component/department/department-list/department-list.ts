import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { Department } from '../../../_models/department';
import { TableModule } from 'primeng/table';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-department-list',
  imports: [TableModule, ButtonModule, RouterModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css',
  standalone: true,
})
export class DepartmentList implements OnInit {
  deptList: Department[] = [];
  loading = false;
  error = '';

  constructor(private deptServ: DepartmentService, private router: Router) {}
  ngOnInit(): void {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = '';
    this.deptServ.getAll().subscribe({
      next: (data) => (this.deptList = data),
      error: () => (this.error = 'Failed to load departments'),
      complete: () => (this.loading = false),
    });
  }
  editDepartment(dept: Department) {
    this.router.navigate(['/department-update', dept.id]);
  }

  deleteDepartment(dept: Department) {
    if (confirm(`Are you sure you want to delete ${dept.name}?`)) {
      this.loading = true;
      this.deptServ.delete(dept.id).subscribe({
        next: () => this.load(),
        error: () => {
          this.error = 'Delete failed';
          this.loading = false;
        },
      });
    }
  }
}
