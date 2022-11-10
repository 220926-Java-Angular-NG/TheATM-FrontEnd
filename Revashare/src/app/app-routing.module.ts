import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  {path:"", redirectTo:'login', pathMatch:'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'forgotpassword', component:ForgotPasswordComponent},
  {path: 'resetpassword', component:ResetPasswordComponent},
  {path: 'profile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
