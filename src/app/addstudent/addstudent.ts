import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  imports: [CommonModule, FormsModule],
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {
  id: number = 0;
  name: string = '';
  age: number = 0;
  @Output() studentadd = new EventEmitter<{ id: number; name: string; age: number }>();
  addStudent() {
    this.studentadd.emit({ id: this.id, name: this.name, age: this.age });
    this.id = 0;
    this.name = '';
    this.age = 0;
  }
}
