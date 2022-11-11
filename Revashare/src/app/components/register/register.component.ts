import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/components/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user:User
  @Input() needToRegister:boolean;
  
  constructor(
  private registerService:RegisterService) { }

  ngOnInit() {
  }



  registerForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    phoneNum: new FormControl(""),
  });



  registerSubmitted() {
    let newUser:User = {id:0, firstname: this.registerForm.value.firstName, lastname: this.registerForm.value.lastName, email: this.registerForm.value.email,
    pass_word: this.registerForm.value.password, phoneNum: this.registerForm.value.phoneNum}
    
    this.registerService.createUser(newUser).subscribe(user => this.user = user);
    
    console.log(this.user);
  }

}