import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Addstudent } from '../addstudent/addstudent';
import { StudentsearchPipe } from '../studentsearch-pipe';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule, CommonModule, Addstudent, StudentsearchPipe],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students: Student[] = [];
  loading = false;
  error = '';

  constructor(private stdServ: StudentService) {
    this.load();
  }
  handelAddedStudent(event: { id: number; name: string; age: number }) {
    // Ignore client-entered ID when calling API; let backend assign ID
    const payload = { name: event.name, age: event.age } as any;
    this.loading = true;
    this.error = '';
    this.stdServ.add(payload).subscribe({
      next: () => this.load(),
      error: () => {
        this.error = 'Failed to add student';
        this.loading = false;
      },
    });
  }
  searchText: string = '';
  trackById(index: number, student: Student) {
    return student.id;
  }
  private load() {
    this.loading = true;
    this.error = '';
    this.stdServ.getAll().subscribe({
      next: (data) => (this.students = data),
      error: () => (this.error = 'Failed to load students'),
      complete: () => (this.loading = false),
    });
  }
}
