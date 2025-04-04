import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassetComponent } from './addasset/addasset.component';
import { ViewassetComponent } from './viewasset/viewasset.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { EditassetComponent } from './editasset/editasset.component';
import { AssignedassetsComponent } from './assignedassets/assignedassets.component';

const routes: Routes = [
    { path: '', component: AddassetComponent },
    { path : 'viewassets', component : ViewassetComponent, canActivate : [RouteGuardService] },
    { path : 'edit/:id', component : EditassetComponent, canActivate : [RouteGuardService] },
    { path : 'viewassignedassets', component : AssignedassetsComponent , canActivate : [RouteGuardService] }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
