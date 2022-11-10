import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthReponse } from '../authResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  authR?:AuthReponse;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.authResponse){
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => 
        this.authR = data
    );
    setTimeout(this.switchScreen,900);
  }

  switchScreen(){
    console.log(this.authR.token);
    if (this.authR){
      this.tokenStorage.setAuth(this.authR);
      window.location.replace("/dashboard");
    }
  }
}
