import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../account';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrls: ['./shopping-mall.component.css']
})
export class ShoppingMallComponent implements OnInit {

  loggedInUser={"id":0};
  shops:Account[] = [];
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops(){
    this.shops = this.accountService.shops;
    this.loggedInUser = this.accountService.loggedInUser;
  }

  buy(shop: Account) {
    let trans:Transaction;
    if ((shop.type)==="Job"){
      trans = {id:0, from:shop.id, to:this.loggedInUser.id, amount:250, date:"2022-11-06", description:shop.type}
    } else {
      let transAmount = (Math.floor(Math.random() * 25) + 7.95)*-1;
      trans = {id:0, from:shop.id, to:this.loggedInUser.id, amount:transAmount, date:"2022-11-06", description:shop.type}
    }
    this.accountService.postTransaction(trans);
  }
}
