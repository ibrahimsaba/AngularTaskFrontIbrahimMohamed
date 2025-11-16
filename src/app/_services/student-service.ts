import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'https://localhost:7224/api/Students';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  add(d: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, d);
  }

  update(updatestd: Student): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${updatestd.id}`, updatestd);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
