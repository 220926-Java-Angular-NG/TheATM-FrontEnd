import { Component, OnInit } from '@angular/core';
import {UserProfile} from '../userProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  show: boolean = false;
  passWordVis: string = "password"


  constructor() { }

  ngOnInit(): void {
  }

  passToggle():void
  {
    this.show = !this.show;
    if(this.show)
    {
      this.passWordVis = "text";
      console.log("This should show the password")
    }
    else
    {
      this.passWordVis = "password"
      console.log("This should hide the password")  
    }
           
  }


}
