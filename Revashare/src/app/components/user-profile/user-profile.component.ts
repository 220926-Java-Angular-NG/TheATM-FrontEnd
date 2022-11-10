import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  loggedinUser:User;

  constructor(private userService:UserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.loggedinUser = this.tokenStorage.authResponse.user
  }

}
