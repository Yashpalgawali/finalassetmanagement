import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from '../Services/Authentication/jwt-authentication.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthInterceptorService implements HttpInterceptor{

  constructor(private jwtauth : JwtAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let rawToken = this.jwtauth.getAuthenticatedToken()
    if(rawToken!=null)
    { 
      let jwttoken = 'Bearer '+this.jwtauth.getAuthenticatedToken()
      alert(jwttoken)
      request = request.clone({
        setHeaders : {
            Authorization : `${jwttoken}`
          },
          withCredentials: true // Ensure credentials (cookies) are sent  

        })
      }
      return next.handle(request);
  }
}
