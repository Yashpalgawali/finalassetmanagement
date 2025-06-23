import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { RouteGuardService } from 'src/app/Services/route-guard.service';

const routes: Routes = [{ path: '', component: AdminHomeComponent ,canActivate : [RouteGuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminhomeRoutingModule { }
