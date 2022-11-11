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

  form: any = {};
  loggedinUser:User;
  newUserInfo:User;

  constructor(private userService:UserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  getUser() {
    this.loggedinUser = this.tokenStorage.getLoggedInUser()
  }

  onSubmit(formdata:JSON) {
    console.log(formdata)
      this.userService.saveUser(formdata).subscribe(
        user => 
          this.newUserInfo = user);
  }

}
