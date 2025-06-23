import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { HttpInterceptorBasicAuthService } from './http/http-interceptor-basic-auth.service';
import { AdminHomeComponent } from './MyComponents/admin-home/admin-home.component';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { ForgotPasswordComponent } from './MyComponents/ForgotPassword/forgot-password/forgot-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // AdminHomeComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ConfirmOtpForgotPassComponent,
    UpdatePasswordComponent,
    ChangePasswordComponent
    
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
