import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName: new FormBuilder(""),
    lastName: new FormBuilder(""),
    email: new FormBuilder(""),
    password: new FormBuilder(""),
    phoneNum: new FormBuilder(""),
  });

  registerSubmitted() {
    console.log(this.registerForm);
  }

}