import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  TOKEN_KEY = '';
  USER_KEY = {"id":0};
  
    constructor() { }
  
    public saveToken(token: string) {
      this.TOKEN_KEY = token;
    }
  
    public getToken() {
      return this.TOKEN_KEY;
    }
  
    public saveUser(id: number) {
      this.USER_KEY.id = id;
    }
  
    public getUser() {
      return this.USER_KEY;
    }
  
    signOut() {
      this.TOKEN_KEY = '';
      this.USER_KEY = {"id":0};
    }
}
