import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';

const routes: Routes = [
  { path : "addcompany" , component : AddcompanyComponent },
  { path : "viewcompany" , component : ViewcompanyComponent },
  { path : "editcompbyid/:id" , component : EditcompanyComponent },
  { path : "adddepartment" , component : AdddepartmentComponent },
  { path : "viewdepartment" , component : ViewdepartmentComponent },
  { path : "editdeptbyid/:id" , component : EditdepartmentComponent },
  { path : "adddepartment" , component : AdddepartmentComponent  },
  { path : "viewdepartment" , component : ViewdepartmentComponent },
  { path : "editdeptbyid/:id" , component : EditdepartmentComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
