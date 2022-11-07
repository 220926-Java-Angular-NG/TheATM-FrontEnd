import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  //todo: replace with getAllAccountsByUser
  accounts = [1,2,3];
  transaction:Transaction = {id:0, to:0, from:0, description:"Transfer", amount:0, date: ""};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData:JSON):void{
    //send to DB
    //add confirmation screen
    console.log(formData);
  }

}
