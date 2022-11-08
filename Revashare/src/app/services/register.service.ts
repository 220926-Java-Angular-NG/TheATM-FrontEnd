import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../components/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  createUser(user: User): Observable<User> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<User>(this.url, user, options);
  }

  postUser(user: User): Observable<HttpResponse<User>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Users>(this.url, user, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

}
