import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //todo: get accounts owned by the user
  userAccounts = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
