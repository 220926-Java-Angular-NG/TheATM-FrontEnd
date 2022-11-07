import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../components/account';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Transaction } from '../components/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //todo: pull from server
  accounts:Account[]=[{"id":5, "type":"Checking", "owner":2, "total":1234}, {"id":6, "type":"Savings", "owner":2, "total":3.50}].sort(function compareFn(a,b):number{return ((a.type>b.type)?1:- 1)} )
  shops:Account[] = [{"id":1, "type":"Job", "owner":1, "total":1234}, {"id":2, "type":"FlyNSwaggies", "owner":1, "total":1234}, {"id":3, "type":"MTGAllDay", "owner":1, "total":1234}, {"id":4, "type":"WeScream4IceCream", "owner":1, "total":1234}] 
  loggedInUser = {"id":2}
  private accountsURL = 'http://localhost:8080/accounts';
  // private transURL = 'api/transactions';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  

  
  ngOnInit():void{
  }
  
  constructor(private http: HttpClient, private messageService:MessageService) { }

  getAccounts(): Observable<Account[]>{
    
    return this.http.get<Account[]>(`${this.accountsURL}?id=${this.loggedInUser.id}&getSum=true`).pipe(
      tap(_ => this.log("fetched accounts")),
      catchError(this.handleError<Account[]>('getAccounts',[]))
    );

  }

  postTransaction(trans:Transaction){
    console.log(trans);
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

  
