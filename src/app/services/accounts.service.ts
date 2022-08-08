import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of, Observable } from 'rxjs';
import { Account } from '../models/accounts.model';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {

   REST_API = 'http://localhost:4000/accounts';

  constructor(private http: HttpClient) {}

getStudents(): Observable<Account[]> {

  return this.http.get<Account[]>(this.REST_API).pipe(
          tap((accountsList) =>
             console.log(`accounts : ${JSON.stringify(accountsList)}`)
          ),
           catchError((_err) => of([]))
      );

}

viewAccount(id: string): Observable<Account> {
      return this.http.get<Account>(this.REST_API).pipe(
      tap((viewedAccount) =>
        console.log(`account: ${JSON.stringify(viewedAccount)}`)
      ),
      catchError((_err) => of())
    );

}

addAccount(body:object): Observable<Account>{
      return this.http.post<Account>(this.REST_API, body).pipe(
      tap((addedAccount) =>
        console.log(`account: ${JSON.stringify(addedAccount)}`)
      ),
      catchError((_err) => of())
    );

}

editAccount(id: string, body: object): Observable<Account>{
      return this.http.put<Account>(this.REST_API, body).pipe(
      tap((updatedAccount) =>
        console.log(`account: ${JSON.stringify(updatedAccount)}`)
      ),
      catchError((_err) => of())
    );

}

deleteAccocunt(id: string): Observable<Account>{
  return this.http.get<Account>(this.REST_API).pipe(
    tap((deletedAccount) =>
      console.log(`account: ${JSON.stringify(deletedAccount)}`)
    ),
    catchError((_err) => of())
  );
}

searchAccount(id: string): Observable<Account>{
  return this.http.get<Account>(this.REST_API).pipe(
  tap((searchedAccount) =>
    console.log(`account: ${JSON.stringify(searchedAccount)}`)
  ),
  catchError((_err) => of())
);

}

}


  // Methods to communicate with the backend API
