import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { RetrieveAssetsComponent } from '../Asset/retrieve-assets/retrieve-assets.component';
import { AssetAssignHistoryComponent } from '../Asset/asset-assign-history/asset-assign-history.component';
 
const routes: Routes = [
    { path: '', component: AddemployeeComponent  , canActivate : [ RouteGuardService ]  },
    { path : 'viewemployees' , component : ViewemployeeComponent , canActivate : [ RouteGuardService ] },
    { path : 'edit/:id' , component : EditemployeeComponent , canActivate : [ RouteGuardService ] },
    { path : 'retrieveassets/employee/:id' ,component : RetrieveAssetsComponent ,canActivate : [RouteGuardService] },
    { path : 'assetassign/history/:id' ,component : AssetAssignHistoryComponent ,canActivate : [RouteGuardService] }
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
