import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddesignationComponent } from './adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './viewdesignation/viewdesignation.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { EditdesignationComponent } from './editdesignation/editdesignation.component';
 
const routes: Routes = [
  {  path: '', component: AdddesignationComponent , canActivate : [RouteGuardService]},
    { path : 'viewdesignations' , component : ViewdesignationComponent , canActivate : [RouteGuardService] },
    {  path: 'edit/:id', component: EditdesignationComponent , canActivate : [RouteGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
