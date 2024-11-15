import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { GlobalComponents } from '../GlobalComponents';
import { Department } from 'src/Models/Department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"department/";
  constructor(private http : HttpClient) { }

  public saveDepartment(department : Department):Observable<Department>
  {
    return this.http.post<Department>(`${this.base_url}`,department);
  }

  public getAllDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.base_url}`);
  }

  public getDepartmentById(did :string)
  {
    return this.http.get<Department>(`${this.base_url}${did}`);
  }

  public getDepartmentByCompId(did :any):Observable<Department[]>
  {
   return this.http.get<Department[]>(`${this.base_url}getdeptbycompid/${did}`);
  }
  
  public getDepartmentByCompName(name :any):Observable<Department[]>
  {
   return this.http.get<Department[]>(`${this.base_url}getdeptbycompname/${name}`);
  }
  
  public updateDepartment(department : Department)
  {
    return this.http.put<Department[]>(`${this.base_url}`,department);
  }

}
