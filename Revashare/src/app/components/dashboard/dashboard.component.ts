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
  fetchedAccounts:Account[] = [];
  constructor(private accountService:AccountService) { }


  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAccounts().subscribe(accounts=>this.fetchedAccounts=accounts)
    console.log(this.fetchedAccounts)
  }
}
