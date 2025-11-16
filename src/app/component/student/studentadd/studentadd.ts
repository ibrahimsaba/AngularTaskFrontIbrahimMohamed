import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { Student } from '../../../_models/student';
import { StudentService } from '../../../services/student.service';
@Component({
  selector: 'app-studentadd',
  imports: [FormsModule, InputTextModule, SelectModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './studentadd.html',
  styleUrl: './studentadd.css',
})
export class Studentadd {
  nstd: Student = new Student(0, '', 0);
  loading = false;
  error = '';

  constructor(private stdServ: StudentService, private router: Router) {}

  save() {
    if (!this.nstd.name || !this.nstd.age) {
      return;
    }
    this.loading = true;
    this.error = '';
    this.stdServ.add(this.nstd).subscribe({
      next: () => {
        this.router.navigate(['/student']);
        this.nstd = new Student(0, '', 0);
      },
      error: () => {
        this.error = 'Failed to add student';
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }
}
