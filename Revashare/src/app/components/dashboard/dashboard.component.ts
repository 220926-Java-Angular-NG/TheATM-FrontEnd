import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Account } from '../account';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //todo: get accounts owned by the user
  //accounts = this.accountService.accounts;
  choices:string[] = ["Checking", "Savings"]
  fetchedAccounts:Account[] = [];
  constructor(private accountService:AccountService, private tokenStorage:TokenStorageService) { }

  

  ngOnInit(): void {
  }

  getAccounts(){
    this.accountService.getAccounts().subscribe(accounts=>this.fetchedAccounts=accounts)
    console.log(this.fetchedAccounts);
  }

  onSubmit(accType:string) {
    let loggedInUser=this.tokenStorage.getLoggedInUser();
    let acc:Account = {id:0, type:accType, owner:loggedInUser};
    let accString = JSON.stringify(acc)
    this.accountService.createAccount(accString).subscribe(newAcc=>this.fetchedAccounts.push(newAcc));
  }
}
