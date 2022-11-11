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
  @Input() accountIds:number[] =[];
  @Input() acc:Account;
  submitted = false;
  transaction:Transaction = {id:0, linkedTo:{"id":0}, from:{"id":0}, to:{"id":0}, amount:0, date_of_trans:"", description:""};
  newTransTo:number;
  newTransFrom:number;
  newTransAmount:number;
  constructor(private transService:TransactionService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:JSON, confirmed:boolean):void{
    console.log("FormData:")
    console.log(formData)
    if (confirmed){
      let newTrans:Transaction = {id:0, linkedTo:this.acc, from:{id:this.newTransFrom},
      to:{id:this.newTransTo},
      amount:this.newTransAmount,
      description:"Transfer",
      date_of_trans:"2022-11-11"}
      this.transService.postTransaction(newTrans).subscribe(transs=>this.transaction=transs[1]);
    } else {
      let keys = Object.keys(formData)
      let values = Object.values(formData);
      for (let i=0; i<keys.length;i++){
        if (keys[i]=="from"){
          console.log(values[i])
          this.newTransFrom = values[i]
        } else if (keys[i] == "to"){
          this.newTransTo = values[i]
        } else if (keys[i] == "amount"){
          this.newTransAmount = values[i]
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
