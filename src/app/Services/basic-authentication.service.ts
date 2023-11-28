import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { AuthenticationBean } from 'src/Models/AuthenticationBean';
import { data, map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";
  
  constructor( private http : HttpClient) { }

  executeAuthenticationService(username:any, password:any) {
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: `${basicAuthHeaderString}`
      })
     
      sessionStorage.setItem('token',basicAuthHeaderString)
      
      return this.http.get<AuthenticationBean>(`${this.base_url}basicauth`,{ headers : headers }).pipe(
                    map(
                      data=>{
                              sessionStorage.setItem('token',basicAuthHeaderString);
                              //sessionStorage.setItem('authenticatedUser',username);
                              return data;
                        }
                    ));
  }

