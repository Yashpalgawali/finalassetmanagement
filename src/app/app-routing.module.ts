import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';
import { AddassettypeComponent } from './MyComponents/AssetType/addassettype/addassettype.component';
import { ViewassettypeComponent } from './MyComponents/AssetType/viewassettype/viewassettype.component';
import { EditassettypeComponent } from './MyComponents/AssetType/editassettype/editassettype.component';
import { AddassetComponent } from './MyComponents/Asset/addasset/addasset.component';
import { ViewassetComponent } from './MyComponents/Asset/viewasset/viewasset.component';
import { EditassetComponent } from './MyComponents/Asset/editasset/editasset.component';
import { AssignedassetsComponent } from './MyComponents/Asset/assignedassets/assignedassets.component';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { AssetAssignHistoryComponent } from './MyComponents/Asset/asset-assign-history/asset-assign-history.component';

const routes: Routes = [
  { path : "addcompany" , component : AddcompanyComponent },
  { path : "viewcompany" , component : ViewcompanyComponent },
  { path : "editcompbyid/:id" , component : EditcompanyComponent },
  { path : "adddepartment" , component : AdddepartmentComponent },
  { path : "viewdepartment" , component : ViewdepartmentComponent },
  { path : "editdeptbyid/:id" , component : EditdepartmentComponent },
  { path : "adddepartment" , component : AdddepartmentComponent  },
  { path : "viewdepartment" , component : ViewdepartmentComponent },
  { path : "editdeptbyid/:id" , component : EditdepartmentComponent },
  { path : "adddesignation" , component : AdddesignationComponent  },
  { path : "viewdesignation" , component : ViewdesignationComponent },
  { path : "editdesigbyid/:id" , component : EditdesignationComponent },
  { path : "addemployee" , component : AddemployeeComponent  },
  { path : "viewemployee" , component : ViewemployeeComponent },
  { path : "editdesigbyid/:id" , component : EditemployeeComponent },
 
  { path : "addassettype" , component : AddassettypeComponent  },
  { path : "viewassettypes" , component : ViewassettypeComponent },
  { path : "editassettypebyid/:id" , component : EditassettypeComponent },
  { path : "addasset" , component : AddassetComponent },
  { path : "viewassets" , component : ViewassetComponent },
  { path : "editassetbyid/:id" , component : EditassetComponent },
  { path : "viewassignedassets" , component : AssignedassetsComponent },
  { path : "viewassetassignhist/:id" , component : AssetAssignHistoryComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
