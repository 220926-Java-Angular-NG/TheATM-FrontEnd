import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingMallComponent } from './components/shopping-mall/shopping-mall.component';
import { RegisterComponent } from './components/register/register.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferMoneyComponent,
    DashboardComponent,
    MessagesComponent,
    ShoppingMallComponent,
    RegisterComponent,
    DarkmodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }