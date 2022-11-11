import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { User } from '../components/user';
import { MessageService } from './message.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
     'Content-Type':'application/json'
    })
  }
  authURL = "http://localhost:8080/auth/"

  userURL = "http://localhost:8080/users/"

  constructor(private http: HttpClient, private messageService:MessageService, private tokenStorage:TokenStorageService) { }


  private handleError<T>(operation = 'operation', result?:T){
    return (error:any):Observable<T> =>{
      //todo: send the error to a remote logging infrastructure
      console.log(error);
      //display the error to the user
      this.log(`${operation} failed: ${error.message}`)
      //let the app keep running
      return of(result as T);

    }
  }
  private log(message:string){
    this.messageService.add(`UserService: ${message}`);
  }

  saveUser(formdata:JSON) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    let userString = JSON.stringify(formdata);
    return this.http.post<User>(`${this.userURL}update`, userString, httpOptions);
  }
}
