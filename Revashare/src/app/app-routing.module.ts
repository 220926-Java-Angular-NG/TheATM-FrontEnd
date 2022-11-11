import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ShoppingMallComponent } from './components/shopping-mall/shopping-mall.component';
import { StatementsComponent } from './components/statements/statements.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path:"", redirectTo:'login', pathMatch:'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'forgotpassword', component:ForgotPasswordComponent},
  {path: 'resetpassword', component:ResetPasswordComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'shoppingMall', component:ShoppingMallComponent},
  {path: 'userProfile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
