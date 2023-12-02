import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private basicauthserv : BasicAuthenticationService,private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.basicauthserv.isUserLoggedIn())
      {
        return true
      }
      else {
        this.router.navigate(['login'])
        return false
      }
  }

}
