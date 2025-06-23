import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { AdminHomeComponent } from './MyComponents/admin-home/admin-home.component';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { RouteGuardService } from './Services/route-guard.service';
import { ForgotPasswordComponent } from './MyComponents/ForgotPassword/forgot-password/forgot-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';

const routes: Routes = [
  
  { path : "login" , component : LoginComponent , pathMatch: 'prefix' },
  { path : "" , component : LoginComponent },
  { path : "logout" , component : LogoutComponent , canActivate : [RouteGuardService] },
  { path : "adminhome" , component : AdminHomeComponent , canActivate : [RouteGuardService] },
  { path : "forgotpassword" , component : ForgotPasswordComponent }, 
  { path : "confirmotp" , component : ConfirmOtpForgotPassComponent },
  { path : "updatepassword" , component : UpdatePasswordComponent },
  { path : "changepass" , component : ChangePasswordComponent ,canActivate : [RouteGuardService] },
  
 { path: 'company', loadChildren: () => import('./MyComponents/Company/company.module').then(m => m.CompanyModule) },
 { path: 'assettype', loadChildren: () => import('./MyComponents/AssetType/assettype.module').then(m => m.AssettypeModule) },
 { path: 'department', loadChildren: () => import('./MyComponents/Department/department.module').then(m => m.DepartmentModule) },
 { path: 'designation', loadChildren: () => import('./MyComponents/Designation/designation.module').then(m => m.DesignationModule) },
 { path: 'asset', loadChildren: () => import('./MyComponents/Asset/asset.module').then(m => m.AssetModule) },
 { path: 'activity', loadChildren: () => import('./MyComponents/activity/activity.module').then(m => m.ActivityModule) },
 { path: 'employee', loadChildren: () => import('./MyComponents/Employee/employee.module').then(m => m.EmployeeModule) },
  
  { path: 'adminhome', loadChildren: () => import('./MyComponents/admin-home/adminhome.module').then(m => m.AdminhomeModule) } 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
