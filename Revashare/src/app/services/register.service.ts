import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../components/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private authURL = 'http://localhost:8080/auth'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }



  createUser(user: User): Observable<User> {
    console.log(user)
    let userString:string = JSON.stringify(user)
    return this.http.post<User>(`${this.authURL}/register`, userString, this.httpOptions);
  }

  // postUser(user: User): Observable<HttpResponse<User>> {
  //   let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post<Users>(this.url, user, {
  //     headers: httpHeaders,
  //     observe: 'response'
  //   });
  // }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.url);
  // }

}
