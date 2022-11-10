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
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StatementsComponent } from './components/statements/statements.component';



@NgModule({
  declarations: [
    AppComponent,
    TransferMoneyComponent,
    DashboardComponent,
    MessagesComponent,
    ShoppingMallComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    UserProfileComponent,
    StatementsComponent
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