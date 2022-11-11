import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  need = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  authR?:AuthReponse;

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router:Router) { }

  ngOnInit() {
    this.tokenStorage.signOut();
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => 
        this.authR = data
    );
    setTimeout(()=>this.switchScreen(this.authR),900);
  }

  switchScreen(authRes:AuthReponse){
    console.log(authRes);
    if(authRes){
      localStorage.setItem("auth",  JSON.stringify(authRes));
      this.isLoggedIn=true;
    }

  }
  setNeed(){
    if(this.need){
      this.need=false;
    }else{
      this.need = true;
    }
  }
}
