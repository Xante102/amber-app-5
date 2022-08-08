import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  studentId: string = '';
  studentDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((student) => {
      this.studentId = student['id'];
      if (this.studentId) {
        this.studentService.viewStudent(this.studentId).subscribe((student) => {
          this.studentDetails = student;
        });
      }
    });
  }
}
