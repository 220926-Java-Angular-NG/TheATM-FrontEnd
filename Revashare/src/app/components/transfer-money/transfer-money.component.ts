import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Account } from '../account';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  //todo: replace with getAllAccountsByUser
  @Input() accounts:Account[] = [];
  submitted = false;
  transaction:Transaction = {id:0,linkedTo:{"id":0}, to:{"id":0}, from:{"id":0}, description:"Transfer", amount:0, date_of_trans: ""};
  constructor(private transService:TransactionService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:JSON, confirmed:boolean):void{
    if (confirmed){
      this.transService.postTransaction(this.transaction, this.transaction.to.id);
    } else {
      let keys = Object.keys(formData)
      let values = Object.values(formData);
      for (let i=0; i<keys.length;i++){
        if (keys[i]=="from"){
          console.log(values[i])
          this.transaction.from = {id:values[i]};
        } else if (keys[i] == "to"){
          this.transaction.to = {id:values[i]};
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
