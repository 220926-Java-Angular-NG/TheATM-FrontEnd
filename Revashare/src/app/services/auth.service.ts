import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthReponse } from '../components/authResponse';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }


  login(credentials: { email: any; password: any; }) {
    let loginInfo = JSON.stringify(credentials)
    console.log(loginInfo)
    return this.http.post<AuthReponse>(AUTH_API+'login', loginInfo, httpOptions);
  }
}
