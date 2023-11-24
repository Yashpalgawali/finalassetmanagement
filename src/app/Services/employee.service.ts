import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/Models/Employee';
import { Observable } from 'rxjs';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  app_url = GlobalComponent.base_url;
  base_url = this.app_url+"employee/"
  constructor(private http : HttpClient) { }

  public saveEmployee(emp : Employee):Observable<Employee>
  {
    return this.http.post<Employee>(`${this.base_url}`,emp);
  }

  public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.base_url}`); 
  }

  public getEmployeeById(eid : any):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.base_url}${eid}`);
  }
  // public updateEmployee(desig : Employee):Observable<Employee[]>
  // {
  //   return this.http.put<Employee[]>(`${this.base_url}`,desig);
  // }

  public getAssignedAssets():Observable<AssignedAssets[]>
  {
    return this.http.get<AssignedAssets[]>(`${this.base_url}viewassignedassets`)
  }

  public getAssetAssignHistByEmpId(eid : any):Observable<AssetAssignHistory[]>
  {
    return this.http.get<AssetAssignHistory[]>(`${this.base_url}viewemphistbyempid/${eid}`); 
  }
}
