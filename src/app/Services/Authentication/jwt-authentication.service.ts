import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GlobalComponents } from 'src/app/GlobalComponents';
import { JwtToken } from 'src/Models/JwtToken';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService  {

  constructor(private http: HttpClient) { }
    app_url = GlobalComponents.base_url;

  executeJwtAuthenticationService(username:any, password:any):Observable<JwtToken> {
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: `${basicAuthHeaderString}`
    })
   return this.http.post<JwtToken>(`${this.app_url}authenticate`, 
                                    {},{ headers: headers, withCredentials: true }).pipe(
                                  map(
                                        data=>{ 
                                                sessionStorage.setItem('token',basicAuthHeaderString);
                                                sessionStorage.setItem('authenticatedUser',username);
                                                localStorage.setItem('token',basicAuthHeaderString);
                                                localStorage.setItem('authenticatedUser',username);
                                                return data;
                                          }
                                      ));
 }
  getAuthenticatedUser() {
    
    if(sessionStorage.getItem('authenticatedUser')!=null || sessionStorage.getItem('authenticatedUser')!='')
    {
      return sessionStorage.getItem('authenticatedUser')
    }
    else
    {
      sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
      sessionStorage.setItem('authenticatedUser',`${localStorage.getItem('authenticatedUser')}`)
      return localStorage.getItem('authenticatedUser') 
    }
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()!=null) {
      return sessionStorage.getItem('token') 
    }
    else
      return
  }

  isUserLoggedIn() {
    if(sessionStorage.getItem('authenticatedUser')!=null || localStorage.getItem('authenticatedUser')!='')
    {
      let user = sessionStorage.getItem('token')
      return !(user === null)
    }
    else {
      let user = localStorage.getItem('token')
      return !(user === null)
    }
  }

  logout() {

    this.http.post(`${this.app_url}logout`,  {  withCredentials: true })
    .subscribe({
        complete: () => {
          sessionStorage.removeItem('authenticatedUser')
          sessionStorage.removeItem('token')
          localStorage.removeItem('authenticatedUser')
          localStorage.removeItem('token')
             
          alert('Logged OUT')
        },
        error: (err) => {
            console.error('Logout error:', err);
        }
    });
  }
}
