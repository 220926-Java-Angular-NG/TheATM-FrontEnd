import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../components/account';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Transaction } from '../components/transaction';
import { TokenStorageService } from './token-storage.service';
import { User } from '../components/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //todo: pull from server
  //accounts:Account[]=[{"id":5, "type":"Checking", "owner":2, "total":1234}, {"id":6, "type":"Savings", "owner":2, "total":3.50}].sort(function compareFn(a,b):number{return ((a.type>b.type)?1:- 1)} )
  private accountsURL = 'http://localhost:8080/accounts';
  private authURL = 'http://localhost:8080/auth'
  // private transURL = 'api/transactions';
  
  ngOnInit():void{
  }
  
  constructor(private http: HttpClient, 
    private messageService:MessageService,
    private tokenStorage:TokenStorageService) { }

  getAccounts():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    let loggedInUser = this.tokenStorage.getLoggedInUser()
    return this.http.get<Account[]>(`${this.accountsURL}?id=${loggedInUser.id}&getSum=true`,httpOptions).pipe(
      catchError(this.handleError<Account[]>('getAccounts',[]))
    );

  }

  getAccountIds():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    return this.http.get<number[]>(`${this.accountsURL}/ids`,httpOptions).pipe(
      catchError(this.handleError<number[]>('getAccountIds',[]))
    );

  }

  getShops():Observable<any>{
    return this.http.get<Account[]>(`${this.authURL}/shops`).pipe(
      catchError(this.handleError<Account[]>('getAccounts', []))
      );
      
  }

  createAccount(newAcc: string):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    return this.http.post<Account>(`${this.accountsURL}`,newAcc, httpOptions).pipe(
      catchError(this.handleError('create account'))
    )
  }

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
    this.messageService.add(`AccountService: ${message}`);
  }
}

  
