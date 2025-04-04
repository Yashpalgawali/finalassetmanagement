import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetRoutingModule } from './asset-routing.module';
import { AddassetComponent } from './addasset/addasset.component';
import { ViewassetComponent } from './viewasset/viewasset.component';
import { EditassetComponent } from './editasset/editasset.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AssignedassetsComponent } from './assignedassets/assignedassets.component';

@NgModule({
  declarations: [
     AddassetComponent,
     ViewassetComponent,
     EditassetComponent,
     AssignedassetsComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class AssetModule { }
