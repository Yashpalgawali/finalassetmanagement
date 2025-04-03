import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssettypeRoutingModule } from './assettype-routing.module';
import { AddassettypeComponent } from './addassettype/addassettype.component';
import { ViewassettypeComponent } from './viewassettype/viewassettype.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { EditassettypeComponent } from './editassettype/editassettype.component';
 

@NgModule({
  declarations: [
    AddassettypeComponent,ViewassettypeComponent,EditassettypeComponent
  ],
  imports: [
    CommonModule,
    AssettypeRoutingModule,FormsModule,DataTablesModule
  ]
})
export class AssettypeModule { }
