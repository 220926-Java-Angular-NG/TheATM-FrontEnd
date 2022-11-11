import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrls: ['./shopping-mall.component.css']
})
export class ShoppingMallComponent implements OnInit {
  loggedInUser=this.tokenStorage.getLoggedInUser();
  shops:Account[] = [];
  transs:Transaction[] = [];
  @Input() acc?:Account
  constructor(private accountService:AccountService, 
    private transactionService:TransactionService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops(){
    this.accountService.getShops().subscribe(shops=>this.shops=shops);
  }

  buy(shop: Account) {
    //change "to" account to the logged in user's account -> add to account transaction page
    let trans:Transaction;
    if ((shop.type)==="Job"){
      trans = {id:0, linkedTo:{"id":1}, from:{"id":shop.id}, to:this.acc, amount:250, date_of_trans:"2022-11-06", description:shop.type}
    } else {
      let transAmount = (Math.floor(Math.random() * 25) + 7.95)*-1;
      trans = {id:0, linkedTo:{"id":1}, from:{"id":shop.id}, to:this.acc, amount:transAmount, date_of_trans:"2022-11-06", description:shop.type}
    }
    this.transactionService.postAuthTransaction(trans).subscribe(transs=>this.transs=transs)

  }
}
