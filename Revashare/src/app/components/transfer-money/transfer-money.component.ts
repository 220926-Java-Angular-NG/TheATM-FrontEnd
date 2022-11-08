import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  //todo: replace with getAllAccountsByUser
  accounts = [1,2,3];
  submitted = false;
  transaction:Transaction = {id:0, to:0, from:0, description:"Transfer", amount:0, date: ""};
  constructor(private transService:TransactionService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:JSON, confirmed:boolean):void{
    if (confirmed){
      this.transService.transfer(this.transaction);
    } else {
      let keys = Object.keys(formData)
      let values:number[] = Object.values(formData);
      for (let i=0; i<keys.length;i++){
        if (keys[i]=="from"){
          console.log(values[i])
          this.transaction.from = values[i];
        } else if (keys[i] == "to"){
          this.transaction.to = values[i];
        } else if (keys[i] == "amount"){
          this.transaction.amount = values[i];
        }
      }
    }
  }

  changeSubmitted(){
    if (this.submitted){
      this.submitted=false;
    } else {
      this.submitted = true;
    }
  }

}
