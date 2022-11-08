import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  isThemeDark: Observable<boolean>;
  
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  toggleDarkTheme(checked:any) {
    this.themeService.setDarkTheme(checked.checked);
    console.log("checked >", checked.checked);
  }

  registerForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    phoneNum: new FormControl(""),
  });

  registerSubmitted() {
    console.log(this.registerForm);
  }

}