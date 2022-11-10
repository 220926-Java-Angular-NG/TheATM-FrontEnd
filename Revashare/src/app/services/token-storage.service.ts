import { Injectable } from '@angular/core';
import { AuthReponse } from '../components/authResponse';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
    authResponse:AuthReponse;
  
    constructor() { }

    setAuth(authR:AuthReponse){
      this.authResponse = authR;
    }

    signOut() {
      this.authResponse = undefined;
    }
}
