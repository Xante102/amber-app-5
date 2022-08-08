import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, of, Observable } from 'rxjs';
import { Student } from '../models/students.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  // Nodejs API
  private REST_API = 'http://localhost:4000/students';

  //  Set Http Header
  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   }
  constructor(private http: HttpClient) {}

getStudents(): Observable<Student[]> {

  return this.http.get<Student[]>(this.REST_API, this.HTTP_HEADER).pipe(
          tap((studentsList) =>
             console.log(`students : ${JSON.stringify(studentsList)}`)
          ),
           catchError(err => of([]))
      );

}



viewStudent(id: string): Observable<Student | any> {
      return this.http.get<Student>(`${this.REST_API}/${id}`, this.HTTP_HEADER).pipe(
      tap((viewedStudent) =>
        console.log(`student: ${JSON.stringify(viewedStudent)}`)
      ),
      catchError(err => of(new Student()))
    );

}

addStudent(student:Student): Observable<Student>{
      return this.http.post<Student>(`${this.REST_API}/create`, student, this.HTTP_HEADER).pipe(
      tap((addedStudent) =>
        console.log(`student: ${JSON.stringify(addedStudent)}`)
      ),
      catchError(err => of(new Student()))
    );

}

editStudent(student: Student): Observable<Student>{
      return this.http.put<Student>(`${this.REST_API}/${student._id}`, student, this.HTTP_HEADER).pipe(
      tap((updatedStudent) =>
        console.log(`student: ${JSON.stringify(updatedStudent)}`)
      ),
      catchError(err => of(new Student()))
    );

}

deleteStudent(id: string): Observable<Student>{
  return this.http.delete<Student>(`${this.REST_API}/${id}`, this.HTTP_HEADER).pipe(
    tap((deletedStudent) =>
      console.log(`student: ${JSON.stringify(deletedStudent)}`)
    ),
    catchError(err => of(new Student()))
    );
}

// searchStudent(id: string): Observable<Student>{
//   return this.http.get<Student>(this.REST_API).pipe(
//   tap((searchedStudent) =>
//     console.log(`student: ${JSON.stringify(searchedStudent)}`)
//   ),
//   catchError(err => of(new Student()))
//   );

// }

}

  // Methods to communicate with the backend API


