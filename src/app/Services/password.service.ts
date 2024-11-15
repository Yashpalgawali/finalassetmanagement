import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/Models/Users';
import { GlobalComponents } from '../GlobalComponents';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"users/";

  constructor(private http : HttpClient) { }

  updatePassword(user : Users):Observable<Users>
  {
   return  this.http.put<Users>(`${this.base_url}updatepass`,user)
  }
}
