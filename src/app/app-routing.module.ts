import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-list', component: StudentsListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'view-student/:id', component: ViewStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
