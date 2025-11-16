import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../../_services/department-service';
import { Department } from '../../../_models/department';
import { TableModule } from 'primeng/table';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Student } from '../../../_models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  imports: [TableModule, ButtonModule, RouterModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
  standalone: true,
})
export class StudentList implements OnInit {
  stdList: Student[] = [];
  loading = false;
  error = '';

  constructor(private stdServ: StudentService, private router: Router) {}
  ngOnInit(): void {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = '';
    this.stdServ.getAll().subscribe({
      next: (data) => (this.stdList = data),
      error: () => (this.error = 'Failed to load students'),
      complete: () => (this.loading = false),
    });
  }
  editStudent(std: Student) {
    this.router.navigate(['/student-update', std.id]);
  }

  deleteStudent(std: Student) {
    if (confirm(`Are you sure you want to delete ${std.name}?`)) {
      this.loading = true;
      this.stdServ.delete(std.id).subscribe({
        next: () => this.load(),
        error: () => {
          this.error = 'Delete failed';
          this.loading = false;
        },
      });
    }
  }
}
