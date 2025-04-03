import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassettypeComponent } from './addassettype/addassettype.component';
import { ViewassettypeComponent } from './viewassettype/viewassettype.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { EditassettypeComponent } from './editassettype/editassettype.component';
 
const routes: Routes = [
    { path: '', component: AddassettypeComponent ,canActivate : [RouteGuardService]},
    { path : 'viewassettypes', component : ViewassettypeComponent , canActivate : [RouteGuardService]},
    { path: 'edit/:id', component: EditassettypeComponent ,canActivate : [RouteGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssettypeRoutingModule { }
