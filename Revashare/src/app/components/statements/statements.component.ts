import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
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
  allAccounts:number[] = [];
  sendTrans={sendTo:0, sendFrom:0,sendAmount:0, sendDesc:""};
  sendMoney = false;
  transactions: Transaction[];
  @Input() acc?:Account;

  constructor(private transactionService:TransactionService, 
    private accountService:AccountService) { }

  ngOnInit(): void {
  }

  getTransactions(){
    this.accountService.getAccountIds().subscribe(ids=>this.allAccounts=ids)
    this.transactionService.getTransactions(this.acc).subscribe(transs=>this.transactions=transs);
  }

  setSend() {
    if (this.sendMoney){
      this.sendMoney=false;
    } else {
      this.sendMoney=true;
    }
  }
  
  onSubmit(formData:JSON){
    let newTrans:Transaction;
    newTrans.from = this.acc;
    let keys = Object.keys(formData)
    let values = Object.values(formData);
      for (let i=0; i<keys.length;i++){
        if (keys[i]=="sendTo"){
          newTrans.to = {id:values[i]};
        } else if (keys[i] == "sendDesc"){
          newTrans.description = values[i];
        } else if (keys[i] == "sendAmount"){
          newTrans.amount = values[i];
        }
      }

    this.transactionService.postTransaction(newTrans,this.acc.id).subscribe(
      transs=>{for(let trans of transs){
        this.transactions.push(trans)}}
      )
  }
}