// import { Component, OnInit } from '@angular/core';
// import { StudentsService } from '../../services/students.service';
// import { ActivatedRoute, Router } from '@angular/router';


// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.css']
// })
// export class AddStudentComponent implements OnInit {
//   addStudent: any;

//   constructor(private routes: Router, private studentsService: StudentsService,  private url: ActivatedRoute) {
//     this.addStudent = ({
//       name: '',
//       email:'',
//       cohort: '',
//       phoneNumber: ''
//     })

//    }

//   ngOnInit(): void {

//   }


//   onSubmit(){
//     // add a student
//     console.log(this.addStudent.value)
//     this.studentsService.addStudent(this.addStudent.value).subscribe((student:any)=>{
//       console.log(student);

//       // redirect to homepage after added
//       this.routes.navigate(['/students'])
//     })
//   }






// }


// import { Component, OnInit } from '@angular/core';
// import { StudentsService } from '../../services/students.service';

// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.css']
// })
// export class AddStudentComponent implements OnInit {

//   constructor(private studentsService: StudentsService) { }

//   ngOnInit(): void {
//   }

//   addStudent(body:object):void{
//   this.studentsService.addStudent(body).subscribe({
//     next: (res) => {
//       console.log(`Body passed ${JSON.stringify(res)}`);
//     },
//     error: () => {
//       console.log(`Error occured adding student`);
//     },
//     complete: () =>{
//       alert(`Student Added`);
//     }
//   }

//   )

//   }

// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;

  constructor(private fb: FormBuilder, private routes: Router, private studentsService: StudentsService) {
    this.addStudent = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cohort: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // add a student
    console.log(this.addStudent.value)
    this.studentsService.addStudent(this.addStudent.value).subscribe((data:any)=>{
      console.log(data);

      // redirect to homepage after added
      this.routes.navigate(['/student-list'])
    })
  }
}
