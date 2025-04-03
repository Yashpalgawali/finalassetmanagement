import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

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
        sessionStorage.setItem('errorMessage','You are not authorized. Please Login to Continue')
        this.router.navigate(['login'])
        return false
      }
  }

}
