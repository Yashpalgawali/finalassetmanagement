import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent }   from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent }  from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent }  from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent }  from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddassetComponent } from './MyComponents/Asset/addasset/addasset.component';
import { AddassettypeComponent } from './MyComponents/AssetType/addassettype/addassettype.component';
import { ViewassettypeComponent } from './MyComponents/AssetType/viewassettype/viewassettype.component';
import { EditassettypeComponent } from './MyComponents/AssetType/editassettype/editassettype.component';
import { ViewassetComponent } from './MyComponents/Asset/viewasset/viewasset.component';
import { EditassetComponent } from './MyComponents/Asset/editasset/editasset.component';
import { AssignedassetsComponent } from './MyComponents/Asset/assignedassets/assignedassets.component';
import { AssetAssignHistoryComponent } from './MyComponents/Asset/asset-assign-history/asset-assign-history.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { BasicAuthenticationService } from './Services/basic-authentication.service';
import { HttpInterceptorBasicAuthService } from './http/http-interceptor-basic-auth.service';
import { AdminHomeComponent } from './MyComponents/admin-home/admin-home.component';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { ForgotPasswordComponent } from './MyComponents/ForgotPassword/forgot-password/forgot-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { RetrieveAssetsComponent } from './MyComponents/Asset/retrieve-assets/retrieve-assets.component';
import { ActivityComponent } from './MyComponents/activity/activity.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcompanyComponent,
    ViewcompanyComponent,
    EditcompanyComponent,
    AdddepartmentComponent,
    ViewdepartmentComponent,
    EditdepartmentComponent,
    AdddesignationComponent,
    ViewdesignationComponent,
    EditdesignationComponent,
    AddassetComponent,
    AddassettypeComponent,
    ViewassettypeComponent,
    EditassettypeComponent,
    ViewassetComponent,
    EditassetComponent,
    AssignedassetsComponent,
    AssetAssignHistoryComponent,
    LoginComponent,
    AdminHomeComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ConfirmOtpForgotPassComponent,
    UpdatePasswordComponent,
    ChangePasswordComponent,
    RetrieveAssetsComponent,
    ActivityComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName : 'X-XSRF-TOKEN'
    })
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
