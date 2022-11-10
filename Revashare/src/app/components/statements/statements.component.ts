import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {

  transaction: Transaction;
  constructor() { }

  ngOnInit(): void {
  }

}
