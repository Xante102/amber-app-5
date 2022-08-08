import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service'

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  addStudent: any;
  id: any;
  constructor(private fb: FormBuilder,
    private routes:Router,
    private studentsService: StudentsService,
    private url: ActivatedRoute
    ) {
      this.addStudent = fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        cohort: ['', Validators.required],
        phoneNumber: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.viewStudent();
  }

  viewStudent() {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.studentsService.viewStudent(this.id).subscribe((data) =>{
      this.addStudent.patchValue(data);
      console.log(data)
    })
  }

  onSubmit() {
    this.id = this.url.snapshot.params['id'];
    this.studentsService.editStudent({...this.addStudent.value, _id:this.id}).subscribe((data:any)=> {
      console.log(data);
      this.routes.navigate(['/student-list'])
    })
    console.log(this.addStudent.value)
  }

}
