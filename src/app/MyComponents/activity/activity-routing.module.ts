import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';

const routes: Routes = [{ path: '', component: ActivityComponent , canActivate : [RouteGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
