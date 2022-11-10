import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthReponse } from '../components/authResponse';
import { User } from '../components/user';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
    authResponse:AuthReponse;
    httpOptions;
    constructor() { }

    isLoggedIn(){
      return localStorage.getItem("auth")
    }

    getLoggedInUser():User{
      if(this.isLoggedIn()){
        this.authResponse=JSON.parse(localStorage.getItem("auth"));
        return this.authResponse.user;
      }
      return undefined;
    }

    getToken():string{
      if(this.isLoggedIn()){
        this.authResponse=JSON.parse(localStorage.getItem("auth"));
        return this.authResponse.token;
      }
      return "";
    }

    getHeaders():any{
      if(this.isLoggedIn()){
        return localStorage.getItem("headers");
        
      }
      return undefined
    }

    signOut() {
      localStorage.removeItem("auth");
      localStorage.removeItem("headers");
    }
}
