import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './viewdepartment/viewdepartment.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';

const routes: Routes = [
    { path: '', component: AdddepartmentComponent },
    { path : 'viewdepartments', component : ViewdepartmentComponent , canActivate : [RouteGuardService] } ,
    { path : 'edit/:id' , component : EditdepartmentComponent , canActivate : [RouteGuardService] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
