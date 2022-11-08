import { Injectable } from '@angular/core';
import { Transaction } from '../components/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  transfer(trans:Transaction){
    console.log(trans);
  }
}
