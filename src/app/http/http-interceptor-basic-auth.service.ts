import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../Services/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(request : HttpRequest<any>,next  : HttpHandler)
  {
    let basicAuthHeaderString =  sessionStorage.getItem('token')
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username)
    { 
        request = request.clone({
        setHeaders:{
          Authorization : `${basicAuthHeaderString}`
        }
      })
    }
    return next.handle(request)
  }
}
