import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AdddepartmentComponent,ViewdepartmentComponent,EditdepartmentComponent    
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class DepartmentModule { }
