import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
      ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,DataTablesModule
  ]
})
export class ActivityModule { }
