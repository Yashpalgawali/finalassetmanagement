import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { ViewcompanyComponent } from './viewcompany/viewcompany.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';

const routes: Routes = [ 
  { path : 'addcompany' , component : AddcompanyComponent , canActivate : [RouteGuardService] },
  { path : 'viewcompanies' , component : ViewcompanyComponent , canActivate : [RouteGuardService] },
  { path : 'edit/:id' , component : EditcompanyComponent , canActivate : [RouteGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
