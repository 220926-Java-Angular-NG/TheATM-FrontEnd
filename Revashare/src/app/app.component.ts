import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Revashare';
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  constructor(private tokenStorage:TokenStorageService){}

  signout(){
    this.tokenStorage.signOut();
    window.location.replace("");
    
  }
}
