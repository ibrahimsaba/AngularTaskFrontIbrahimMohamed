import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './models/student';

@Pipe({
  name: 'studentsearch',
})
export class StudentsearchPipe implements PipeTransform {
  transform(students: Student[], search: string): Student[] {
    if (!search) return students;
    search = search.toLowerCase();
    return students.filter((student) => student.name.toLocaleLowerCase().includes(search));
  }
}
