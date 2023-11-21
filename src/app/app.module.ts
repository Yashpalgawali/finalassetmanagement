import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { AddemployeeComponent }  from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';


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
    NgSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
