import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {

  transactions: Transaction[];
  @Input() acc?:Account;

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
  }

  getTransactions(){
    
    this.transactionService.getTransactions(this.acc).subscribe(transs=>this.transactions=transs);
    console.log("getTransactions - "+ this.transactions[0])
  }
}
