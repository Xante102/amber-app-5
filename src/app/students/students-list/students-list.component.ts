import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  studentsList!: Student[];

  constructor(private studentsService: StudentsService) {}

  // get all students from service
  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    this.studentsService
      .getStudents()
      .subscribe((students) => (this.studentsList = students));
  }

  // delete student
  deleteStudent(id: string): void {
    this.studentsService.deleteStudent(id).subscribe({
      next: () => {
        console.log('Deleted student');
      },
      error: () => {
        console.log('Error occured deleting');
      },
      complete: () => {
        this.getStudentsList();
      },
    });
  }
}
