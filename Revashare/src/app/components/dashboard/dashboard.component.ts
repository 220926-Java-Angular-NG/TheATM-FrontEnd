import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //todo: get accounts owned by the user
  accounts = this.accountService.accounts;
  loggedInUser = this.accountService.loggedInUser;
  choices:string[] = ["Checking", "Savings"]
  fetchedAccounts:Account[] = [];
  constructor(private accountService:AccountService) { }


  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    //this.accountService.getAccounts().subscribe(accounts=>this.fetchedAccounts=accounts)
    //console.log(this.fetchedAccounts);
  }

  onSubmit(accType:string) {
    let acc:Account = {id:0, type:accType, owner:this.loggedInUser};
    this.accountService.createAccount(JSON.stringify(acc)).subscribe(acc=>this.accounts.push(acc));
  }
}
