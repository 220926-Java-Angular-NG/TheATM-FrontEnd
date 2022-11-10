import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../components/account';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Transaction } from '../components/transaction';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //todo: pull from server
  //accounts:Account[]=[{"id":5, "type":"Checking", "owner":2, "total":1234}, {"id":6, "type":"Savings", "owner":2, "total":3.50}].sort(function compareFn(a,b):number{return ((a.type>b.type)?1:- 1)} )
  loggedInUser = this.tokenStorage.authResponse.user
  private accountsURL = 'http://localhost:8080/accounts';
  private authURL = 'http://localhost:8080/auth'
  // private transURL = 'api/transactions';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${this.tokenStorage.authResponse.token}`
    })
  }
  

  
  ngOnInit():void{
  }
  
  constructor(private http: HttpClient, 
    private messageService:MessageService,
    private tokenStorage:TokenStorageService) { }

  getAccounts(){
    return this.http.get<Account[]>(`${this.accountsURL}?id=${this.loggedInUser.id}&getSum=true`).pipe(
      tap(_ => this.log("fetched accounts")),
      catchError(this.handleError<Account[]>('getAccounts',[]))
    );

  }

  getShops(){
    return this.http.get<Account[]>(`${this.authURL}/shops`).pipe(
      catchError(this.handleError<Account[]>('getAccounts', []))
      );
      
  }

  createAccount(newAcc: string):Observable<any> {
    return this.http.post<Account>(`${this.accountsURL}`,newAcc,this.httpOptions).pipe(
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

  
