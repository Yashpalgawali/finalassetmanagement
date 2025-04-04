import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RetrieveAssetsComponent } from '../Asset/retrieve-assets/retrieve-assets.component';
import { AssetAssignHistoryComponent } from '../Asset/asset-assign-history/asset-assign-history.component';


@NgModule({
  declarations: [
    AddemployeeComponent,
    ViewemployeeComponent,
    EditemployeeComponent,
    RetrieveAssetsComponent,
    AssetAssignHistoryComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    DataTablesModule,
    NgMultiSelectDropDownModule,
        NgSelectModule
  ]
})
export class EmployeeModule { }
