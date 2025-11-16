import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Student } from '../../../_models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-studentupdate',
  imports: [FormsModule, InputTextModule, SelectModule, ButtonModule, CardModule],
  templateUrl: './studentupdate.html',
  styleUrl: './studentupdate.css',
})
export class Studentupdate implements OnInit {
  nstd!: Student;
  loading = false;
  error = '';

  constructor(
    private stdServe: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/student']);
      return;
    }
    this.loading = true;
    this.error = '';
    this.stdServe.getById(id).subscribe({
      next: (std) => (this.nstd = std),
      error: () => {
        this.error = 'Student not found';
        this.router.navigate(['/student']);
      },
      complete: () => (this.loading = false),
    });
  }
  update() {
    if (!this.nstd.id || !this.nstd.name || !this.nstd.age) {
      return;
    }
    this.loading = true;
    this.error = '';
    this.stdServe.update(this.nstd).subscribe({
      next: () => this.router.navigate(['/student']),
      error: () => {
        this.error = 'Update failed';
        this.loading = false;
      },
    });
  }
}
