import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Account } from '../components/account';
import { Transaction } from '../components/transaction';
import { User } from '../components/user';
import { AccountService } from './account.service';
import { MessageService } from './message.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private authURL = 'http://localhost:8080/auth'
  private transURL = 'http://localhost:8080/transactions';
  constructor(
    private tokenStorage:TokenStorageService, private messageService:MessageService,
  private http:HttpClient) { }

  transfer(trans:Transaction){
    console.log(trans);
  }

  postTransaction(data:Transaction){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    let dataString = JSON.stringify(data);
    return this.http.post<Transaction[]>(`${this.transURL}  `, dataString, httpOptions).pipe(
      catchError(this.handleError<Transaction[]>('postTransaction',[]))
    );
  }

  getTransactions(acc:Account):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    return this.http.get<Transaction[]>(`${this.transURL}/linkedTo/${acc.id}`, httpOptions).pipe(
      catchError(this.handleError<Transaction[]>('getTransactions',[]))
    );

  }

  postAuthTransaction(trans:Transaction):Observable<any>{
    let transString:String = JSON.stringify(trans);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.tokenStorage.getToken()}`
      })
    }
    console.log(transString)
    return this.http.post<Transaction[]>(`${this.authURL}/transaction`,transString, httpOptions).pipe(
      catchError(this.handleError<Transaction[]>('getAccounts', []))
    );
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
