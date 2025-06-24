import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from 'src/Models/Employee';
import { catchError, Observable } from 'rxjs';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  app_url = GlobalComponents.base_url;
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
    return this.http.get<Employee>(`${this.base_url}editempassignassetbyempid/${eid}`)
                                  .pipe(catchError(this.handleError));
  }
  public updateEmployee(emp : Employee): Observable<Employee[]>
  {
    return this.http.put<Employee[]>(`${this.base_url}`,emp);
  }

  public getAssignedAssets(): Observable<AssignedAssets[]>
  {
    return this.http.get<AssignedAssets[]>(`${this.base_url}viewassignedassets`)
  }

  public getAssetAssignHistByEmpId(eid : any): Observable<AssetAssignHistory[]>
  {
    return this.http.get<AssetAssignHistory[]>(`${this.base_url}viewemphistbyempid/${eid}`); 
  }

  public retrieveAllAssetsByEmpId(emp : Employee)
  {
    return this.http.post(`${this.base_url}delete/`,emp)
  }
  
  public getassignedassetsbyempid(eid : number)
  {
    return this.http.get(`${this.base_url}getassignedassetsbyempid/${eid}`)
  }
  

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {       
      console.log(error.error.errorMessage);
    } else {
      console.log('An unexpected error occurred!');
    }
    throw error;
  }
}