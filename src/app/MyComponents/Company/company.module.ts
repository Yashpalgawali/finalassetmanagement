import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { ViewcompanyComponent } from './viewcompany/viewcompany.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
   

@NgModule({
  declarations: [
    AddcompanyComponent,
    ViewcompanyComponent,
    EditcompanyComponent

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CompanyModule { }
