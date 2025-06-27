import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from 'src/Models/Employee';
import { catchError, Observable, of } from 'rxjs';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { ResponseDto } from 'src/Models/ResponseDto';
import { ErrorResponseDto } from 'src/Models/ErrorResponseDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  app_url = GlobalComponents.base_url;
  base_url = this.app_url+"employee/"
  
  constructor(private http : HttpClient) { }

  public saveEmployee(emp : Employee):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}`,emp).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse: ErrorResponseDto = {
                apiPath: error.error.apiPath,
                errorCode: error.status,
                errorMessage: error.error.errorMessage || error.message,
                errorTime: error.error.errorTime || new Date()
              };
              return of(errorResponse);  // convert error to observable
      })
    );
  }

  public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.base_url}`); 
  }

  public getEmployeeById(eid : any):Observable<Employee | ErrorResponseDto>
  {
    return this.http.get<Employee>(`${this.base_url}editempassignassetbyempid/${eid}`).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorResponse: ErrorResponseDto = {
          apiPath: error.error.apiPath,
          errorCode: error.status,
          errorMessage: error.error.errorMessage || error.message,
          errorTime: error.error.errorTime || new Date()
        };
        return of(errorResponse);  // convert error to observable
      })
    );
  }
  public updateEmployee(emp : Employee): Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.put<ResponseDto>(`${this.base_url}`,emp).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse: ErrorResponseDto = {
                apiPath: error.error.apiPath,
                errorCode: error.status,
                errorMessage: error.error.errorMessage || error.message,
                errorTime: error.error.errorTime || new Date()
              };
              return of(errorResponse);  // convert error to observable
      })
    );
  }

  public getAssignedAssets(): Observable<AssignedAssets[]>
  {
    return this.http.get<AssignedAssets[]>(`${this.base_url}viewassignedassets`)
  }

  public getAssetAssignHistByEmpId(eid : any): Observable<AssetAssignHistory[]>
  {
    return this.http.get<AssetAssignHistory[]>(`${this.base_url}viewemphistbyempid/${eid}`); 
  }

  public retrieveAllAssetsByEmpId(emp : Employee) : Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}delete/`,emp).pipe(
      catchError((error : HttpErrorResponse)=>{
        const  errorResponse : ErrorResponseDto = {
                apiPath: error.error.apiPath,
                errorCode: error.status,
                errorMessage: error.error.errorMessage || error.message,
                errorTime: error.error.errorTime || new Date()
        }
        return of(errorResponse)
      })
    )
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