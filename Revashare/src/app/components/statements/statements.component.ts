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
  @Input() allAccounts:number[] = [];
  sendTrans={sendTo:0, sendFrom:0,sendAmount:0, sendDesc:""};
  sendMoney = false;
  transactions: Transaction[];
  @Input() acc?:Account;
  inc:Transaction[]=[];

  constructor(private transactionService:TransactionService, 
    private accountService:AccountService) { }

  ngOnInit(): void {
  }

  getTransactions(){
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
    let newTrans:Transaction = {id:0, linkedTo:this.acc, from:this.acc, to:{id:0}, amount:0, description:"", date_of_trans:"2022-11-11"};
    let keys = Object.keys(formData)
    let values = Object.values(formData);
      for (let i=0; i<keys.length;i++){
        if (keys[i]=="sendTo"){
          newTrans.to.id= values[i];
        } else if (keys[i] == "sendDesc"){
          newTrans.description = values[i];
        } else if (keys[i] == "sendAmount"){
          newTrans.amount = values[i];
        }
      }
    this.transactionService.postTransaction(newTrans).subscribe(
      transs=>this.inc=transs)
  }
}