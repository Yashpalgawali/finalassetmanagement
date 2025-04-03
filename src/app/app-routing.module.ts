import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
 import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';

import { AddassettypeComponent } from './MyComponents/AssetType/addassettype/addassettype.component';
import { ViewassettypeComponent } from './MyComponents/AssetType/viewassettype/viewassettype.component';
import { EditassettypeComponent } from './MyComponents/AssetType/editassettype/editassettype.component';
import { AddassetComponent } from './MyComponents/Asset/addasset/addasset.component';
import { ViewassetComponent } from './MyComponents/Asset/viewasset/viewasset.component';
import { EditassetComponent } from './MyComponents/Asset/editasset/editasset.component';
import { AssignedassetsComponent } from './MyComponents/Asset/assignedassets/assignedassets.component';
 import { AssetAssignHistoryComponent } from './MyComponents/Asset/asset-assign-history/asset-assign-history.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { AdminHomeComponent } from './MyComponents/admin-home/admin-home.component';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { RouteGuardService } from './Services/route-guard.service';
import { ForgotPasswordComponent } from './MyComponents/ForgotPassword/forgot-password/forgot-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { RetrieveAssetsComponent } from './MyComponents/Asset/retrieve-assets/retrieve-assets.component';
 import { ActivityComponent } from './MyComponents/activity/activity.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';

const routes: Routes = [
 
  { path : "addemployee", component : AddemployeeComponent , canActivate : [RouteGuardService]},
  { path : "viewemployee", component : ViewemployeeComponent , canActivate : [RouteGuardService]},
  { path : "employee/:id", component : EditemployeeComponent , canActivate : [RouteGuardService]},

  // { path : "addassettype" ,   component : AddassettypeComponent , canActivate : [RouteGuardService]},
  // { path : "viewassettypes" , component : ViewassettypeComponent ,canActivate : [RouteGuardService]},
  // { path : "assettypes/:id" , component : EditassettypeComponent, canActivate : [RouteGuardService]},
  // { path : "addasset" ,   component : AddassetComponent ,  canActivate : [RouteGuardService]},
  // { path : "viewassets" , component : ViewassetComponent , canActivate : [RouteGuardService]},
  // { path : "assets/:id" , component : EditassetComponent , canActivate : [RouteGuardService]},
  { path : "viewassignedassets" , component : AssignedassetsComponent ,   canActivate : [RouteGuardService] },
  { path : "assetassignhist/:id", component : AssetAssignHistoryComponent,canActivate : [RouteGuardService] },
  { path : "login" , component : LoginComponent , pathMatch: 'prefix' },
  { path : "" , component : LoginComponent },
  { path : "logout" , component : LogoutComponent , canActivate : [RouteGuardService] },
  { path : "adminhome" , component : AdminHomeComponent , canActivate : [RouteGuardService] },
  { path : "forgotpassword" , component : ForgotPasswordComponent }, 
  { path : "confirmotp" , component : ConfirmOtpForgotPassComponent },
  { path : "updatepassword" , component : UpdatePasswordComponent },
  { path : "changepass" , component : ChangePasswordComponent ,canActivate : [RouteGuardService] },
  { path : "retrieveassetsbyempid/:id" , component : RetrieveAssetsComponent ,canActivate : [RouteGuardService] },
  // { path : "activity" , component : ActivityComponent ,canActivate : [RouteGuardService] },

 { path: 'company', loadChildren: () => import('./MyComponents/Company/company.module').then(m => m.CompanyModule) },
 { path: 'assettype', loadChildren: () => import('./MyComponents/AssetType/assettype.module').then(m => m.AssettypeModule) },
 { path: 'department', loadChildren: () => import('./MyComponents/Department/department.module').then(m => m.DepartmentModule) },
 { path: 'designation', loadChildren: () => import('./MyComponents/Designation/designation.module').then(m => m.DesignationModule) },
 { path: 'asset', loadChildren: () => import('./MyComponents/Asset/asset.module').then(m => m.AssetModule) },
 { path: 'activity', loadChildren: () => import('./MyComponents/activity/activity.module').then(m => m.ActivityModule) } 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
