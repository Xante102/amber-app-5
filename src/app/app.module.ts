import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentsService } from './services/students.service';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { SearchAccountComponent } from './accounts/search-account/search-account.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { ViewAccountComponent } from './accounts/view-account/view-account.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentComponent,
    EditStudentComponent,
    HomeComponent,
    ViewStudentComponent,
    AddAccountComponent,
    EditAccountComponent,
    SearchAccountComponent,
    AccountsListComponent,
    ViewAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
