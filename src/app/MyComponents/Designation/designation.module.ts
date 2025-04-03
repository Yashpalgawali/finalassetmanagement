import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { AdddesignationComponent } from './adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './editdesignation/editdesignation.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AdddesignationComponent,
    ViewdesignationComponent,
    EditdesignationComponent     
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class DesignationModule { }
